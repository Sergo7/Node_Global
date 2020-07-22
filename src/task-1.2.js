const CSVToJSON = require("csvtojson");
const fs = require("fs");
const path = require("path");
const filPath = path.join(__dirname, "books.txt");

CSVToJSON()
  .fromFile("./books.csv")
  .then(books => {
    fs.writeFile(filPath, JSON.stringify(books, null, 4), error => {
      if (error) {
        throw error;
      }
      console.log("JSON arr is saved");
    });
  })
  .catch(error => {
    console.log(error);
  });
