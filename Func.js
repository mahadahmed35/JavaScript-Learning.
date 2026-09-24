//Patterns of functions.
//Callback a function which excepts 
// an other function as an argument to help excute a a behavior
// function expression catSays
// function patterns are 7, function declaration, function expression,arrow function, callback function, anonymous function, named function expression, inline function. 
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
console.log(helloCat(catSays));