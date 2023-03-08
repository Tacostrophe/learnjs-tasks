function throttle(func, ms) {
  let allowed = true;
  let lastIgnoredCall;
    
  function wrapper() {
    if (allowed) {
      func.apply(this, arguments);
      allowed = false;
      setTimeout(() => {
        allowed = true;
        if (lastIgnoredCall != undefined) {
          const args = lastIgnoredCall;
          lastIgnoredCall = undefined;
          wrapper.apply(this, args);
        }
      }, ms);
    } else {
      lastIgnoredCall = arguments;
      return;
    }
  }
    
  return wrapper;
}

function f(a) {
  console.log(a)
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)
// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано
setTimeout(f1000, 2100, 4); // показывает 4
setTimeout(f1000, 2500, 5); // пропускает
setTimeout(f1000, 2700, 6); // пропускает
setTimeout(f1000, 3110, 7); // сначала показывает 6, через секунду 7
