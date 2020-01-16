// Require packages and set the port
const express = require('express');
const port = 3002;
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
//display Hello server message

routes(app);

//start server on port 3002
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port ${server.address().port}`);
});

// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));