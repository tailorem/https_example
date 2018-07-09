var getHTML = require("../step5");

var requestOptions = {
  host: "sytantris.github.io",
  path: "/http-examples/step6/1337.html"
};

function print1337(html) {

  var leet = "";

  for (i = 0; i < html.length; i++){
    switch (html[i]){
      case "a":
        leet += "4";
        break;
      // check for e, if er, change to 0r
      // else, change to 3
      case "e":
        leet += "3";
        break;
      case "o":
        leet += "0";
        break;
      case "l":
        leet += "1";
        break;
      // check for c, if ck, change to x
      case "ck":
        leet += "x";
        break;
      case "er":
        leet += "0r";
        break;
      // check for y, if followed by ou, change to j00
      case "you":
        leet += "j00";
        break;
      default:
        leet += html[i];
    }
  }

  console.log(leet);

}

getHTML(requestOptions, print1337);