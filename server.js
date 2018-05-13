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
  
  
// request.headers.user-agent
// request.headers.accept-language
// request.ip;
  const ip= request.headers['x-forwarded-for'].split(',')[0];
  // user-agent not valid.
  const browser= request.headers['user-agent'].split(';')[0].replace(/[(]/g, ' ');
  const language= request.headers['accept-language'].split(',')[0];
  const data= {
    "ip address": ip,
    "language": language,
    "software": browser
  }
  console.log(browser);
  response.end(JSON.stringify(data));
  

});




// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
