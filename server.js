
var express = require('express');
var app = express();
var bodyparser = require("body-parser");

app.get('/:date', function (req, res) {
    var obj;
    if(isNumber(req.params.date)){
      obj = new Date(parseInt(req.params.date)*1000);
    }
    else
    {
      obj = new Date(req.params.date);
    }
    var json;
    if(obj.getDate())
    {
      json = {unix:obj.getTime()/1000,natural:obj.toDateString()};
    }
    else
      json = {unix:null,natural:null};
      
    res.end(JSON.stringify(json));
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}