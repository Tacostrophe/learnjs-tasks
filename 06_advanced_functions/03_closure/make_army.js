function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function() { // ������� shooter
      console.log( i ); // ������ �������� ���������� �����
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

army[0](); // � 0-�� ������� ����� ����� 10
army[5](); // � � 5-�� ������� ���� ����� ����� 10
// ... � ���� �������� ����� ����� 10, ������ 0, 1, 2, 3...