let arr = [5, 2, 1, -10, 8],
expectedArr = [8, 5, 2, 1, -10];

arr.sort((a, b) => b - a);

console.log( arr ); // 8, 5, 2, 1, -10
console.log( (arr.length === expectedArr.length) &&
             (arr.every((val, index) => (val == expectedArr[index]))));