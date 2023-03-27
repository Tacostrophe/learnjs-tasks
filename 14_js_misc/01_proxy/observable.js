function makeObservable(target) {
  target.observe = function(handler) {
    this.observer = handler;
  }
  return new Proxy(target, {
    set(target, prop, val, receiver) {
      if(target.observer && prop !== "observer") {
        target.observer(prop, val);
      }
      return Reflect.set(target, prop, val, receiver);
    }
  })
}
  
  let user = {};
  user = makeObservable(user);
  
  user.observe((key, value) => {
    console.log(`SET ${key}=${value}`);
  });
  
  user.name = "John";

  user.observe((key, value) => {
    console.log(`${value} is current ${key}`);
  });
  user.name = "Mike";

  user.age = 10;