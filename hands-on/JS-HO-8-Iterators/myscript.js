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

// << find >>

// const users = [
//     { id: 0, name: "Jack", age: 20},
//     { id: 1, name: "Milton", age: 34},
//     { id: 2, name: "Arthur", age: 76},
//     { id: 3, name: "Mercedes", age: 16},
// ];

//  const myUser = users.find(user => user.age === 76).name;
//  console.log(myUser);

// << filter >>============
//  const myUsers = users.filter((user) => user.age < 25);
// console.log(myUSers)

// << recuder >>==========
// const myArray = [1,3,5,6,8]
// myArray.reduce((acc,curr) =>{
//     console.log("acc " + acc);
//     console.log("curr " + curr)
// })

// <<every, some >>

// const users = [
//     { id: 0, isOld: true, name: "Jack", age: 20},
//     { id: 1, isOld: true, name: "Milton", age: 34},
//     { id: 2, isOld: true, name: "Arthur", age: 76},
//     { id: 3, isOld: false, name: "Mercedes", age: 16},
//     { id: 4, isOld: true, name: "Dave", age: 76}
// ];

//All of them
// console.log("every: " + users.every(user => user.isOld === true))

//On of them is enough too
// console.log("some: " + users.some(user => user.isOld === true))

// << for-in, for-of >>


// const user = { id: 0, isOld: true, name: "Jack", age: 20};

// for (key in user) {
//     console.log("key: " + key)
//     console.log("key: " + user[key]);
// }

// user.forEach ((u) => console.log(u));