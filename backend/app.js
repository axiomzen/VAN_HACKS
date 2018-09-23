// App setup
const express = require('express');
const app = express();
const port = 2000;
const bodyParser = require('body-parser');

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
app.post('/item_inventory', (req, res, next) => {
const { item_type, item_labels, item_status, image, donor_email, location_id, added_by } = req.body;
  pool.connect((err, client, done) => {
    if (err) {
      return next(err);
    }
    // If firstname or lastname isnt sent, don't update
    let queryString = 'INSERT INTO item_inventory VALUES ';


});

app.listen(port, () =>
  console.log(`Express server listening on port ${port}`));
