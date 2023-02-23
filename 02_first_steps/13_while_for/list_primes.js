const n = 10,
primeNumbers = Array.from({length: n - 1}, (v, i) => (2 + i)),
primeNumbersLen = primeNumbers.length;

for(let i = 0, j; i < primeNumbersLen; i++) {
    if(!primeNumbers[i]) continue;
    j = i + primeNumbers[i];
    while(j < primeNumbersLen) {        
        if(primeNumbers[j]) primeNumbers[j] = false;
        j += primeNumbers[i];
    }
}
console.log(primeNumbers.filter((v) => !!v).join(", "));