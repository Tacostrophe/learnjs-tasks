function getLocalDay(date) {
    const dateDay = date.getDay();
    return (dateDay == 0) ? 7 : dateDay;
}

let date = new Date(2012, 0, 3);  // 3 ������ 2012 ����
console.log( getLocalDay(date) );       // �������, ����� �������� 2