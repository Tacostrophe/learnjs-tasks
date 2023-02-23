function sortByAge(arr) {
    arr.sort((item1, item2) => (item1.age - item2.age));
}

let vasya = { name: "����", age: 25 };
let petya = { name: "����", age: 30 };
let masha = { name: "����", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

// ������: [vasya, masha, petya]
alert(arr[0].name == "����"); // ����
alert(arr[1].name == "����"); // ����
alert(arr[2].name == "����"); // ����