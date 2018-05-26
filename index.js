//  make a server by visiting localhost:3000 and run "node index.js"

var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
    // res.json({hello: 'world'});
});

var server = app.listen(3000, function () {
  console.log('Server running at http://127.0.0.1:3000/');
});

// need express and NPM
// npm install --save express (downloaded 50 packages and added node_module)
// this code created a locfile and suggested to commit
//  file path node/node_module/express
// to r
