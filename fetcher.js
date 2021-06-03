const request = require('request');
const fs = require("fs");

const path = process.argv[3];
const domain = process.argv[2];

request(`${domain}`, (error, response, body) => {
  if (error) { // check for error first
    console.error('error:', error);
  }

  fs.writeFile(`${path}`, body, error => {
    if (error) {
      console.error('error:', error); // check if error, if no error then file prints successfully
    }
    else {
      console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${path}`); //file written successfully
    }
  });
});