/**
 * TASK 1
 */
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
import {
    writeFile
} from "fs";
import {
    join
} from "path";
const filPath = join(__dirname, "books.txt");

CSVToJSON()
    .fromFile("./books.csv")
    .then(books => {
        writeFile(filPath, JSON.stringify(books, null, 4), error => {
            if (error) {
                throw error;
            }
            console.log("JSON arr is saved");
        });
    })
    .catch(error => {
        console.log(error);
    });