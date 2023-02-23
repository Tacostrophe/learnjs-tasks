
// ≈сли спуст€ date прошло менее 1 секунды, вывести "пр€мо сейчас".
// ¬ противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// ¬ противном случае, если меньше часа, вывести "m мин. назад".
// ¬ противном случае, полна€ дата в формате "DD.MM.YY HH:mm". ј именно: "день.мес€ц.год часы:минуты",
// всЄ в виде двух цифр, т.е. 31.12.16 10:00.

function formatDate(date) {
    const msPerSecond = 1000,
    msPerMinute = msPerSecond * 60,
    msPerHour = msPerMinute * 60,
    diff = Date.now() - date;
    if(diff < msPerSecond) return "пр€мо сейчас";
    if(diff < msPerMinute) return `${Math.floor(diff / msPerSecond)} сек. назад`;
    if(diff < msPerHour) return `${Math.floor(diff / msPerMinute)} мин. назад`;
    const getTwoDigStr = (num) => ("0" + num).slice(-2);
    const DD = getTwoDigStr(date.getDate()),
    MM = getTwoDigStr(date.getMonth() + 1),
    YY = getTwoDigStr(date.getFullYear()),
    HH = getTwoDigStr(date.getHours()),
    mm = getTwoDigStr(date.getMinutes());
    return `${DD}.${MM}.${YY} ${HH}:${mm}`;
    
}

console.log( formatDate(new Date(new Date - 1)) ); // "пр€мо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашн€€ дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );