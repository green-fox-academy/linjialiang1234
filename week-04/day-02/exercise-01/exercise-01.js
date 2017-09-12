var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use('/assets', express.static('assets'));
var jsonParser = bodyParser.json()

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');;
});

app.get('/doubling', function (req, res) {
  if (req.query.input === undefined) {
    var data = {
      "error": "Please provide an input!"
    }
    res.send(data);
  } else {
    var data = {
      "received": parseInt(req.query.input),
      "result": req.query.input * 2
    }
    res.send(data);
  }
})

app.get('/greeter', function (req, res) {
  if (req.query.name === undefined) {
    var data = {
      "error": "Please provide a name!"
    }
    res.send(data);
  }
  if (req.query.title === undefined) {
    var data = {
      "error": "Please provide a title!"
    }
    res.send(data);
  } else {
    var data = {
      "welcome_message": "Oh, hi there " + req.query.name + ", my dear " + req.query.title + "!"
    }
    res.send(data);
  }
});

app.get('/appenda/:appendable', function (req, res) {
  if (req.params.appendable === undefined) {
    res.status(404)
      .send('Not found');
  } else {
    var data = {
      "appended": req.params.appendable + "a"
    }
    res.send(data);
  }
});

app.post('/dountil/:what', jsonParser, function (req, res) {
  if (req.params.what === "sum") {
    var result = 0;
    for (var i = 1; i <= req.body.until; i++) {
      result = result + i;
    }
    res.send({
      "result": result
    });
  }

  if (req.params.what === "factor") {
    var result = 1;
    for (var i = 1; i <= req.body.until; i++) {
      result = result * i;
    }
    res.send({
      "result": result
    });
  }
});

app.post('/arrays', jsonParser, function (req, res) {
  if (req.body.what === "sum") {
    var arr = req.body.numbers;
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
      result = result + arr[i];
    }
    res.send({
      "result": result
    })
  }
  if (req.body.what === "multiply") {
    var arr = req.body.numbers;
    var result = 1;
    for (var i = 0; i < arr.length; i++) {
      result = result * arr[i];
    }
    res.send({
      "result": result
    })
  }
  if (req.body.what === "double") {
    var arr = req.body.numbers;

    var result = arr.map(function (ele) {
      return ele * 2
    })
    res.send({
      "result": result
    })
  }
});

app.post('/sith', jsonParser, function (req, res) {
  var text = req.body.text;
  var arr = text.split(".");

  console.log("33 +" + arr.length);
  var result = [];
  console.log("arr:" + arr);
  for (var i = 0; i < arr.length; i++) {
    var anotherArr = arr[i].split(" ");
    console.log(" 111 " + arr[i]);
    // for(var j = 0; j < anotherArr.length; i=i+2) {

    //    var temporyNumber = anotherArr[i];
    //     anotherArr[i] = anotherArr[i+1];
    //    anotherArr[i+1] = temporyNumber;
    //    }
    //    result.push(anotherArr.join(" ")); 
  }
  // console.log("222::::" + result);
  // res.send({
  //   "sith_text" : result
  // })
});

app.listen(3000);