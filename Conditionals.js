// var colt ="not busy";
// var  weather = "nice";

// if(colt === "not busy" && weather === "nice"){
//     console.log("Friend you are budy let us go to the park")
// }else{
//     console.log("We will go other time")
// }
// var balance = 325.00;
// var checkBalance = true;
// var isActive = true;

// // your code goes here
// if(checkBalance === "No"){
//     console.log("Thank you. Have a nice day!")
// }else if(isActive === "true" && balance > 0){
//     console.log("Your balance is $"+ balance +".")
// }else if (isActive === "false"){
//     console.log("Your account is no longer active.")
// }else if (balance === 0){
//     console.log("Your account is empty.")
// }else{
//     console.log("Your account is negative please contact bank.")
// }
var balance = -325.00;
var checkBalance = true;
var isActive = true;

// your code goes here
if(checkBalance === true){
    if(isActive === true && balance >0){
    console.log("Your balance is $"+ balance.toFixed(2) +".")
}else if (isActive === true && balance === 0){
    console.log("Your account is empty")
}else if (isActive === true && balance < 0){
    console.log("Your account is negative please contact bank")
}else if(isActive === false){
    console.log("Your account is no longer active")
        }
    }
    else {
    console.log("Thank you have a nice day!")
}
