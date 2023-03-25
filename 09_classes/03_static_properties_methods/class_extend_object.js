class Rabbit {
    constructor(name) {
      this.name = name;
    }
  }
  
  let rabbitSteve = new Rabbit("Rab");
  
  // метод hasOwnProperty от Object.prototype
  console.log( rabbitSteve.hasOwnProperty('name') ); // true

  class RabbitExtended extends Object {
    constructor(name) {
      super(name);
      this.name = name;
    }
  }
  
  let rabbitDave = new RabbitExtended("Кроль");
  
  console.log( rabbitDave.hasOwnProperty('name') ); // Ошибка