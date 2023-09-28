// 02. Write a function called "multiplyNumbers" that takes two numbers as arguments and returns their
// product. Use function expressions to define the function and call the function before it is declared to
// demonstrate hoisting.

console.log(multiply(2,3));

const multiply = function(a,b){
    return a * b; 
}