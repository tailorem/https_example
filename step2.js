var https = require("https");

function getAndPrintHTML() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */

  https.get(requestOptions, function(response) {
    response.setEncoding("utf8");

    var body = "";

    response.on("data", function(chunk) {
      console.log("Chunk Received. Length:", chunk.length);
      body += chunk;
    });

    response.on("end", function() {
      console.log(body);
      console.log("Response stream complete.");
    });
  });

}

getAndPrintHTML();