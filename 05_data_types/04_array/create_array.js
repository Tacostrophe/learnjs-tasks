const styles = ["����", "����"];

console.log(styles);

styles.push("���-�-����");
console.log(styles);

styles[Math.floor((styles.length - 1) / 2)] = "��������";
console.log(styles);

styles.shift();
console.log(styles);

styles.unshift("���", "�����");
console.log(styles);