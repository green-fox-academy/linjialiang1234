'use strict'

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/epam';
var defaultData = [{"title":"Dear JavaScript","href":"http://9gag.com","id": 1,"timestamp":1494339525999,"score":2,"owner":null, "vote": 1},
{"title":"Post 1","href":"http://9gag.com","id":2,"timestamp":1505456041859,"score":-1,"owner":"kristof4", "vote": -1},
{"title":"Nothing special","href":"http://9gag.com","id":3,"timestamp":1500000000000,"score":0,"owner":"kristof4", "vote":0}];

var count = 0;

var obj = {
  posts: []
};
function createDB(){
  MongoClient.connect(url,function(err, db){
      if (err) {
          console.log('Unable to connect to the MongoDB server. Error:', err);
      }
      console.log('Connection established to ' + url);

      // if(!db.collection("reddit")){
      //     db.createCollection("reddit", function(err, res) {
      //         if (err) throw err;
      //       });
      // }

      var redditDB = db.collection("reddit");
      // redditDB.remove();
      redditDB.insertMany(defaultData, function(err, res){
         // console.log(res.insertedCount);
      });
      db.close();
  }); 
}

function showData(callback) {
  MongoClient.connect(url, function(err,db) {
    var redditDB = db.collection("reddit");
    redditDB.find({}).toArray(function(err, result) {
      if(err) throw err;
      count = result.length;
      obj.posts = result;
      db.close();
      callback(obj);
    })
  })
}

function createPost(body,username,callback){
  MongoClient.connect(url, function(err,db) {
    var redditDB = db.collection("reddit");

    body.score = 0;
    body.vote = 0;
    body.timestamp = new Date().getTime();
    body.owner = username || null;

    redditDB.insertOne(body, function(err,res) {
      callback(body);
    });
    db.close();
  })

}

function upVote(id,callback) {
  MongoClient.connect(url, function (err, db) {
    var redditDB = db.collection("reddit");
    redditDB.findOne({"id" : parseInt(id)},function(err, res) {
      if(res.vote !== 1) {
        res.score++;
        res.vote++;
        redditDB.update({"id" : parseInt(id)}, res,function(err, res2) {
          db.close();
          callback(res);
         });
        } else {
          callback(res);
        }
    
    });
  });
}

function downVote(id,callback) {
  MongoClient.connect(url, function(err,db) {
    var redditDB = db.collection("reddit");

    redditDB.findOne({"id" : parseInt(id)}, function(err,res) {
      if(res.vote!== -1) {
        res.score--;
        res.vote--;
        redditDB.update({"id" : parseInt(id)},res,function(err,res2) {
          db.close();
          callback(res);
        });
      }else{
        callback(res);
      }
    });

  });
}
module.exports = {
  createDB : createDB,
  showData : showData,
  createPost : createPost,
  upVote : upVote,
  downVote : downVote
}