function aclean(arr) {
    const arrMap = new Map();
    for( let word of arr) {
        arrMap.set(word.toLowerCase().split("").sort().join(""), word);
    }
    return Array.from(arrMap.values());
}


let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"