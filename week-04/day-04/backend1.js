'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/reddit';
// var initialInfo = [{"id": 25,
// "title": "Dear JavaScript",
// "href": "http://9gag.com",
// "timestamp": 1494339525,
// "score": 791},{
  // "id": 74,
  // "title": "Crockford",
  // "href": "http://9gag.com",
  // "timestamp": 1494138425,
  // "score": 567}]
var getPost= [
  {
    "id": 25,
    "title": "Dear JavaScript",
    "href": "http://9gag.com",
    "timestamp": 1494339525,
    "score": 791,
    "owner": null,
    "vote": 1
  },
  {
    "id": 74,
    "title": "Crockford",
    "href": "http://9gag.com",
    "timestamp": 1494138425,
    "score": 567,
    "owner": "kristof4",
    "vote": -1
  }
]
MongoClient.connect(url, function (err, db) {
  var collection = db.collection('students');
  if (err) {
    console.log('Unable to connect to the MongoDB server. Error:', err);
  }
  console.log('Connection established to ' + url);
  // collection.insertMany(initialInfo, function(err, result) {
  //   console.log("Inserted students into the document collection");
  // });

 
  db.close();
});



app.get('/hello', function(req, res){
  res.send('hello world');
})
app.listen(8080);
//lists all the posts
app.get('/posts',function(req,res){
  var obj = { posts: [] };
  
  MongoClient.connect(url, function (err, db) {
    var collection = db.collection('students');
    if (err) {
      console.log('Unable to connect to the MongoDB server. Error:', err);
    }

    // collection.insertMany(getPost, function(err, res) {
    //   if (err) throw err;
    //   console.log("1 document inserted");
    //   // db.close();
   
    // });

    collection.find({}).toArray(function(err, docs) {
      console.dir(docs);
      obj.posts = docs;
      res.send(JSON.stringify(obj));
    });

    // collection.remove({},function(err,removed) {
    //     console.log(removed);
    // })


    db.close();
  });
})