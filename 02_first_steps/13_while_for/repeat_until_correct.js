const prompt = require("prompt-sync")();

while(true) {
  const inputVal = prompt("Введите число больше 100: ");
  if(inputVal > 100) break;
}