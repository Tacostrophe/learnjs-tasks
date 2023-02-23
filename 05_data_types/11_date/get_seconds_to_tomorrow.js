function getSecondsToTomorrow() {
    const today = new Date();
    const tomorrowMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    return (tomorrowMidnight - today) / 1000;
}

console.log(new Date());
console.log(getSecondsToTomorrow());