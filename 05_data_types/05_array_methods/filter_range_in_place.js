function filterRangeInPlace(arr, a, b) {
    let i = 0, arrLen = arr.length;
    while( i < arrLen) {
        if(arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
        } else { i++;}
    }
}

let arr = [5, 3, 8, 1],
expectedArr = [3, 1];

filterRangeInPlace(arr, 1, 4);

console.log( (arr.length === expectedArr.length) &&
             (arr.every((val, index) => (val === expectedArr[index]))) );