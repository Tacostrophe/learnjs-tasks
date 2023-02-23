function checkAgeQM(age) {
  return (age > 18) ? true : "Родители разрешили?";
}

function checkAgeOr(age) {
  return (age > 18) || "Родители разрешили?";
}

console.log("17 " + checkAgeQM(17) + checkAgeOr(17));
console.log("18 " + checkAgeQM(18) + checkAgeOr(18));
console.log("19 " + checkAgeQM(19) + checkAgeOr(19));