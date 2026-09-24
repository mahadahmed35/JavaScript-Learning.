// let numbers = [1, 2, 3];

// numbers.push(4);

// console.log(numbers)
// Quidditch Cup Quiz.
// function hasEnoughPlayers(team){
//  return team.length >= 7? true: false;
// }

// var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
// console.log(hasEnoughPlayers(team));
// // 
// Array Methods.
// const numbers = [1, 2, 3];
// const doubles = [];

// const doubled = numbers.forEach(function(num) {
//     doubles.push(num * 2)

// });
// console.log(doubles);
// Quiz: Another Type of Loop.
// var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
//     19, 300, 3775, 299, 36, 209, 148, 169, 299,
//     6, 109, 20, 58, 139, 59, 3, 1, 139
// ];
// test.forEach(function(item, index){
//     if(item%3 === 0){
//         item = item + 100;
//         console.log("The updated element is "+item+" and actual is "+test[index]);
//         test[index]=test[index]+100;
//     }else{
//         console.log("Elemets " + item + " is not divisible by 3")
        
//     }
// })
//     console.log(test)


//
// const myArray = [1, 3, 4, 5, 6, 6]
// function myAwesomeFunction(element, index, array){
//     console.log("Element: " + element + "Array: " + index);
    
// }

// myArray.forEach(myAwesomeFunction)
// var bills = [50.23, 19.12, 34.01,
//     100.11, 12.15, 9.90, 29.11, 12.99,
//     10.00, 99.22, 102.20, 100.10, 6.77, 2.22
// ];
// var totals = bills.map(function(bill){
//     bill *= 1.15;
//    bill = bill.toFixed(2)
//    bill = Number(bill)
    
//     return bill;
// })
// console.log(totals)
// Nested Numbers Quiz.
var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];
for(let i=0; i< numbers.length; i++){
    for(let j=0; j < numbers[i].length; j++){
        if(numbers[i][j]%2===0){
            numbers[i][j]= "even";
        }else{
            numbers[i][j]= "odd";
    }
    
    }
}
console.log(numbers)
for(var i=0; i<numbers.length; i++){
    
    // Let j represents the length of a sub-array 
    for(var j=0; j<numbers[i].length; j++){
        if(numbers[i][j]%2===0)
            numbers[i][j]="even";
        else
            numbers[i][j]="odd";
    }
}