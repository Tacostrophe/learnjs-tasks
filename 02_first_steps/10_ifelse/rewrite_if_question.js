const prompt = require("prompt-sync")();

let result,
  a = +prompt("Input a: "),
  b = +prompt("Input b: ");

result = (a + b < 4) ? "Мало" : "Много";
console.log(result);