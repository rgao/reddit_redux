// main web app
const express = require('express')
const app = express()

// logging middleware and json parser
const logger = require('morgan');
app.use(logger('dev'));

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// for heroku deployment
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};

// using the appropriate connection string and starting up a client instance with connection to postgreSQL
const env = process.env.NODE_ENV || 'test';
const envConfig = require('./server/config/config.js')[env];
const Client = require('pg').Client;

const client = new Client({
  connectionString: envConfig.url,
});

client.connect();

// routing
const routes = require("./server/routes/index.js");
app.use(routes);

// client
const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
  console.log(`API Server now listening on PORT ${PORT}!`);
});

