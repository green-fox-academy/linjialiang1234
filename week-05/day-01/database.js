'use strict'

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/test';
var defaultData = [{"description":"Buy food",
"state":0},
{"description":"Go to the coffee","state": 1},
{"description":"Walk","state":0}];

var count = 0;

var obj = {
  todos: []
};

function createDB(){
  MongoClient.connect(url,function(err, db){
      if (err) {
          console.log('Unable to connect to the MongoDB server. Error:', err);
      }
      console.log('Connection established to ' + url);

      var todoDB = db.collection("todo");
      // redditDB.remove();
      todoDB.insertMany(defaultData, function(err, res){
         // console.log(res.insertedCount);
      });
      db.close();
  }); 
}

function showData(callback) {
  MongoClient.connect(url, function(err,db) {
    var todoDB = db.collection("todo");
    todoDB.find({}).toArray(function(err, result) {
      if(err) throw err;
      count = result.length;
      obj.todos = result;
      db.close();
      callback(obj);
    })
  })
}

function showData(callback) {
  MongoClient.connect(url, function(err,db) {
    var todoDB = db.collection("todo");
    todoDB.find({}).toArray(function(err, result) {
      if(err) throw err;
      count = result.length;
      obj.todos = result;
      db.close();
      callback(obj);
    })
  })
}

function showSingleData(id,callback) {
  MongoClient.connect(url, function(err,db) {
    var todoDB = db.collection("todo");
    todoDB.find({"_id": mongodb.ObjectId(id)}).toArray(function(err, result) {
      if(err) throw err;
      count = result.length;
      obj.todos = result;
      db.close();
      callback(obj);
    })
  })
  

}

module.exports = {
  createDB : createDB,
  showData : showData,
  showSingleData : showSingleData
  // createPost : createPost,
  // upVote : upVote,
  // downVote : downVote
}