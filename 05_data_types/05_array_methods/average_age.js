function getAverageAge(arr) {
    return arr.reduce((total, val) => (total + val.age), 0) / arr.length
}

let vasya = { name: "����", age: 25 };
let petya = { name: "����", age: 30 };
let masha = { name: "����", age: 29 };

let arr = [ vasya, petya, masha ];

console.log( getAverageAge(arr) == 28 ); // (25 + 30 + 29) / 3 = 28