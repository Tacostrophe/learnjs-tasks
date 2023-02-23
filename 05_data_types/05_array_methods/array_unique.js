function unique(arr) {
    if(arr.length == 0) return [];
    arr.sort();
    const uniqueArr = [arr[0]], arrLen = arr.length;
    for(let i = 1; i < arrLen; i++) {
        if(arr[i] == arr[i - 1]) continue;
        uniqueArr.push(arr[i]);
    }
    return uniqueArr;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) ); // кришна, харе, :-O