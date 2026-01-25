
//Constructor : - constuctor method inside of the class that called when you create an instanced of the class
//method :- this defined inside of class can you use all instanced of the class 
//class :- the class are way to define blueprint  for creating object
//class is declare class keyword, and belong to the object created from this class   
class Reactange {
    constructor(height,width,color){
        this.width = width;
        this.height = height;
        this.color = color
    }

    area(){
        const area = this.width *this.height
        return area;
    
    }

    print(){
        console.log(`painting a color ${this.color}`)
    }
}

const react = new Reactange(99,3,"blue");
const area = react.area();
const print = react.print();
console.log(area)