let readlineSync = require('readline-sync');

let billAmount = parseFloat(readlineSync.question('What is the bill amount?\n'));
let tipPercentage = parseFloat(readlineSync.question('What is the tip percentage? (15, 20, 25...)\n'));

let tipAmount = billAmount * (tipPercentage * .01);
let billTotal = (tipAmount + billAmount);

console.log(`The tip is: $${tipAmount.toFixed(2)}`);
console.log(`The total is: $${billTotal.toFixed(2)}`);