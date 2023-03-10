let dictionary = Object.create(null);

Object.defineProperty(dictionary, 'toString', {
  value: function() {
      return Object.keys(this).join(',');
  },true
  enumerable: false,
}); // ��� ������ �������� ���������� ���� ��������� ��� �����, ��� ������� �������� 

// ��������� ������� ������
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // ����� __proto__ -- ��� ������� ����

// ������ apple � __proto__ �������� � �����
for(let key in dictionary) {
  console.log(key); // "apple", ����� "__proto__"
}

// ��� ����� toString � ��������
console.log(dictionary); // "apple,__proto__"