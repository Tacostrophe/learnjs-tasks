let user = {
    name: "Василий Иванович",
    age: 35
  };

const userSerialized = JSON.stringify(user);

const userDeserialized = JSON.parse(userSerialized);

console.log(userSerialized);
console.log(userDeserialized);