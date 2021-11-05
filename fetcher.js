const request = require('request');
const fs = require('fs');
const readline = require('readline');

const args = process.argv.slice(2);
const url = args[0];
const filetoSave = args[1];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

request(url, (error, _response, body) => {
  
  if (error) {
    console.log("Requesting URL does not exist!");
    req.close();
    } else {
          console.log(`Downloaded and saved ${fs.statSync(filetoSave).size} bytes to ${filetoSave}`);
          rl.close();
        }
      });