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
  port: 5432,
};
const pool = new pg.Pool(dbConfig);

//Endpoints needed
// updated client -> if status send notification to agencies

//Donor Adds Item 
// -> add to inventory
    // -> "match" function

// Client adds item to wish list 
// 1 call with all items
// notification
    // check to see if available
    // if so change item status  
    // send notification

//create http client to  


//Donor Adds Item 
// -> add to inventory
    // -> "match" function
//  /item_inventory

async function findMatch(typeId) {
  const client = await pool.connect()
  const res = await client.query(`
  SELECT 
  item_inventory.id as inv_id, shopping_list_items.id as list_id
FROM item_inventory
INNER JOIN shopping_list_items
  ON shopping_list_items.item_type = item_inventory.item_type
WHERE item_inventory.item_type = $1
ORDER BY shopping_list_items.item_priority
LIMIT 1;
    `, [typeId]
  )
  console.log(res.rows);
  if (res.rows.length > 0){
    let res2 = await client.query(`
    INSERT INTO item_match (item_inventory_id, shopping_list_item_id)
    VALUES ($1, $2);
      `, [res.rows[0].inv_id, res.rows[0].list_id]
    )
    let res3 = await client.query(`
    UPDATE item_inventory SET item_status = 'matched' WHERE item_inventory.id = $1
      `,[res.rows[0].inv_id]
    )
    let res4 = await client.query(`
    UPDATE shopping_list_items SET list_status = 'matched' WHERE shopping_list_items.id = $1
      `,[res.rows[0].list_id]
    )
  }
}

const matchingEndpoints = new Set(['/item_inventory', '/shopping_list_items'])

app.use('/', proxy(process.env.POSTGREST_HOST, {

  proxyReqOptDecorator: function(proxyReqOpts) {
    return new Promise(function(resolve) {
      proxyReqOpts.headers['Prefer'] = 'return=representation'
      resolve(proxyReqOpts);
    })
  },

  userResDecorator: async function(proxyRes, proxyResData, userReq, userRes) {
    const isPost = userReq.method === 'POST'
    if (isPost && matchingEndpoints.has(userReq.url)) {
      const response = JSON.parse(proxyResData)
      if (Array.isArray(response)) {
        for (const item of response) {
          findMatch(item.item_type)
        }
      } else {
        findMatch(response.item_type)
      }
    }
    //Add notification trigger
    return proxyResData
  }
}));

app.listen(port, () =>
  console.log(`Express server listening on port ${port}`))

