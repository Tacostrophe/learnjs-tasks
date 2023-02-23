const prompt = require("prompt-sync")();

let inputNum = prompt("Input any number: ","");

if(inputNum > 0) {
  console.log(1);
} else if(inputNum <0){
  console.log(-1);
} else {
  console.log(0);
}