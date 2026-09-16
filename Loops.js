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

var x = 11;

while (x<20) {
    // print Julia, James, or JuliaJames
    if(x%3===0){
        console.log("Julia")
    }else if(x%5==0){
        console.log("James");
    }else if(x%3==0 && x%5==0){
        console.log("JuliaJames");
    }else{
        console.log("Number")
    }
    // increment x
    x = x + 1
}
// console.log(x)