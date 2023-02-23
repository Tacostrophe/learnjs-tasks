const prompt = require("prompt-sync")();

function ask(question, yes, no) {
    let answer = prompt(question + "(Y/n): ");
    if (answer == "Y") yes()
    else if(answer == "n") no();
}

ask(
  "Вы согласны?",
  () => { console.log("Вы согласились."); },
  () => { console.log("Вы отменили выполнение."); }
);
