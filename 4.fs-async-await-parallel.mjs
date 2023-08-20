import { readFile } from "node:fs/promises";

const filePath = "./archivo.txt";
const filePath2 = "./archivo2.txt";

const encoding = "utf8";
Promise.all([readFile(filePath, encoding), readFile(filePath2, encoding)])
  .then(([firstText, secondText]) => {
    console.log("Data1: " + firstText);
    console.log("Data2: " + secondText);
  })
  .catch((err) => {
    console.log("Error: " + err);
  });
