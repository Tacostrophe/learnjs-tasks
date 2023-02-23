const prompt = require("prompt-sync")();

let calculator = {
  read() {
    this.firstValue = +prompt("input first value: ", 0);
    this.secondValue = +prompt("input first value: ", 0);
  },
  sum() {
    if(!(this.firstValue && this.secondValue)) return; // handle somehow
    return this.firstValue + this.secondValue;
  },
  mul() {
    if(!(this.firstValue && this.secondValue)) return; // handle somehow
    return this.firstValue * this.secondValue;
  }
};
  
  calculator.read(2, 5);
  console.log( calculator.sum() );
  console.log( calculator.mul() );