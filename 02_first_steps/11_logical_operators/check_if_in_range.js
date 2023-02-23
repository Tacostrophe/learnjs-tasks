const prompt = require("prompt-sync")();

const age = prompt("Input age: ");

if(age >= 14 && age <= 90) {
    console.log( true );
} else {
    console.log( false );
}
