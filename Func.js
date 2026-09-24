//Patterns of functions.
//Callback a function which excepts 
// an other function as an argument to help excute a a behavior
// function expression catSays
// function patterns are 7, function declaration, function expression,arrow function, callback function, anonymous function, named function expression, inline function. 

// var catSays = function(max) {
//   var catMessage = "";
//   for (var i = 0; i < max; i++) {
//     catMessage += "meow ";
//   }
//   return catMessage;
// };

// // function declaration helloCat accepting a callback
// function helloCat(callbackFunc) {
//   return "Hello " + callbackFunc(3);
// }

// // pass in catSays as a callback function
// console.log(helloCat(catSays));
// function declaration:
// Creates a reusable named function in a clear, traditional way.
// function greet(name){
//     return `Hello ${name}`
// }

// console.log(greet("Mo"));

// Function Expression: Lets you store a function as a value, so it can be passed/assigned.
// const greet = function(name){
//     return `Hello: ${name}`
// }
// console.log(greet("Mo"));
// Arrow Function: Provides shorter syntax for function expressions, especially callbacks.

// const greet = (name)=>{
//     return `Hello: ${name}`
// }
// console.log(greet("Mo"))
// Callback : Lets one function receive behavior from an other function.
// function processOrder(order, callback) {
//     console.log("Processing " + order);

//     callback(order);
// }

// function sendConfirmation(order) {
//     console.log("Confirmation sent for " + order);
// }

// processOrder("Laptop", sendConfirmation);
// // Anonymous function: Avoids naming a function when it doesn't need a reusable name.
// Named Function Expression: Gives a function expression an internal name, useful especially for debugging/recursion.
// const greet = function sayHello(name) { return `Hello ${name}`};
// console.log(greet("name"))
// Incline function: Defines a function exactly where it's needed, avoiding an unnecessary variable.
setTimeout(function(){
console.log("Hello")
}, 1000)