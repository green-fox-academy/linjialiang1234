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

function createTodo(body,callback){
  MongoClient.connect(url, function(err,db) {
    var redditDB = db.collection("todo");

    // body.description = 0;
    // body.vote = 0;
    // body.timestamp = new Date().getTime();
    // body.owner = username || null;

    redditDB.insertOne(body, function(err,res) {
      // obj.todos = 
      callback(body);
    });
    db.close();
  })

}

function updateState(id,callback) {
  MongoClient.connect(url, function (err, db) {
    var todoDB = db.collection("todo");
    var myquery = {"_id": mongodb.ObjectId(id)};
    var newvalue = {$set: {state : 1}};
    todoDB.find({"_id": mongodb.ObjectId(id)}).toArray(function(err, res) {
      
    todoDB.updateOne(myquery, newvalue,function(err, res2) {
          db.close();
          callback(res);
    });
  });
  });
}

function deleteTodo(id, callback){
  MongoClient.connect(url, function(err, db){
      var todoDB = db.collection("todo");

      todoDB.remove({"_id" : mongodb.ObjectId(id)}, function(err,res){
          callback(res);
      });
  });
}


module.exports = {
  createDB : createDB,
  showData : showData,
  showSingleData : showSingleData,
  createTodo : createTodo,
  updateState : updateState,
  deleteTodo : deleteTodo
  // createPost : createPost,
  // upVote : upVote,
  // downVote : downVote
}