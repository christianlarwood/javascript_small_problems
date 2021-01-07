let readlineSync = require('readline-sync');

let number = parseFloat(readlineSync.question('Choose an integer greater than 0:\n'));
let operator = (readlineSync.question('Enter "s" to compute sum, or "p" to compute the product\n'));

function sum(num) {
  let total = 0;
  for (let startNum = 1; startNum <= num; startNum += 1) {
    total += startNum;
  }
  return total;
}

function product(num) {
  let total = 1;
  for (let startNum = 1; startNum <= num; startNum += 1) {
    total *= startNum;
  }
  return total;
}

let result;
let operation;
if (operator === "s") {
  result = sum(number);
  operation = 'sum';
} else if (operator === 'p') {
  result = product(number);
  operation = 'product';
}

console.log(`The ${operation} of the integers between 1 and ${number} is ${result}`);
