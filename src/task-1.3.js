/**
 * TASK 1
//  */
const stdin = process.openStdin();

stdin.addListener("data", data =>
  console.log(
    String(data)
      .split("")
      .reverse()
      .join("")
  )
);

/**
 * TASK 2
 */
import CSVToJSON from "csvtojson";
import { join } from "path";
const filPath = join(__dirname, "books.txt");
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";
const readStream = createReadStream("./books.csv");
const writeStream = createWriteStream(filPath);

const errorCB = err =>
  err
    ? console.error("Pipeline failed.", err)
    : console.log("Pipeline succeeded.");

pipeline(readStream, CSVToJSON(), writeStream, errorCB);
