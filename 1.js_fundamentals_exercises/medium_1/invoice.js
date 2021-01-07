// function invoiceTotal(amount1, amount2, amount3, amount4) {
//   return amount1 + amount2 + amount3 + amount4;
// }

// console.log(invoiceTotal(20, 30, 40, 50));          // works as expected
// console.log(invoiceTotal(20, 30, 40, 50, 40, 40));  // does not work; how can you make it work?

// refactored

function invoiceTotal(...args) {
  return args.reduce((acc, element) => acc + element, 0);
  // return amount1 + amount2 + amount3 + amount4;
}

console.log(invoiceTotal(20, 30, 40, 50));          // works as expected
console.log(invoiceTotal(20, 30, 40, 50, 40, 40)); 