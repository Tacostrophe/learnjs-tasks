const prompt = require("prompt-sync")();

function Calculator() {
  this.read = function() {
    this.firstValue = +prompt("input first value: ", 0);
    this.secondValue = +prompt("input first value: ", 0);
  };
  this.sum = function() {
    if(!(this.firstValue && this.secondValue)) return; // handle somehow
    return this.firstValue + this.secondValue;
  };
  this.mul = function() {
    if(!(this.firstValue && this.secondValue)) return; // handle somehow
    return this.firstValue * this.secondValue;
  };
};
  
let calculator = new Calculator();
calculator.read();

console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );