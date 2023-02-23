const prompt = require("prompt-sync")();

const JS_NAME = "ECMAScript",
inputAnswer = prompt("Какое \"официальное\" название JavaScript? ", "");

if(inputAnswer == JS_NAME) {
  console.log("Верно!");
} else {
  console.log(`Не знаете? ${JS_NAME}!`);
}