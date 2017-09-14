var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// app.use('/assets', express.static('assets'));
// var jsonParser = bodyParser.json()

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/reddit';
var posts = [
  {
    "name": "Alexander Zhao",
    "github": "ChiuMungZitAlexander",
    "gender": "male"
  },
  {
    "name": "Alfred Wei",
    "github": "AlfredWei0420",
    "gender": "male"
  },
  {
    "name": "Alice Shen",
    "github": "aliceshen227",
    "gender": "female"
  },
  {
    "name": "Chase Wang",
    "github": "chasssssse",
    "gender": "male"
  },
  {
    "name": "Chris Huang",
    "github": "ChrisH404",
    "gender": "male"
  },
  {
    "name": "Haochen Li",
    "github": "haochenli",
    "gender": "male"
  },
  {
    "name": "Jerry Liu",
    "github": "Jerry-ZWL",
    "gender": "male"
  },
  {
    "name": "Jessie Cai",
    "github": "ttttsai",
    "gender": "female"
  },
  {
    "name": "John Doe",
    "github": "janedoe",
    "gender": "male"
  },
  {
    "name": "Leo Lam",
    "github": "linjialiang1234",
    "gender": "male"
  },
  {
    "name": "Vinson Liu",
    "github": "sliu102",
    "gender": "male"
  },
  {
    "name": "Zhengnan Zhang",
    "github": "ZhengnanZhang",
    "gender": "male"
  },
  {
    "name": "Zoe Zhou",
    "github": "Zoe_Zhou",
    "gender": "male"
  }
];
var post123 = 
   [
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


app.get('/hello', function (req, res) {
  res.send("Hello World");


  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");

    //create collection
    db.createCollection("posts", function(err, res) {
      if (err) throw err;
      console.log("Collection posts created!");
      // db.close();
    });

    db.close();
    });

 });

  
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     console.log("Database created!");

//     //create collection
//     db.createCollection("posts", function(err, res) {
//       if (err) throw err;
//       console.log("Collection posts created!");
//       // db.close();
//     });

//     db.close();
// });

//});


  //  app.get('/posts', function(req,res){

  //   MongoClient.connect(url, function(err, db) {
  //     if (err) throw err;
  //     console.log("Database created!");

  //   });


  //  });




    //insert json data
  //   db.collection("posts").insertMany(postData, function(err, res) {
  //     if (err) throw err;
  //     console.log("1 document inserted");
  //     db.close();
    
  //   });

  //   //show all the posts
  //   db.collection("posts").find({}).toArray(function(err, result) {
  //     if (err) throw err;
  //     console.log(result);
  //     // db.close();
  //   });
  // });

 


//   db.collection("students").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     // db.close();
//   });
