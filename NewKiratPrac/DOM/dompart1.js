/**
    five DOCUMENT OBJECT 
    1.queryselect
    2.queryselectall
    3.getElementById
    4.getElementByClassName
    5.getElemenysByClassName

 */
const h4tage1 = document.querySelector("h4")

let crt = 0;
function callback(){
    h4tage1.innerHTML = crt
    crt = crt +1;
}
