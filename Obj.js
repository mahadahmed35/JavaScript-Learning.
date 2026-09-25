// Quiz Bank Accounts.
// var savingsAccount = {
//     balance: 1000,
//     interestRatePercent: 1,
//     deposit: function addMoney(amount) {
//         if (amount > 0) {
//             savingsAccount.balance += amount;
//         }
//     },
//     withdraw: function removeMoney(amount) {
//         var verifyBalance = savingsAccount.balance - amount;
//         if (amount > 0 && verifyBalance >= 0) {
//             savingsAccount.balance -= amount;
//         }
//     },
    
//     printAccountSummary: function printAccountSummary(){
//         return "Welcome! \n Your balance is currently $"+ savingsAccount.balance +" and your interest rate is "+ savingsAccount.interestRatePercent +"%" 
//     }
//     // your code goes here
// };

// console.log(savingsAccount.printAccountSummary());
// Quiz: Facebook Friends.
// var facebookProfile = {
//     name: "Mhad",
//     friends: 30,
//     messages: ["Hello friend.", "How are you doing?", "How is everything?"],
//     postMessage: function(message){
//          facebookProfile.messages.push(message);
        
//     },
//     deleteMessage: function(index){
//         facebookProfile.messages.splice(index, 1)
//     },
//     addFriend: function(){
//     facebookProfile.friends  = facebookProfile.friends + 1;
//     },
//     removeFriend: function(){
//        if(facebookProfile.friends>0) 
//          facebookProfile.friends = facebookProfile.friends - 1;
//     }
// }
// // facebookProfile.postMessage("I am good");
// facebookProfile.deleteMessage(0,1)
// // facebookProfile.addFriend()
// // facebookProfile.removeFriend()
// console.log(facebookProfile.messages)

// Quiz Donuts Revisited.
var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

// your code goes here
donuts.forEach(function (donut){
    console.log(donut.type+" donuts cost $"+ donut.cost+" each" )
})