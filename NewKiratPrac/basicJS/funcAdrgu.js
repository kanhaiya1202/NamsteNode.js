function sum (a,b){
    return a+ b;
}

function subtract (a,b){
    return a- b;
}

function multiplie (a,b){
    return a* b;
}

function division (a,b){
    return a/ b;
}
function dooperration (a,b, ob){
    return ob(a,b)
}

console.log(dooperration(5,4,sum))