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

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log("Database created!");
  var collection = db.collection('students');
 
  collection.find({}).toArray(function (err, docs) {
    console.dir(docs);

  });
  db.close();
});

app.get('/hello', function (req, res) {
  res.send('hello world');
})
app.listen(8080);

//lists all the posts


app.get('/', function (req, res) {
  res.sendFile(__dirname + "/public/reddit.html");
})




app.get('/posts', function (req, res) {
  var obj = {
    posts: []
  };

  MongoClient.connect(url, function (err, db) {
    var collection = db.collection('students');
    if (err) {
      console.log('Unable to connect to the MongoDB server. Error:', err);
    }
    collection.find({}).toArray(function (err, docs) {
      obj.posts = docs;
      res.send(obj);
    });
    db.close();
  })
});


app.post('/posts', jsonParser, function (req, res) {
  var obj = {
    posts: []
  };
  MongoClient.connect(url, function (err, db) {
    var collection = db.collection('students');
    if (err) {
      console.log('Unable to connect to the MongoDB server. Error:', err);
    }

    collection.findOne({}, {sort: {id: -1}}, function (err, result) {
      console.log(result.id);
      var updateId = parseInt(result.id) + 1;
      console.log("newObjid:" + updateId);

      var newObj = {
        'title': req.body.title,
        'href': req.body.href,
        'id': updateId,
        'timestamp': new Date().getTime(),
        'score': 0,
        "owner": "anonymous"
      }

      collection.insertOne(newObj, function (err, docs) {
        if (err) throw err;
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify(docs));
        console.log(docs + " has inserted")
        db.close();
      });
    });



  });


});

app.post('/login', jsonParser, function (req, res) {
  var obj = {
    posts: []
  };
  // var updateId = 0;
  MongoClient.connect(url, function (err, db) {
    var collection = db.collection('students');
    if (err) {
      console.log('Unable to connect to the MongoDB server. Error:', err);
    }

    var loginOwner = req.body.owner;

    console.log("reqbody,owb " + loginOwner);

    // collection.insertOne(newObj,function(err,docs) {

      // collection.find({}).toArray(function (err, docs) {
      //   obj.posts = docs;
      //   res.send(obj);
      // });


    collection.find({
      owner: loginOwner
    }).toArray(function (err, result) {

      res.setHeader("Content-Type", "application/json");
     
      // console.log("00000000 " + result[0]);
      console.log("111" + result[0].owner);
   
      console.dir(result);

      res.send(JSON.stringify(result));

      db.close();
    });


  })

})

app.put('/posts/:id', jsonParser, function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log('Unable to connect to the MongoDB server. Error:', err);
    }
    var collection = db.collection('students');
    var queryId = parseInt(req.params.id);
    var modifyTitle = req.body.title;
    var modifyHref = req.body.href;

    collection.update({
      id: queryId
    }, {
      $set: {
        'title': modifyTitle,
        'href': modifyHref
      }
    }, function (err, result) {
      collection.find({}).toArray(function (err, docs) {
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify(docs));
        db.close();
      })
    });
  })


});

app.put('/posts/:id/upvote/:score', jsonParser, function (req, res) {
  var obj = {
    posts: []
  };
  var upvoteId = req.params.id;
  var upvoteScore = req.params.score;
 
  MongoClient.connect(url, function (err, db) {
    var collection = db.collection('students');
    if (err) {
      console.log('Unable to connect to the MongoDB server. Error:', err);
    }

    var newObj = {
      "id": upvoteId,
      "score": upvoteScore,
      "vote": 1
    };

    var idValue = parseInt(newObj.id);
    var scoreValue = parseInt(newObj.score) + 1;

    var myquery = {
      id: newObj.id
    };
    var newvalues = {
      $set: {
        score: newObj.score
      }
    };
    collection.updateMany({id: idValue}, {$set: {'score': scoreValue,'vote': 1}}, function (err, res) {
      if (err) throw err;
      console.log("1111 score document updated");
    });

    collection.find({}).toArray(function (err, docs) {
      // console.dir(docs);
      obj.posts = docs;
      res.send(obj);
    });

    db.close();
  });
});

app.put('/posts/:id/downvote/:score', jsonParser, function (req, res) {
  var obj = {
    posts: []
  };
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
      "score": upvoteScore,
      "vote": -1
    };

    var idValue = parseInt(newObj.id);
    var scoreValue = parseInt(newObj.score) - 1;

    var myquery = {
      id: newObj.id
    };
    var newvalues = {
      $set: {
        score: newObj.score
      }
    };
    collection.updateMany({
      id: idValue
    }, {
      $set: {
        'score': scoreValue,
        'vote': -1
      }
    }, function (err, res) {
      if (err) throw err;
      console.log("1111 score document updated");
    });

    collection.find({}).toArray(function (err, docs) {
      // console.dir(docs);
      obj.posts = docs;
      res.send(obj);
    });

    db.close();
  });


});

app.delete('/posts/:id', function (req, res) {
  var obj = {
    posts: []
  };
  var deletedId = parseInt(req.params.id);
  console.log("deleted Id " + deletedId);
  MongoClient.connect(url, function (err, db) {
    var collection = db.collection('students');
    if (err) {
      console.log('Unable to connect to the MongoDB server. Error:', err);
    }

    collection.remove({id: deletedId}, function (err, result) {
      console.log(result);
    });

    collection.find({}).toArray(function (err, docs) {
      // console.dir(docs);
      obj.posts = docs;
      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify(obj));
      // res.send(obj);
    });
    db.close();

  });

})