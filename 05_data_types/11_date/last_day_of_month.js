function getLastDayOfMonth(year, month){
    const date = new Date(0);
    date.setFullYear(year, month + 1, 0);
    return date.getDate();
}

console.log(getLastDayOfMonth(2012, 1) == 29);