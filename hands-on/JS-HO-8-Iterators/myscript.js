// Iterators


//numbers.forEach(number => {
    //     console.log(number);
    // });
    
// const numbers = [1,3,6,7,33,2,4,10];
// numbers.forEach(logNumbers);
// function logNumbers(number) {
//     console.log(number);
// }

// const numbers = [1,3,6,7,33,2,4,10];

// const newNumbers = numbers.map((num) => {
//     return num * 2;
// })

// console.log(newNumbers);

//<< find >>

const users = [
    { id: 0, name: "Jack", age: 20},
    { id: 1, name: "Milton", age: 34},
    { id: 2, name: "Arthur", age: 76},
    { id: 3, name: "Mercedes", age: 16},
];

const myUser = users.find(user => user.age === 76).name;
console.log(myUser);