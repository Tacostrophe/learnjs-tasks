let animals = ["����", "��", "����", "������", "����", "��"];

let collator = new Intl.Collator(undefined, {
  sensitivity: "accent"
});

animals.sort((a, b) => collator.compare(a, b))

console.log( animals ); // ����,��,����,������,����,��.