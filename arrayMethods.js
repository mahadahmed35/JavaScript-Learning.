// forEach(). Do something whit every item. Real life usage. Send/print each student's name
// const students = ["Abdi", "Kader","Hamza"]
// students.forEach(function (students){
//     console.log(students)
// })

//map(). Transform every item into something new. Convert product prices from USD to RWF.
// const students = [1,2,3,4,5]
//  const doubled = students.map(function(students){
//     return students * 2
// })

// console.log(doubled)

// Filter. Keep only items that match something new. Find products under $20.
// const ages = [22, 11, 23, 55, 32, 31];
// const adults = ages.filter(age => age >= 18)
// console.log(adults)
// find. Fin the first matching item. Find a user by ID.
const users = [
    { name: "Abdi", id: 1},
    { name: "Abid", id: 2},
    { name: "Abidd", id: 3},
    { name: "Abida", id: 4},
    { name: "Abide", id: 5},
]
const found = users.find( user => user.id === 2
)
console.log(found)