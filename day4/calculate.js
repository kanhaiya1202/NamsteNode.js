console.log("hii there and executes sum operation")

 function addtion(a,b){
    const sum = a+b
    console.log(sum)
}
 function subtraction(a , b){
    const sub = a - b;
    console.log(sub)
}
function multiplication(a, b){
    const mult = a*b
    console.log(mult)
}

// this is type of common js to exports and imports function 
module.exports = {
    addtion:addtion,
    subtraction: subtraction,
    multiplication: multiplication
};
