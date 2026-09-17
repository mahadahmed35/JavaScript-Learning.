// for(let i=0; i<=40; i++){
//     console.log("");
// }

// let customer = true;
// function checkCustomer(){
//     customer? "Hi": "By";
// }

// for(let i=0; i<=4; i++){
// checkCustomer(customer)
// }

// console.log(checkCustomer())

// let x = 1
// while(x<=1000){
//     console.log(x +" mississippi!");
//     x = x+1
// }
// console.log(x)
// let customer = true;
// function checkCustomer(customer){
//     return customer? "Hi": "By";
// }

// for(let i=0; i<=4; i++){
// console.log(checkCustomer(customer))
// }

// var x = 11;

// while (x<20) {
//     // print Julia, James, or JuliaJames
//     if(x%3===0){
//         console.log("Julia")
//     }else if(x%5==0){
//         console.log("James");
//     }else if(x%3==0 && x%5==0){
//         console.log("JuliaJames");
//     }else{
//         console.log("Number")
//     }
//     // increment x
//     x = x + 1
// }
// console.log(x)
// 99 Bottles of Juice.
// var num = 40;

// while(num >= 10){
//     if(num === 1){
//         console.log(num +" bottle of juice on the wall! "+ num +" bottle of juice! Take one down, pass it around... "+ (num-1) +" of juice on the wall!")
//     }else if(num >1 ){
//                 console.log(num +" bottles of juice on the wall! "+ num +" bottles of juice! Take one down, pass it around... "+ (num-1) +" of juice on the wall!")

//     }
//     num = num + 1;
// }
// while (num >=1) {
//     // check value of num
//     if(num === 1){
//         console.log(num +" bottle of juice on the wall!"+ num+" bottle of juice! Take one down, pass it around... "+ (num-1) +" bottles of juice on the wall!")
//     }else if(num ===2 ){
//                 console.log(num+ " bottles of juice on the wall! "+ num +" bottles of juice! Take one down, pass it around... "+ (num-1) +" of juice on the wall!")

//     }else{
//         console.log(num + " bottles of juice on the wall! "
//                     + num + " bottles of juice! Take one down, pass it around... "
//                     + (num-1) + " bottles of juice on the wall!");
//     }
//     num = num -1;
//     // print lyrics using num
//     // don't forget to check pluralization on the last line!
//     // decrement num
// }

// Quiz Countdown, Liftoff.
// var sec = 60
// while(sec >=0){
//     if(sec === 50){
//         console.log("Orbiter transfers from ground to internal power")
//     }else if(sec === 31){
//                 console.log("Ground launch sequencer is go for auto sequence start")

//     }else if(sec === 16){
//                 console.log("Activate launch pad sound suppression system")

//     }else if(sec === 10){
//         console.log("Activate main engine hydrogen burnoff system")
//     }else if(sec === 6){
//         console.log("Main engine start")
//     }else if(sec === 0){
//         console.log("Solid rocket booster ignition and liftoff!")
//     }else{
//         console.log("T-"+ sec +" seconds" )
//     }
//     sec = sec -1;
// }
//
// for (let i=0; i<6; i++){
//     console.log("Persue your education" + i)
// }
// Nested for loop;
for(let x = 0; x <3; x++){
    for(let y =0; y<2; y++){
        console.log(x+","+y)
    }
}