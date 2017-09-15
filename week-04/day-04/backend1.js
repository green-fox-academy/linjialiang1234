
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
      
     });
  db.close();
});

app.get('/hello', function(req, res){
  res.send('hello world');
})
app.listen(8080);
//lists all the posts
app.get('/',function(req,res){
  var obj = { posts: [] };
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
      obj.posts = docs;
      res.send(obj);
    });
     db.close();
  })
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
  
    collection.insertOne(newObj,function(err,docs) {
        if(err) throw err;
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify(newObj));

        console.log(newObj + " has inserted")
    });

    db.close();
  });


});

app.put('/posts/:id',jsonParser,function(req,res){
  MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log('Unable to connect to the MongoDB server. Error:', err);
    }
    var collection = db.collection('students');
    var queryId = parseInt(req.params.id);
    var modifyTitle = req.body.title;
    var modifyHref = req.body.href;

    collection.update({ id: queryId }, { $set: { 'title': modifyTitle, 'href': modifyHref } }, function (err, result) {
      collection.find({}).toArray(function (err, docs) {
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify(docs));
        db.close();
      })
    });
  })


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
