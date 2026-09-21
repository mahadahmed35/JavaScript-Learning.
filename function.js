// function declaration are ok with hoisting you can access them down to up.
// console.log( adder(2,3))
// function adder(a,b){
//     return a + b;
// }
// Sound.
var sound = "" ; 
function laugh(num) {
    for (var x = 0 ; x < num ; x++) {
        sound = sound + "ha" ;  
    }
    sound = sound +"!"; 
    return sound; 
}

console.log(laugh(3)) ;