function topSalary(salaries = {}) {
    let maxName = null, maxSalary = 0;
    Object.entries(salaries).forEach(([name, salary]) => {
        (salary > maxSalary) ? [maxName, maxSalary] = [name, salary] : [maxName, maxSalary]
    });
    return maxName;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(topSalary(salaries));
console.log(topSalary() === null);