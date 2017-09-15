
'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var app = express();
// app.set('view engine', 'html');

app.use('/', express.static('public'));
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
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  // db.createCollection("students", function(err, res){
  //      if (err) throw err;
  //   console.log("Collection created!");
  //   //   //   db.close();

  // });
  var collection = db.collection('students');
  //   // if (err) {
  //   //   console.log('Unable to connect to the MongoDB server. Error:', err);
  //   // }
  //   // console.log('Connection established to ' + url);
  // collection.insertMany(getPost, function(err, result) {
  //    console.log("Inserted students into the document collection");
  //  });

  collection.find({}).toArray(function(err, docs) {
       console.dir(docs);
      //  obj.posts = docs;
      //  res.send(JSON.stringify(obj));
     });
  db.close();
});
// MongoClient.connect(url, function (err, db) {
//   if (err) {
//     console.log('Unable to connect to the MongoDB server. Error:', err);
//   }
//   console.log('Connection established to ' + url);
//   // db.createCollection("students", function(err, res){
//   //   if (err) throw err;
//   //   console.log("Collection created!");
//   //   db.close();
    
// });
// MongoClient.connect(url, function (err, db) {
//   db.createCollection("students", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     // db.close();
//   });
//   // var collection = db.collection('students');
//   // if (err) {
//   //   console.log('Unable to connect to the MongoDB server. Error:', err);
//   // }
//   // console.log('Connection established to ' + url);
//   // collection.insertMany(initialInfo, function(err, result) {
//   //   console.log("Inserted students into the document collection");
//   // });

 
//   db.close();
// });



app.get('/hello', function(req, res){
  res.send('hello world');
})
app.listen(8080);
//lists all the posts
app.get('/',function(req,res){
  var obj = { posts: [] };
  
  // MongoClient.connect(url, function (err, db) {
  //   var collection = db.collection('students');
  //   if (err) {
  //     console.log('Unable to connect to the MongoDB server. Error:', err);
  //   }

    // collection.insertMany(getPost, function(err, res) {
    //   if (err) throw err;
    //   console.log("1 document inserted");
    //   // db.close();
   
    // });

    // collection.find({}).toArray(function(err, docs) {
    //   console.dir(docs);
    //   obj.posts = docs;
    //   res.send(JSON.stringify(obj));
    // });

    // collection.remove({},function(err,removed) {
    //     console.log(removed);
    // })


  //   db.close();
  // });

  res.sendFile(__dirname + "/public/reddit.html");
})

app.get('/posts',function(req,res){
  var obj = { posts: [] };

  MongoClient.connect(url, function (err, db) {
      var collection = db.collection('students');
      if (err) {
        console.log('Unable to connect to the MongoDB server. Error:', err);
      }


   collection.find({}).toArray(function(err, docs) {
      // console.dir(docs);
      obj.posts = docs;
      res.send(obj);
    });
     db.close();

  })
      // console.log("123" + obj)
     // res.send(obj);
  


});


app.post('/posts',jsonParser,function(req, res) {
  var obj = { posts: [] };
  
  MongoClient.connect(url, function (err, db) {
    var collection = db.collection('students');
    if (err) {
      console.log('Unable to connect to the MongoDB server. Error:', err);
    }

    var newObj = {
      'title':req.body.title,
      'href':req.body.href,
      'id': 111,
      'timestamp':new Date().getTime(),
      'score':0
    }
    // var postId = req.body.id;
    // var postUrl = req.body.href;
    // var postTitle = req.body.title;


    // var newObj = {
    //   "id": postId,
    //   "href": postUrl,
    //   "title":postTitle,


    // };
    // collection.insertMany(getPost, function(err, res) {
    //   if (err) throw err;
    //   console.log("1 document inserted");
    //   // db.close();
   
    // });
    collection.insertOne(newObj,function(err,docs) {
        if(err) throw err;
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify(newObj));

        console.log(newObj + " has inserted")
    });

    // collection.find({}).toArray(function(err, docs) {
    //   // console.dir(docs);
    //   obj.posts = docs;
    //   res.send(JSON.stringify(obj));
    // });

    // collection.remove({},function(err,removed) {
    //     console.log(removed);
    // })
    db.close();
  });


});

app.put('/posts/:id/upvote/:score',jsonParser,function(req, res) {
  var obj = { posts: [] };
  var upvoteId = req.params.id;
  var upvoteScore = req.params.score;
  // upvoteScore += 1;
  console.log("123: " + req.params.id)
  console.log("234: " + req.params.score);  
  MongoClient.connect(url, function (err, db) {
    var collection = db.collection('students');
    if (err) {
      console.log('Unable to connect to the MongoDB server. Error:', err);
    }

    var newObj = {
      "id": upvoteId,    
      "score": upvoteScore
    };

    var idValue = parseInt(newObj.id);
    var scoreValue = parseInt(newObj.score)+1;
  
    var myquery = { id: newObj.id };
    var newvalues = { $set: {score: newObj.score}};
    collection.updateMany({ id: idValue}, {$set:{score:scoreValue}}, function(err, res) {
      if (err) throw err;
      console.log("1111 score document updated");
    }
  );

    collection.find({}).toArray(function(err, docs) {
      // console.dir(docs);
      obj.posts = docs;
        res.send(obj);
    });
    
    db.close();
  });


});

app.put('/posts/:id/downvote/:score',jsonParser,function(req, res) {
  var obj = { posts: [] };
  var upvoteId = req.params.id;
  var upvoteScore = req.params.score;
  // upvoteScore += 1;
  console.log("123: " + req.params.id)
  console.log("234: " + req.params.score);  
  MongoClient.connect(url, function (err, db) {
    var collection = db.collection('students');
    if (err) {
      console.log('Unable to connect to the MongoDB server. Error:', err);
    }

    var newObj = {
      "id": upvoteId,    
      "score": upvoteScore
    };

    var idValue = parseInt(newObj.id);
    var scoreValue = parseInt(newObj.score)-1;
  
    var myquery = { id: newObj.id };
    var newvalues = { $set: {score: newObj.score}};
    collection.updateMany({ id: idValue}, {$set:{score:scoreValue}}, function(err, res) {
      if (err) throw err;
      console.log("1111 score document updated");
    }
  );

    collection.find({}).toArray(function(err, docs) {
      // console.dir(docs);
      obj.posts = docs;
        res.send(obj);
    });
    
    db.close();
  });


});

app.delete('/posts/:id',function(req,res) {
  var obj = { posts: [] };
  var deletedId = parseInt(req.params.id);
  console.log("deleted Id " + deletedId);
  MongoClient.connect(url, function(err, db) {
    var collection = db.collection('students');
    if (err) {
      console.log('Unable to connect to the MongoDB server. Error:', err);
    }    
    
    collection.remove({id:deletedId}, function(err,result) {
      console.log(result);
    });
  
    collection.find({}).toArray(function(err, docs) {
      // console.dir(docs);
      obj.posts = docs;
      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify(obj));
        // res.send(obj);
    });
    db.close();
    
  });

})

// app.put('/posts/:id/downvote/:score',jsonParser,function(req, res) {
//   var obj = { posts: [] };
  
//   MongoClient.connect(url, function (err, db) {
//     var collection = db.collection('students');
//     if (err) {
//       console.log('Unable to connect to the MongoDB server. Error:', err);
//     }

//     var postId = req.body.id;
//     var postUrl = req.body.href;
//     var postTitle = req.body.title;
//     var postScore = req.body.score;


//     var newObj = {
//       "id": postId,
//       "href": postUrl,
//       "title":postTitle,
//       "score": postScore


//     };
//     // collection.insertMany(getPost, function(err, res) {
//     //   if (err) throw err;
//     //   console.log("1 document inserted");
//     //   // db.close();
   
//     // });
//     // collection.insertOne(newObj,function(err,res) {
//     //     if(err) throw err;
//     //     console.log(newObj + " has inserted")
//     // });

//     // query = { id : postId };
//     // var currentScore = 0;
//     // db.collection("customers").find(query).toArray(function(err, result) {
//     //   if (err) throw err;
//     //   currentScore = result.score;
//     //   console.log(currentScore);
//     //   // db.close();
//     // });

//     var myquery = { id: postId };
//     var newvalues = { $set: {score: newObj.score}};
//     collection.updateOne(myquery, newvalues, function(err, res) {
//       if (err) throw err;
//       console.log("score document updated");
//       // db.close();
//     });

//     collection.find({}).toArray(function(err, docs) {
//       console.dir(docs);
//       obj.posts = docs;
//       res.send(JSON.stringify(obj));
//     });

//     // collection.remove({},function(err,removed) {
//     //     console.log(removed);
//     // })
//     db.close();
//   });


// });
