// let startingBalance = 1;
// const chicken = 5;
// const chickenQuantity = 7;

// function totalPayable(item, quantity) {
//   return startingBalance + (item * quantity);
// }

// startingBalance = 5;
// console.log(totalPayable(chicken, chickenQuantity));

// startingBalance = 10;
// console.log(totalPayable(chicken, chickenQuantity));

//
function totalPayable(item, quantity) {
  return startingBalance + (item * quantity);
}

let startingBalance;
const chicken = 5;
const chickenQuantity = 7;

startingBalance = 1;

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity)); // logs 40

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity)); // logs 45