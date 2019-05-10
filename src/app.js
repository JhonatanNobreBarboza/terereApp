const express = require('express');
const firebase = require('firebase-admin');
const app = express();
const router = express.Router();
//Rotas
const index = require('./routes/index');
const terereRoute = require('./routes/terereRouter');
const serviceAccount = require("./auth/terereif-firebase-adminsdk-42exu-e151edeb8a.json");

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://terereif.firebase.com/"
  });

app.use('/', index);
app.use('/terere', terereRoute);
module.exports = app;