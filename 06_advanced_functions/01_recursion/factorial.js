function factorial(n) {
    return (n === 2) ? 2 : n * factorial(n - 1);
}

console.log(factorial(5));