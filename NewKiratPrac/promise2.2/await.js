const { set } = require("mongoose")

function settimepromisetied(ms){
    return new Promise(reslove => setTimeout(reslove, ms))
}

async function slove(){
    await settimepromisetied(1000)
    console.log("hiii")
    await settimepromisetied(3000)
    console.log("hellow")
    await settimepromisetied(5000)
    console.log("hii there")
}

slove()

