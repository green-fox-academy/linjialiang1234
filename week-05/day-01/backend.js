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

app.get("/api/todos", function(req,res) {
  db.showData(function(data) {
    res.send(data);
  })
})

app.get("/api/todos/:id", function(req,res)  {
  let id = req.params.id;
  // console.log("123" + id);
  db.showSingleData(id,function(data) {
    res.send(data);
  });
});


app.listen(8090);