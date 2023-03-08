function f(x) {
  console.log(x);
}

function delay(func, ms) {
  return function() {
    setTimeout(func, ms, ...arguments);
  }
}

// ������ ������
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // ���������� "test" ����� 1000 ��
f1500("test"); // ���������� "test" ����� 1500 ��