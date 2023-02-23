function Calculator() {
    this["+"] = (a, b) => (a + b);
    this["-"] = (a, b) => (a - b);
    this.calculate = function(str) {
        const chars = str.split(" ");
        if(chars.length != 3 ||
           !(isFinite(chars[0])) ||
           chars[0] == "" ||
           !(isFinite(chars[2])) ||
           chars[2] == "") {
            return ("Строка должна быть вида: \"number calculateMethod number\"");
        }
        let method = chars[1];
        if(this[method] == undefined) {
            return (`Неизвестный метод: ${method}`);
        }
        return this[chars[1]](+chars[0], +chars[2]);
    };
    this.addMethod = function(name, func) {
        this[name] = func;
    };
}

let calc = new Calculator;

console.log( calc.calculate("3 + 7") == 10 );
console.log( calc.calculate("3 - 7") == -4 );

let powerCalc = new Calculator;

powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let resultOfMultily = powerCalc.calculate("2 * 3");
console.log( resultOfMultily == 6 );

let resultOfPow = powerCalc.calculate("2 ** 3");
console.log( resultOfPow == 8 );

let resultOfDiv = powerCalc.calculate("12 / 3");
console.log( resultOfDiv == 4 );

// Обработка ошибок
let resultOfErrorMethod = powerCalc.calculate("2 *** 3");
console.log( resultOfErrorMethod == "Неизвестный метод: ***");

let resultOfWrongInput = powerCalc.calculate("2 9 4 4");
console.log( resultOfWrongInput == "Строка должна быть вида: \"number calculateMethod number\"");

let resultOfNaNInput = powerCalc.calculate("Nan + NaN");
console.log( resultOfNaNInput == "Строка должна быть вида: \"number calculateMethod number\"");

let resultOfEmptyNum = powerCalc.calculate(" ** 2");
console.log( resultOfEmptyNum == "Строка должна быть вида: \"number calculateMethod number\"");