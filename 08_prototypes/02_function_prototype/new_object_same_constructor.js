function Obj() {
  this.property = 'value';
}

// Obj.prototype = {} // incorrect work

let obj = new Obj();

let obj2 = new obj.constructor();

console.log(obj2.property);