const prompt = require("prompt-sync")();

function pow(x, n) {
    return x**n;
}

console.log("Возведение числа в степень.");
const x = +prompt("Введите число для возведения в степень: ", ""),
    n = +prompt("Введите степень, в которую необходимо возвести число: ", "");
if(n >= 1) {
    console.log(`${x} в степени ${n} равно ${pow(x, n)}`);
} else {
    console.log("n должно быть не менее 1");
}