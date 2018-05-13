// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
// app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  // response.sendFile(__dirname + '/views/index.html');
  console.log(request);
  
// request.headers.user-agent
// request.headers.accept-language
// request.ip;
  const ip= request.headers['x-forwarded-for'];
  // user-agent not valid.
  const browser= request.headers['user-agent'];
  const language= request.headers['accept-language'];
  const data= {
    "ip address": ip,
    "language": language,
    "software": browser
  }
  
  response.end(JSON.stringify(data));
  

});




// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
