/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var request = require('request');
var readFile = Promise.promisify(fs.readFile);
var requestGet = Promise.promisify(request.get);
var writeFile = Promise.promisify(fs.writeFile);


var fetchProfileAndWriteToFile = (readFilePath, writeFilePath) => {
  // TODO
  var fetched = readFile(readFilePath)
    .then((result) => {
      var options = { //reads first line of file and appends to URL
        url: 'https://api.github.com/users/' + result.toString().split('\n')[0],
        headers: { 'User-Agent': 'request' },
        json: true
      };
      return requestGet(options);
    })
    .then((result) => {
      return writeFile(writeFilePath, result, 'utf8');
    });
  return fetched;
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
