const CSVToJSON = require("csvtojson");
const path = require("path");
const filPath = path.join(__dirname, "books.txt");
const fs = require("fs");
const {
  pipeline
} = require("stream");
const readStream = fs.createReadStream("./books.csv");
const writeStream = fs.createWriteStream(filPath);


const errorCB = err => err ? console.error('Pipeline failed.', err) : console.log('Pipeline succeeded.');

pipeline(
  readStream,
  CSVToJSON(),
  writeStream,
  errorCB
);