function getSecondsToday() {
    const date = new Date();
    return ((date.getHours() * 60) + date.getMinutes()) * 60 + date.getSeconds();
}

console.log((new Date));
console.log(getSecondsToday());