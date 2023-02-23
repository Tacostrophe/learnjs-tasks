const prompt = require("prompt-sync")();

const message = (login) => (login == "Employee") ? "Hi" :
    (login == "Chief") ? "Hello" :
    (login == "") ? "No login" : "";

console.log(message(prompt("Input login: ", "")));