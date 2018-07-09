var getHTML = require("../step5");

var requestOptions = {
  host: "sytantris.github.io",
  path: "/http-examples/step6/reverse.html"
};

function printLowerCase(html) {

  console.log(html.split("").reverse().join(""));

}

getHTML(requestOptions, printLowerCase);