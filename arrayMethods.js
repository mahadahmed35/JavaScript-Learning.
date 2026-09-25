// forEach(). Do something whit every item. Real life usage. Send/print each student's name
// const students = ["Abdi", "Kader","Hamza"]
// students.forEach(function (students){
//     console.log(students)
// })

//map(). Transform every item into something new. Convert product prices from USD to RWF.
const students = [1,2,3,4,5]
 const doubled = students.map(function(students){
    return students * 2
})

console.log(doubled)