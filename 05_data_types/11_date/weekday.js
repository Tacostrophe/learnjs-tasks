function getLocalDay(date) {
    const dateDay = date.getDay();
    return (dateDay == 0) ? 7 : dateDay;
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log( getLocalDay(date) );       // вторник, нужно показать 2