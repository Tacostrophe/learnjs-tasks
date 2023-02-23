const prompt = require("prompt-sync")();

const a = +prompt("Введите первое слагаемое: ", "");
const b = +prompt("Введите второе слагаемое: ", "");

console.log( a + b );