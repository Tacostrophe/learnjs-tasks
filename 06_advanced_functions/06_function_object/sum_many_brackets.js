function sum(a) {
  currSum = a;
  function add(b) {
    currSum += b;
    return add;
  }
  add[Symbol.toPrimitive] = (hint) => currSum;
  return add;
}

console.log(sum(1)(2) == 3); // 1 + 2
console.log(sum(1)(2)(3) == 6); // 1 + 2 + 3
console.log(sum(5)(-1)(2) == 6);
console.log(sum(6)(-1)(-2)(-3) == 0);
console.log(sum(0)(1)(2)(3)(4)(5) == 15);