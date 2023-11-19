// Create web server
// Create a web server that can respond to requests for /comments.json
// with a JSON representation of the comments list.
// We can use the http module directly to create a server and start listening
// for requests.
// It's a good idea to use the asynchronous version of fs.readFile instead of
// the synchronous version to avoid blocking while the file is being read.

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  console.log('Request received');
  fs.readFile('./comments.json', function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.end(data);
  });
});

server.listen(8080, function() {
  console.log('Server listening on port 8080');
});