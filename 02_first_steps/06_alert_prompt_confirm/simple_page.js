const prompt = require("prompt-sync")();

let currentUserName = prompt("What's your name? ", "");
console.log(`Your name is ${currentUserName}`);