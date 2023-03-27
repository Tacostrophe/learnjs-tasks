let user = {
    name: "John"
  };
  
  function wrap(target) {
    return new Proxy(target, {
      get(target, prop) {
        if (prop in target) {
          return Reflect.get(...arguments);
        } else {
          throw Error('Ошибка: такого свойства не существует')
        }
      }
    });
  }
  
  user = wrap(user);
  
  console.log(user.name); // John
  console.log(user.age); // Ошибка: такого свойства не существуетh