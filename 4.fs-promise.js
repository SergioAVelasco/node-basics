const fs = require("node:fs/promises");

const filePath = "./archivo.txt";
const encoding = "utf8";

// This is an asynchronous method so it will not block the execution.
fs.readFile(filePath, encoding)
  .then((text) => {
    console.log("Data: " + text);
    return data;
  })
  .catch((err) => {
    console.log("Error: " + err);
  });
