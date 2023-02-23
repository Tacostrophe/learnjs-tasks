const prompt = require("prompt-sync")();

const age = prompt("Input number between 14 and 90: ");

if(age < 14 || age > 90) console.log("No!");
if(!(age >= 14 && age <= 90)) console.log("No!"); 