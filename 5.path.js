const path = require('node:path')

// bar separator
console.log(path.sep)

// join method
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

// base name
const base = path.basename(filePath)
console.log(base)

// quiting extension
const baase = path.basename(filePath, '.txt')
console.log(baase)

// extention name
const ext = path.extname(filePath)
console.log(ext)
