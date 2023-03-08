function printNumbersInterval(from, to) {
  let number = from;
  let timerId = setInterval(() => {console.log(number); number++}, 1000);
  setTimeout(() => { clearInterval(timerId); console.log('exiting'); }, (to - from + 2) * 1000);
}

function printNumbersTimeout(from, to) {
  let timerId = setTimeout(function numTick(number) {
    console.log(number);
    if (number < to) {
      timerId = setTimeout(numTick, 1000, number + 1);
    } else {
      console.log('exiting');
    }
  }, 1000,  from);
}

printNumbersInterval(1, 5);
printNumbersTimeout(1, 5);