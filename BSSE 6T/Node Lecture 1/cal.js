const test = require("./main.js");

const fs= require("fs");
let JsonData;
let res = test.add(1, 2);
console.log("Result of add: ", res);
setTimeout(() => {console.log("Done");}, 2000);
console.log("End of script");
fs.readFile("data.json", "utf8", (err, data) => {
    if(err) {
        console.log("could not read the file: ", err.message);
        return;
    }
    console.log("File content:");
    console.log(data);
    JsonData = JSON.parse(data);
});
console.log("data read request sent");
console.log("Parsed data: ", JsonData);
setTimeout(() => {console.log("Parsed data: ", JsonData);}, 2000);
