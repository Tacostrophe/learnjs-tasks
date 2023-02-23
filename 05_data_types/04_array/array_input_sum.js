function sumInput() {
    const inputArr = [];
    let sum = 0, input;
    while(true) {
        input = prompt("Input value: ", "");
        if(!isFinite(input) || input == null || input == "") break;
        inputArr.push(+input);
    }
    for(let value of inputArr) {
        sum += value;
    }
    return sum;
}

console.log(sumInput());