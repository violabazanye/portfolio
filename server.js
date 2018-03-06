//Install express server
const express = require('express');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

//add this so the browser can GET the bower files
app.use('/bower_components', express.static(__dirname + '/bower_components'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080); 