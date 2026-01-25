//this is syschroous code excicute step ny step and done work 

const fs = require("fs")

const context = fs.readFileSync('a.txt','utf-8'); //encoding data bytes and hex the data is called as utf-8
console.log(context);

const context1 = fs.readFileSync("b.txt", "utf-8");
console.log(context1)

console.log("done work");