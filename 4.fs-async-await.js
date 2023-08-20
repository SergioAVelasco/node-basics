const { readFile } = require("node:fs/promises");

const filePath = "./archivo.txt";
const filePath2 = "./archivo2.txt";
const encoding = "utf8";
//IIFE (Immediately Invoked Function Expression)

(async () => {
  const data = await readFile(filePath, encoding);
  console.log("Data: " + data);

  const data2 = await readFile(filePath2, encoding);
  console.log("Data: " + data2);
})();
