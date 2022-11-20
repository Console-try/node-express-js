// File System Module
const fs = require("fs")
const path = require("path")

console.log("Starting of the code")
// This Fileread function will run but js will not wait for it to complete infact next code will execute SideBySide
fs.readFile(path.resolve("Folder","file1.txt"),"utf8",(err,result)=>{
    if(err){
        console.log(err)
    }
    let file1Text = result
    fs.readFile(path.resolve("Folder","SubFolder","file2.txt"),"utf8",(err,result)=>{
        if(err){
            console.log(err)
        }
        let file2Text = result

        fs.writeFile(path.resolve("Folder","Async-file.txt"),`This FIle use async: ${file1Text}, ${file2Text}\n This File created by '8-fs-async.js'.`,(err)=>{
            if(err){
                console.log(err)
            }
        })
        console.log("File is creation is Done!")

    })
})
console.log("End of the Code")

