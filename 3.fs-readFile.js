const fs = require("node:fs");
const { promisify } = require("node:util");
//promisify is a function that takes a function following the common error-first callback style, i.e. taking a (err, value) => ... callback as the last argument, and returns a version that returns promises.

const filePath = "./archivo.txt";
const encoding = "utf8";

// This is a synchronous method so it will block the execution until the file is read.
const text = fs.readFileSync(filePath, encoding);

console.log("[Sync:Data]:\n" + text);

// This is an asynchronous method so it will not block the execution.
fs.readFile(filePath, encoding, (err, text) => {
  console.log("[Async:Data]:\n" + text);
});

// Promisify the readFile method

const readFile = promisify(fs.readFile);
readFile(filePath, encoding)
  .then((text) => console.log("[Promise:Data]:\n" + text))
  .catch((err) => console.log("Error: " + err));
