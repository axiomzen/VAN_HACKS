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


app.use('/', proxy(process.env.POSTGREST_HOST, {

  /* perform code before requesting:
  proxyReqPathResolver: (req) => {
    process.nextTick(() => {
      /// TODO
    })
    return req.url
  }
  */

  // perform code after request has finished:
  userResDecorator: function(proxyRes, proxyResData, userReq, userRes) {
    // TODO
    // e.g.
    // requested URL: userReq.url
    // response from API: JSON.parse(proxyResData))
    return proxyResData
  }
}));

app.listen(port, () =>
  console.log(`Express server listening on port ${port}`))

