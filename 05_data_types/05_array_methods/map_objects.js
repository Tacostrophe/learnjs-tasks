let vasya = { name: "����", surname: "������", id: 1 };
let petya = { name: "����", surname: "������", id: 2 };
let masha = { name: "����", surname: "�������", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map((user) => ({fullName: user.name + " " + user.surname,
                                        id: user.id}));

/*
usersMapped = [
  { fullName: "���� ������", id: 1 },
  { fullName: "���� ������", id: 2 },
  { fullName: "���� �������", id: 3 }
]
*/

console.log( usersMapped);
console.log( usersMapped[0].id == 1 );
console.log( usersMapped[0].fullName == "���� ������")