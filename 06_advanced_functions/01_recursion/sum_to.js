function sumToLoop(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function sumToRecursion(n) {
  return (n == 1) ? 1 : n + sumToRecursion(n - 1);
}

function sumToProgression(n) {
  return (n + 1) * n / 2;
}

function checkExecTime(func, n, label) {
  console.time(label);
  for(let i = 0; i < 10000; i++) {
    func(n);
  }
  console.timeEnd(label);
}

checkExecTime(sumToLoop, 500, 'sumtoLoop');
checkExecTime(sumToRecursion, 500, 'sumtoLoop');
checkExecTime(sumToProgression, 500, 'sumtoLoop');
