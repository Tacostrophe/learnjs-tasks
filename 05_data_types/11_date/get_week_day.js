function getWeekDay(date) {
    const weekDays = [
        "��",
        "��",
        "��",
        "��",
        "��",
        "��",
        "��",
    ];
    return weekDays[date.getDay()];
}

let date = new Date(2012, 0, 3);  // 3 ������ 2012 ����
console.log( getWeekDay(date) == "��" ); // ����� ������� "��"