// App setup
const express = require('express');
const app = express();
const port = 2000;
const bodyParser = require('body-parser');
const proxy = require('express-http-proxy');

// Setup db
const pg = require('pg');
const dbConfig = {
  user: 'admin',
  database: 'editor',
  password: 'admin',
  port: 5432
};
const pool = new pg.Pool(dbConfig);

//Endpoints needed
// updated client -> if status send notification to agencies

//Donor Adds Item
// -> add to inventory
// -> "match" function
//  /item_inventory
async function sendMail(to, subject, msg) {
  var nodemailer = require('nodemailer');

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'GlassBoxApp@gmail.com',
      pass: 'Bcxsm117!'
    }
  });

  var mailOptions = {
    from: 'GlassBoxApp@gmail.com',
    to: to,
    subject: subject,
    html: msg
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  return;
}

async function findMatch(typeId) {
  const client = await pool.connect();
  const res = await client.query(
    `
  SELECT 
  item_inventory.id as inv_id, shopping_list_items.id as list_id
FROM item_inventory
INNER JOIN shopping_list_items
  ON shopping_list_items.item_type = item_inventory.item_type
WHERE item_inventory.item_type = $1
ORDER BY shopping_list_items.item_priority
LIMIT 1;
    `,
    [typeId]
  );
  console.log(res.rows);
  if (res.rows.length > 0) {
    let res2 = await client.query(
      `
    INSERT INTO item_match (item_inventory_id, shopping_list_item_id)
    VALUES ($1, $2);
      `,
      [res.rows[0].inv_id, res.rows[0].list_id]
    );
    let res3 = await client.query(
      `
    UPDATE item_inventory SET item_status = 'matched' WHERE item_inventory.id = $1
      `,
      [res.rows[0].inv_id]
    );
    let res4 = await client.query(
      `
    UPDATE shopping_list_items SET list_status = 'matched' WHERE shopping_list_items.id = $1
      `,
      [res.rows[0].list_id]
    );
    let donorEmail = await client.query(
      `
    SELECT i.donor_email
    FROM item_inventory as i
    WHERE i.id = $1
    LIMIT 1;
      `,
      [res.rows[0].inv_id]
    );
    let clientInfo = await client.query(
      `
    SELECT c.email, c.fname, c.lname, c.id, it.item_category
    FROM clients as c
    INNER JOIN shopping_list_items as sl ON sl.client_id = c.id 
    INNER JOIN item_types AS it ON it.id = sl.item_type
    WHERE sl.id = $1
    LIMIT 1;
      `,
      [res.rows[0].list_id]
    );
    console.log(donorEmail.rows);
    console.log(clientInfo.rows);
    //email to doner
    let subject = `Your ${
      clientInfo.rows[0].item_category
    } donation has been matched`;
    let msg = `
    <div><span style="font-family: calibri, sans-serif;">Hello -name-,</span></div>
<div>&nbsp;</div>
<div><span style="font-family: calibri, sans-serif;">Your ${
      clientInfo.rows[0].item_category
    } donation has been matched with a family in your community! Thank you so much for your generosity. Because of people like you, we can support those in need. </span><br /><br /><span style="font-family: calibri, sans-serif;">We still have many more families in need of help. Please encourage others to join you in giving!</span></div>
<p><img src="https://our.umbraco.com/media/wiki/273471/636559220954663668_addthisjpeg.jpeg?bgcolor=fff&amp;height=154&amp;width=281&amp;format=png" width="164" height="82" /></p>
<div><span style="font-size: 10pt;"><span style="font-family: calibri, sans-serif;"><strong>Stephanie Petersen</strong></span></span></div>
<div><span style="font-family: calibri, sans-serif; font-size: 10pt;">Operations Manager, BabyGoRound</span><br /><span style="font-family: calibri, sans-serif; font-size: 10pt;">604-558-4840</span></div>
`;
    sendMail(donorEmail.rows[0].donor_email, subject, msg);

    //email to doner
    subject = 'Matched With Item On Wish List';
    msg = `Congratulation you have been matched with an item! Please click here to  schedule an appoitment to pick up your items. To see your current wish list or request new itemsYou visit: http://localhost:4000/#/shopping-List/${
      clientInfo.rows[0].id
    } /n
    This item was donater by a generous member of your community. We encourage you to send a short message to tell them what this small act of kindness means to you and your baby. To do so please click 'here'`;
    sendMail(clientInfo.rows[0].email, subject, msg);
  }
}

const matchingEndpoints = new Set(['/item_inventory', '/shopping_list_items']);

app.use(
  '/',
  proxy(process.env.POSTGREST_HOST, {
    proxyReqOptDecorator: function(proxyReqOpts) {
      return new Promise(function(resolve) {
        proxyReqOpts.headers['Prefer'] = 'return=representation';
        resolve(proxyReqOpts);
      });
    },

    userResDecorator: async function(proxyRes, proxyResData, userReq, userRes) {
      const isPost = userReq.method === 'POST';
      const isPatch = userReq.method === 'PATCH';
      if (isPost && matchingEndpoints.has(userReq.url)) {
        const response = JSON.parse(proxyResData);
        if (Array.isArray(response)) {
          for (const item of response) {
            findMatch(item.item_type);
          }
        } else {
          findMatch(response.item_type);
        }
      }
      return proxyResData;
    }
  })
);

app.listen(port, () => console.log(`Express server listening on port ${port}`));
