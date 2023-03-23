function* pseudoRandom(seed) {
  value = seed;
  while(true) {
    value = value * 16807 % 2147483647;
    yield value;
  }
    // next = previous * 16807 % 2147483647
}

let generator = pseudoRandom(1);

console.log(generator.next().value === 16807); // 16807
console.log(generator.next().value === 282475249); // 282475249
console.log(generator.next().value === 1622650073); // 1622650073