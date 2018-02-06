var express = require('express');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const db = require('./config/db');

var app=express();
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.use(express.static( '/public'));
app.post('/profile', upload.single('avatar'), function (req, res, next) {
  console.log(req.file, req.body);// req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  res.send('success');
});
app.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});

const index = require('./config/index');
// Connection URL
const url = 'mongodb://admin:admin@ds223268.mlab.com:23268/galery2'
// where is your password?? i have written it here but it didm't work   Kity satelity:P
// Database Name
const dbName = 'galery2';
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  const db = client.db(dbName);

  index.insertDocuments(db, function() {
    index.findDocuments(db, function() {
      client.close();
    });
  });
});
