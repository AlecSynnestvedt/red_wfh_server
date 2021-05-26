require("dotenv").config();

/*
IMPORTS 
=========
*/ 
const express = require('express');
const dbConnection = require('./db');
/*
const controllers  = require('./controllers');
const middleware = require('./middleware');
*/

/*
INSTANTIATION 
==============
*/
const app = express();

/*
MIDDLEWARE 
=================
*/



/*
ENDPOINTS
=================
*/

// app.use('/auth', controllers.userscontroller);
// app.use(middleware.validateSession);
// app.use('/posts', controllers.postscontroller);
// app.use('/comments', controllers.commentscontroller);

/*
DB AUTH and SYNC 
=================
*/
try {
  dbConnection
      .authenticate()
      .then(async () => await dbConnection.sync(
              // {force: true}
          )) 
      .then(() => {
          app.listen(process.env.PORT, () => {
              console.log(`[SERVER]: App is listening on ${process.env.PORT}`);
          });
      });
} catch (err) {
  console.log('[SERVER]: Server crashed');
  console.log(err);
}