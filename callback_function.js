// function which is passed as an argument to another function is called as callback function

// function which accepts another function as an argument is called as higher order function
function add(num1,num2) {
    return num1+num2; 
}
function mul(num1,num2) {
    return num1*num2;
}
function operation(mul,num1,num2) {
    return mul(num1,num2)
    
}
let product=operation(mul,5,20)
console.log(product);
