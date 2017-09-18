'use strict';

var express = require("express");
var bodyParser = require('body-parser');
var db = require('./database');

var app = express();
var jsonParser = bodyParser.json();

app.use("/", express.static("public"));

app.get("/hello", function(req,res) {
  db.createDB();
  res.send("hello world");
});

app.get("/", function(req,res) {
  res.sendFile(__dirname + "/public/reddit.html");
});

app.get("/posts", function(req,res) {
  db.showData(function(data) {
    res.send(data);
  })
})

app.post("/posts", jsonParser, function(req,res) {
  var body = {
    "title" : req.body.title,
    "href" : req.body.href
  };
  console.log("123");
  db.createPost(body,"leo", function(data) {
    res.send(data);
  });
});

app.put("/posts/:id/upvote", function(req,res){
  let id = req.params.id;
  db.upVote(id,function(data) {
    res.send(data);
  });
});
app.listen(8080);