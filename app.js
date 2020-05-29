const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const routes = require('./Config/routes');

app.use(bodyParser.json());

routes(app);

module.exports = app;
