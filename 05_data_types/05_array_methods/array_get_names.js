let vasya = { name: "����", age: 25 };
let petya = { name: "����", age: 30 };
let masha = { name: "����", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map((user) => user.name);

alert( names ); // ����, ����, ����