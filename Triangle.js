/*
 * Programming Quiz: Build A Triangle (5-3)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `buildTriangle()` function
 * - Your `buildTriangle()` function should take one argument (or you can say parameter)
 * - Your `laugh()` function should build the triangle as describe above
 */


// creates a line of * for a given length
// function makeLine(length) {
//     var line = "";
//     for (var j = 1; j <= length; j++) {
//         line += "* ";
//     }
//     return line + "\n";
// }
// function buildTriangle(length){
//     var triangle = "";
//     var lineNumber = 1
//     for(lineNumber = 1; lineNumber<= length; lineNumber++){
//         triangle = triangle + makeLine(lineNumber)
//     }
//     return triangle;
// }


// // test your code by uncommenting the following line
// console.log(buildTriangle(55));
// Number Pyramid.
// function makeLine(length){
//     var line = ""
//     for(let l = 1; l<=length; l++){
//         line += l;
//     }

//     return line + "\n"
// }

// function buildPyramid(length){
//     var pyramid = "";
//     for(let line = 1; line <= length; line++){
//         pyramid = pyramid + makeLine(line);
//     }
//     return pyramid;
// }
//  console.log(buildPyramid(7))
//
// var catsays = function(max){
//     var catMessage = "";
//     for(var i =0; i<=max; i++){
//         catMessage += " meow ";
//     }
//     return catMessage;
// }

// console.log(catsays(5));
// Laugh.
// var laugh = function(length){
//     var laugh = "";
//     for(let i =0; i<=length; i++){
//         laugh += "ha";
//     }
//     laugh += "!";
//     return laugh;
// }

// console.log(laugh(10));
// Inline Function.
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
emotions("happy", function(num){
    let lough = ""
    for(let i=0; i<num; i++){
        lough += "ha";
    }
    lough += "!"
    return lough;
})

