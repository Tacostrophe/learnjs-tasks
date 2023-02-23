function shuffle(arr) {
    const swap = (arr, index1, index2) => {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
    let index1 = 0;
    const arrLen = arr.length;
    let index2;
    for(; index1 < arrLen; index1++) {
        index2 = Math.floor(Math.random() * arrLen);
        swap(arr, index1, index2);
    }
}

let arr = [1, 2, 3];

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);