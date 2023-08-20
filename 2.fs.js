const fs = require("node:fs"); // since node 16 we can use node:fs instead of require("fs")

const stats = fs.statSync("./archivo.txt");

console.log(
  stats.isFile(),
  stats.isDirectory(),
  stats.isSymbolicLink(),
  stats.size,
  stats.atime,
  stats.mtime,
  stats.ctime
);
