const crypto = require('crypto');
const { futimesSync } = require('fs');
 
console.log("blocking task")
//pbkdf => password base key derivative function => password,salt,iteration ,keylen, digest
//blocking main Thread Thread

crypto.pbkdf2Sync("password","salt",50000,64,"sha512") 
console.log("first key is generated")

setTimeout(()=>{
    console.log("after run zero sec")
},3000)

crypto.pbkdf2("password","salt",500000,54,"sha512", (err, key ) =>{
    console.log("key is generated")
})

var a = 1223213;
var b = 1243123

function add(x,y){
    const result = x+y
    return result
}

const c = add(a,b)
console.log(c)


// output
// 1.blocking task
// 2.first key is generated
// 3.2466336
// 4.key is generated
