const fs = require("node:fs/promises");
const path = require("node:path");
const pc = require("picocolors");

const folderName = process.argv[2] ?? ".";

async function ls(directory) {
  try {
    files = await fs.readdir(directory);
  } catch (err) {
    console.log(pc.red("Unable to read the directory"));
    process.exit(1);
  }

  const filesPromises = files.map(async (file) => {
    const filePath = path.join(folderName, file);
    let fileStats;
    try {
      fileStats = await fs.stat(filePath);
    } catch (err) {
      console.log("Unable to read the file");
    }
    const isDirectory = fileStats.isDirectory();
    const fileType = isDirectory ? "dir" : "file";
    const fileSize = fileStats.size;
    const fileModifiedTime = fileStats.mtime.toLocaleString();

    return `${pc.blue(fileType)}\t${fileSize}\t${fileModifiedTime}\t${file}`;
  });

  const filesInfo = await Promise.all(filesPromises);
  console.log(filesInfo.join("\n"));
}

ls(folderName);
