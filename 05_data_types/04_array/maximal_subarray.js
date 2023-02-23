function getMaxSubSum(arr) {
    let sum = 0, currSum = 0;
    for(let element of arr) {
        if((currSum + element) <= 0) {
            currSum = 0;
            continue;
        }
        currSum += element;
        if(currSum > sum) sum = currSum;
    }
    if(currSum > sum) sum = currSum;
    return sum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]) == 5);
console.log(getMaxSubSum([2, -1, 2, 3, -9]) == 6);
console.log(getMaxSubSum([-1, 2, 3, -9, 11]) == 11);
console.log(getMaxSubSum([-2, -1, 1, 2]) == 3);
console.log(getMaxSubSum([100, -9, 2, -3, 5]) == 100);
console.log(getMaxSubSum([100, -9, 2, -3, 50]) == 140);
console.log(getMaxSubSum([255, 250, -250, -250, 255, 250]) == 510);
console.log(getMaxSubSum([1, 2, 3]) == 6);
console.log(getMaxSubSum([-1, -2, -3]) == 0);