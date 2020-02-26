/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  //read file as string
  fs.readFile(filePath, (err, fileData) => {
    //if failed, pass err to cb
    if (err) {
      callback(err);
    } else {
    //split string at \n and pass it to the callback
      callback(null, fileData.toString().split('\n')[0]);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  //do a get request at that URL
  request.get(url, (err, response) => {
    if (err) {
      callback(err);
    } else { //pass the result to the callback
      callback(null, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
