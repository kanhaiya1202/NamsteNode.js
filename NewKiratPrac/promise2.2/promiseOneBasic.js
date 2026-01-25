// // // function setTimeoutPromisified(ms){
// // //     return new Promise(reslove => setTimeout(reslove,ms))
// // // }
// // // function callback(){
// // //     console.log("hii there after print in 5 sec")
// // // }

// // const { set } = require("mongoose")

// // // let p = setTimeoutPromisified(5000).then(callback)
// // // console.log(p)

// // function wiatFor3s(reslove){
// //     setTimeout(reslove, 3000);
// // }

// // function main (){
// //     console.log("hii there ")
// // }

// // wiatFor3s(main)



// function setTionmPromisifird(m){
//     return new Promise(reslove => setTimeout(reslove, m))
// }
// function callback(){
//     console.log("hii there after 3 sec")
// }

// setTionmPromisifird(100000000).then(callback)

setTimeout(function(){
    console.log("hii")
    setTimeout(function(){
        console.log("hellow")
        setTimeout(function(){
            console.log("wait 5s")
        },5000)
    },3000)
},1000)