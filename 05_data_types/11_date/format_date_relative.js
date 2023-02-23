
// ���� ������ date ������ ����� 1 �������, ������� "����� ������".
// � ��������� ������, ���� � date ������ ������ 1 ������, ������� "n ���. �����".
// � ��������� ������, ���� ������ ����, ������� "m ���. �����".
// � ��������� ������, ������ ���� � ������� "DD.MM.YY HH:mm". � ������: "����.�����.��� ����:������",
// �� � ���� ���� ����, �.�. 31.12.16 10:00.

function formatDate(date) {
    const msPerSecond = 1000,
    msPerMinute = msPerSecond * 60,
    msPerHour = msPerMinute * 60,
    diff = Date.now() - date;
    if(diff < msPerSecond) return "����� ������";
    if(diff < msPerMinute) return `${Math.floor(diff / msPerSecond)} ���. �����`;
    if(diff < msPerHour) return `${Math.floor(diff / msPerMinute)} ���. �����`;
    const getTwoDigStr = (num) => ("0" + num).slice(-2);
    const DD = getTwoDigStr(date.getDate()),
    MM = getTwoDigStr(date.getMonth() + 1),
    YY = getTwoDigStr(date.getFullYear()),
    HH = getTwoDigStr(date.getHours()),
    mm = getTwoDigStr(date.getMinutes());
    return `${DD}.${MM}.${YY} ${HH}:${mm}`;
    
}

console.log( formatDate(new Date(new Date - 1)) ); // "����� ������"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 ���. �����"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 ���. �����"

// ��������� ���� ����� 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );