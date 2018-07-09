var https = require("https");

module.exports = function getHTML(options, callback) {

  /* Add your code here */

  https.get(options, function(response) {
    response.setEncoding("utf8");

    var body = "";

    response.on("data", function(chunk) {
      console.log("Chunk Received. Length:", chunk.length);
      body += chunk;
    });

    response.on("end", function() {
      callback(body);
      console.log("Response stream complete.");
    });
  });

};

// function printHTML (html) {
//   console.log(html);
// }

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};