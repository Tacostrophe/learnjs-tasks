function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = function(newCount) {
    count = newCount;
  };
  counter.decrease = function() {
    count -= 1;
  };
  return counter;
}

let counter = makeCounter();

console.log( counter() === 0 );
console.log( counter() === 1 );

counter.set(10); // установить новое значение счётчика

console.log( counter() === 10 );

counter.decrease(); // уменьшить значение счётчика на 1

console.log( counter() === 10 );