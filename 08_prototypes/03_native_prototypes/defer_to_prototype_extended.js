function f(a, b) {
  console.log( a + b );
}

Function.prototype.defer = function(ms) {
    const func = this;
    return function() {
        setTimeout(() => (func.apply(this, arguments)), ms, ...arguments);
    }
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.;