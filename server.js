// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
  console.log(request);
  
// request.headers.user-agent
// request.headers.accept-language
// request.ip;
  let ip= request.ip;
  // user-agent not valid.
  let browser= request.headers.useragent;
  let language= request.headers.acceptlanguage;
  let data= {
    "ip address": ip;
    
  }
  

});




// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
