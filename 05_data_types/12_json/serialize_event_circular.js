let room = {
    number: 23
  };
  
let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};
  
// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;
  
const meetupJSON = JSON.stringify(meetup, function replacer(key, value) {
  return (key != "" && value == meetup) ? undefined : value;
});
  
console.log(meetupJSON == '{"title":"Совещание",' +
    '"occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],' +
    '"place":{"number":23}}');
//    в результате должно быть:
  
  