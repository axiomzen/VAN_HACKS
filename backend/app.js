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
LEFT JOIN item_status ON item_status.shopping_list_item_id = shopping_list_items.id
WHERE item_status.status IS NULL AND item_inventory.item_type = $1
ORDER BY shopping_list_items.item_priority
LIMIT 1;
    `, [typeId]
  )
  
  if (res.rows.length > 0){
    const res = await client.query(`
    INSERT INTO item_status (status, item_inventory_id, shopping_list_item_id)
    VALUES ('matched', $1, $2);
      `, [res.rows[0].inv_id, res.rows[0].list_id]
    )
  }
  console.log("!!!", res.rows)
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

