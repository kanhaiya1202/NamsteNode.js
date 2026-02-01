//this is asyschronuos code ;
//done task then print now

const fs = require('fs');

function read (err, data){
    console.log(data);
}

fs.readFile("a.txt", "utf8",read);
fs.readFile('b.txt', 'utf-8', read);
console.log("done");

setTimeout(()=>{
    console.log("hii fukuu")
},3000);

