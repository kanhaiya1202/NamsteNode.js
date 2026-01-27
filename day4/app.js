const {subtraction,addtion,multiplication} =  require('./calculate.js');
//{subtraction,addtion,multiplication} => this is know as destructure 

var a = 10 ;
var b = 20;
console.log(`subtraction a:- ${a} and b:-${b}`) 
subtraction(a,b)
console.log(`Multiplication a:- ${a} and b:-  ${b}`)
multiplication(a,b)
console.log(`Additon a:- ${a} and b:- ${b}`)
addtion(a,b)