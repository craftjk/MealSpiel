/* You should implement your request handler function in this file.
 * And hey! This is already getting passed to http.createServer()
 * in basic-server.js. But it won't work as is.
 * You'll have to figure out a way to export this function from
 * this file and include it in basic-server.js so that it actually works.
 * *Hint* Check out the node module documentation at http://nodejs.org/api/modules.html. */

module.exports.handler = function(request, response) {
  console.log("Serving request type " + request.method + " for url " + request.url);

  var headers = defaultCorsHeaders;

  if (request.method === "GET") {
    var statusCode = 200;
    console.log("Handling GET request...");
    headers['Content-Type'] = "application/json";
    response.writeHead(statusCode, headers);
    response.end(JSON.stringify(responseMsg));
  } else {
    var statusCode = 404;
    headers['Content-Type'] = "text/plain";
    response.writeHead(statusCode, headers);
    response.end("404 - we have a team of trained monkeys working on the issue.");
  }

};

var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

var results = [];
var responseMsg = {};
responseMsg.results = results;