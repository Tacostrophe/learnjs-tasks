const prompt = require("prompt-sync")();

function readNumber() {
    let input = NaN;
    while(isNaN(input)) {
        input = prompt("Введите число: ", "");
    }
    if(input == null || input == "") return null;
    return input;
}

console.log("Число: " + readNumber());