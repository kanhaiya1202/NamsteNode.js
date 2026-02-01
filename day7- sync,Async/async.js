const fs = require('fs');
const https = require('https');

var a = 123123;
var b = 132132

console.log("start the code ")

https.get("https://dummyjson.com/product/1", (res) =>{
    console.log("fetched data")

})

fs.readFile("file.txt", "utf8" , function(err ,data){
    console.log(data)
})

setTimeout(()=>{
    console.log("waiting 5 sec")
},5000)

function multipliocation(x,y){
    const result = x*y
    return result
}

var c = multipliocation(a,b)
console.log("multiplication now :-" ,c)