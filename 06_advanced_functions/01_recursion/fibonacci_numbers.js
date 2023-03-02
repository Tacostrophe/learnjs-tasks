function fib(n) {
  if (this.cache === undefined) {
    this.cache = new Map();
  }
  if (this.cache[n] === undefined) {
    this.cache[n] = (n === 1 || n ===2) ? 1 : (fib(n - 1) + fib(n - 2));
  }
  return this.cache[n];
}

console.log(fib(100));