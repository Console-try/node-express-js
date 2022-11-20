const path = require("path")

sep = path.sep // It will return path septrator like (/,\)

console.log(sep)

filePath = path.join("Folder","SubFolder","file2.txt")
console.log(filePath)

let lastName = path.basename(filePath)
console.log(lastName) // It return "file2.txt"

let absolutePath = path.resolve("Folder","file1.txt")
console.log(absolutePath)


