const fs = require('fs');

function readTheFile(reslove){
    fs.readFile('a.txt', 'utf8' , function(err, data){
        reslove(data)
    })
} // reslove is sentTheFilValue Here

function readFile(filename){
    return new Promise(readTheFile)
}
const p = readFile()
function callback(context){
    console.log(context)
}
p.then(callback)
