let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, prop, receiver) {
    const positiveProp = (prop < 0) ? (target.length + +prop) : prop;
    return Reflect.get(target, positiveProp, receiver);
  }
});

console.log( array[-1] ); // 3
console.log( array[-2] ); // 2