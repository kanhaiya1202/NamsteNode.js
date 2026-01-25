 let user = {
    name :"kanhaiya",
    age: 21
}
console.log(user.name)
class Calculate{
    constructor(number1, number2){
        this.number1 = number1;
        this.number2 = number2;
    }

    addition(){
        const add = this.number1+this.number2;
        console.log(`first number is:- ${this.number1} ,second number is :- ${this.number2}`)
        return add;
   
    }       
        substract(){ 
        const sub = this.number1-this.number2;
        return sub;
   
    }
        multiple(){
        const multi = this.number1*this.number2;
        return multi;
   
    }
        division(){
        const div = this.number1/this.number2;
        return div;
   
    }
}

const cal = new Calculate(3,4)
const addition = cal.addition();
const substract = cal.substract();
const multiple = cal.multiple();
const division = cal.division()

console.log("addition ;-",addition)
console.log("substract:-",substract)
console.log(multiple)
console.log(division)

const now = new Date();
console.log(now.toISOString());
