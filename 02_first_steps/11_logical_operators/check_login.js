const prompt = require("prompt-sync")();

const inputLogin = prompt("Кто там? ");
let password;

if(inputLogin === null || inputLogin === "") {
  console.log("Отменено");
} else if(inputLogin !== "Админ") {
  console.log("Я вас не знаю");
} else {
  password = prompt("Введите пароль: ");
  if(password === "Я главный") {
    console.log("Здравствуйте!");
  } else if(password === null || password === "") {
    console.log("Отменено");
  } else {
    console.log("Неверный пароль!");
  }
}