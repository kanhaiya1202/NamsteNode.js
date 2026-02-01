const fs = require('fs');

console.log("hii there")// 1

function timeout (){
    console.log("callback is done !")// call back fuction also waiting for complete tack for loop function
}

console.log("Welcome to call back fuction ")// 2

setTimeout(timeout, 1000);// asunchrouse function eait ofr cup tack complete in for loop then 

function read(err,data){
    console.log(data);
}

fs.readFile("a.txt","utf8", read)

let c = 0

for (let i = 0;  i< 1000000; i++){
    c= c+1;
    if(c== 100000){
        console.log("c done");
    }
}

console.log("Exsicuted task is done!")
