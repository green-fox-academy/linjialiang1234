'use strict';

var stuData = [
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

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/epam';

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

  
// // });

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("students").insertMany(stuData, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  
});

 });

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   db.collection("students").find({name:'Leo Lam'}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });



// 'use strict';

// var mongodb = require('mongodb');
// var MongoClient = mongodb.MongoClient;
// var stuData = [
//   {
//     "name": "Alexander Zhao",
//     "github": "ChiuMungZitAlexander",
//     "gender": "male"
//   },
//   {
//     "name": "Alfred Wei",
//     "github": "AlfredWei0420",
//     "gender": "male"
//   },
//   {
//     "name": "Alice Shen",
//     "github": "aliceshen227",
//     "gender": "female"
//   },
//   {
//     "name": "Chase Wang",
//     "github": "chasssssse",
//     "gender": "male"
//   },
//   {
//     "name": "Chris Huang",
//     "github": "ChrisH404",
//     "gender": "male"
//   },
//   {
//     "name": "Haochen Li",
//     "github": "haochenli",
//     "gender": "male"
//   },
//   {
//     "name": "Jerry Liu",
//     "github": "Jerry-ZWL",
//     "gender": "male"
//   },
//   {
//     "name": "Jessie Cai",
//     "github": "ttttsai",
//     "gender": "female"
//   },
//   {
//     "name": "John Doe",
//     "github": "janedoe",
//     "gender": "male"
//   },
//   {
//     "name": "Leo Lam",
//     "github": "linjialiang1234",
//     "gender": "male"
//   },
//   {
//     "name": "Vinson Liu",
//     "github": "sliu102",
//     "gender": "male"
//   },
//   {
//     "name": "Zhengnan Zhang",
//     "github": "ZhengnanZhang",
//     "gender": "male"
//   },
//   {
//     "name": "Zoe Zhou",
//     "github": "Zoe_Zhou",
//     "gender": "male"
//   }
// ];

// var url = 'mongodb://localhost:27017/epam';

// var insertDocuments = function(db, callback) {
//   // Get the documents collection 
//   var collection = db.collection('students');
//   // Insert some documents 
//   collection.insertMany(stuData, function(err, result) {
//     console.log("Inserted 3 documents into the document collection");
//     callback(result);
//   });
// };



// MongoClient.connect(url, function (err, db) {
//   if (err) {
//     console.log('Unable to connect to the MongoDB server. Error:', err);
//   }
//   console.log('Connection established to ' + url);
//   insertDocuments(db,function() {
//     printMyself(db,function() {
//       db.close();
//     })
//   });
//   });


// var findDocuments = function(db, callback) {
//   // Get the documents collection 
//   var collection = db.collection('students');
//   // Find some documents 
//   collection.find({}).toArray(function(err, docs) {
    
//     console.log("Found the following records");
//     console.dir(docs);
//     callback(docs);
//   });
// }

// var printMyself = function(db, callback) {
//   // Get the documents collection 
//   var collection = db.collection('students');
//   // Find some documents 
//   collection.find({name:'Leo Lam'}).toArray(function(err, docs) {
//     console.dir(docs);
//     callback(docs);
//   });
// }