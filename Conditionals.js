// // // var colt ="not busy";
// // // var  weather = "nice";

// // // if(colt === "not busy" && weather === "nice"){
// // //     console.log("Friend you are budy let us go to the park")
// // // }else{
// // //     console.log("We will go other time")
// // // }
// // // var balance = 325.00;
// // // var checkBalance = true;
// // // var isActive = true;

// // // // your code goes here
// // // if(checkBalance === "No"){
// // //     console.log("Thank you. Have a nice day!")
// // // }else if(isActive === "true" && balance > 0){
// // //     console.log("Your balance is $"+ balance +".")
// // // }else if (isActive === "false"){
// // //     console.log("Your account is no longer active.")
// // // }else if (balance === 0){
// // //     console.log("Your account is empty.")
// // // }else{
// // //     console.log("Your account is negative please contact bank.")
// // // }
// // // var balance = -325.00;
// // // var checkBalance = true;
// // // var isActive = true;

// // // // your code goes here
// // // if(checkBalance === true){
// // //     if(isActive === true && balance >0){
// // //     console.log("Your balance is $"+ balance.toFixed(2) +".")
// // // }else if (isActive === true && balance === 0){
// // //     console.log("Your account is empty.")
// // // }else if (isActive === true && balance < 0){
// // //     console.log("Your account is negative please contact bank")
// // // }else if(isActive === false){
// // //     console.log("Your account is no longer active")
// // //         }
// // //     }
// // //     else {
// // //     console.log("Thank you have a nice day!")
// // // } 
// // //Ice-cream quiz.
// // // var flavor = "vanilla";
// // // var vessel = "cone";
// // // var toppings = "peanuts";

// // // // Add your code here
// // // if( (flavor === "vanilla" || flavor === "chocolate") && (vessel === "cone" || vessel === "bowl") && (toppings === "sprinkles" || toppings ==="peanuts")){
// // //     console.log("I'd like two scoops of "+ flavor +" ice cream in a "+ vessel +" with "+ toppings +".")
// // // }

// // // T-shirt quiz.
// // var shirtWidth = 18;
// // var shirtLength = 28;
// // var shirtSleeve = 8.133;
// // var size = "NA"

// // /*
// //  * To gain confidence, check your code for the following combination of [shirtWidth, shirtLength, shirtSleeve, expectedSize]:
// //  * [18, 28, 8.13, 'S']
// //  * [19.99, 28.99, 8.379, 'S']
// //  * [20, 29, 8.38, 'M']
// //  * [22, 30, 8.63, 'L']
// //  * [24, 31, 8.88, 'XL']
// //  * [26, 33, 9.63, '2XL']
// //  * [27.99, 33.99, 10.129, '2XL']
// //  * [28, 34, 10.13, '3XL']
// //  * [18, 29, 8.47, 'NA']
// // */
// // // Size	Width	Length	Sleeve
// // // S	18"	28"	8.13"
// // // M	20"	29"	8.38"
// // // L	22"	30"	8.63"
// // // XL	24"	31"	8.88"
// // // 2XL	26"	33"	9.63"
// // // 3XL	28"	34"	10.13
// // // WRITE YOUR CODE HERE
// // // if((shirtWidth >=18 && shirtWidth<20) && (shirtLength >=28 && shirtLength <29 ) && (shirtSleeve>=8.13 && shirtSleeve <8.38)){
// // //     size = "S";
// // // }else if((shirtWidth >=20 && shirtWidth<22) && (shirtLength>= 29 && shirtLength <30 ) && (shirtSleeve>=8.38 && shirtSleeve <8.63)){
// // //     size = "M";
// // // } else if((shirtWidth >= 22 && shirtWidth <24) && (shirtLength>=30 && shirtLength<31) && (shirtSleeve>= 8.63 && shirtSleeve <8.88)){
// // //     size = "L";
// // // } else if((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength < 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63)){
// // //     size = "XL";
// // // }else if((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength < 34) && (shirtSleeve>=9.63 && shirtSleeve < 10.13)){
// // //     size = "2XL";
// // // }else if((shirtWidth >= 28) && (shirtLength >= 34) && (shirtSleeve >= 10.13)){
// // //     size = "3XL"
// // // } else {
// // //     size = "NA";
// // // }

// // // console.log(size)

// // if ((shirtWidth>=18 && shirtWidth<20) && (shirtLength>=28 && shirtLength<29) && (shirtSleeve>=8.13 && shirtSleeve<8.38) ) {
// //     size = "S";
// // }
// // else if ((shirtWidth>=20 && shirtWidth<22) && (shirtLength>=29 && shirtLength<30) && (shirtSleeve>=8.38 && shirtSleeve<8.63) ) {
// //     size = "M";
// // }
// // else if ((shirtWidth>=22 && shirtWidth<24) && (shirtLength>=30 && shirtLength<31) && (shirtSleeve>=8.63 && shirtSleeve<8.88) ) {
// //     size = "L";
// // }
// // else if ((shirtWidth>=24 && shirtWidth<26) && (shirtLength>=31 && shirtLength<33) && (shirtSleeve>=8.88 && shirtSleeve<9.63) ) {
// //     size = "XL";
// // }
// // else if ((shirtWidth>=26 && shirtWidth<28) && (shirtLength>=33 && shirtLength<34) && (shirtSleeve>=9.63 && shirtSleeve<10.13) ) {
// //     size = "2XL";
// // }
// // else if ((shirtWidth>=28) && (shirtLength>=34) && (shirtSleeve>=10.13) ) {
// //     size = "3XL";
// // }
// // else {
// //     size = "NA";
// // }
// // console.log(size);
// if (1) {
//     console.log("the value is truthy");
// } else {
//     console.log("the value is falsy");
// }
// var isGoing = false;
// var color = isGoing? "green" : "red";
// // if (!isGoing) {
// //   color = "green";
// // } else {
// //   color = "red";
// // }

// console.log(color);

// var adult = false;
// var preorder = true;

// console.log("It costs $" + (adult ? "40.00" : "20.00") + " to attend the concert. Pick up your tickets at the " + (preorder ? "will call" : "gate") + ".");
var eatPlants= true;
var eatAnimals = false;
var category = eatPlants? (eatAnimals? "omnivore" : "herbivore") : (eatAnimals? "carnivore" : "undefined");
console.log(category)
