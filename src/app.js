const express = require('express');
const app = express();
const router = express.Router();
//Rotas
const index = require('./routes/index');
const terereRoute = require('./routes/terereRouter');
app.use('/', index);
app.use('/terere', terereRoute);
module.exports = app;