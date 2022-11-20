// File System module

const {writeFileSync,readFileSync} = require("fs")
const path = require('path')

let file1Text = readFileSync(path.join("Folder","file1.txt"),'utf8')
let file2Text = readFileSync(path.resolve("Folder","SubFolder","file2.txt"),'utf8')
console.log(file1Text)
console.log(file2Text)

// It will first write then go to next line
writeFileSync(path.resolve("Folder","sync-file.txt"),"This File is created in 7-fs-sync.js")

// In Sync Functions the program will wait for the called fucntion to complete then execute next line off code




