const { set } = require("mongoose")

function setTimePromise(ms){
    return new Promise(reslove => setTimeout(reslove,ms))
}

function wait1sec(){
    console.log("hii")
}

function wait2sec(){
    console.log("hellow")
}

function wait4sec(){
    console.log("hii there")
}

setTimePromise(1000).then(wait1sec)
setTimePromise(2000).then(wait2sec)
setTimePromise(4000).then(wait4sec)

