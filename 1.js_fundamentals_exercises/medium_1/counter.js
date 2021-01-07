//#1
// var counter = 5;
// var rate = 3;
// console.log('The total value is ' + String(counter * rate));

// function counter(count) {
//   // ...
// }

// equivalent to:
// function counter(count) { // function declaration
//   // ...
// }

// var counter; // redeclare counter
// var rate; // declare rate

// counter = 5; // reassign counter
// rate = 3; // reassign rate
// console.log('The total value is ' + String(counter * rate)); // will log this string

//#2
// function counter(count) {
//   // ...
// }

// console.log('The total value is ' + String(counter * rate)); // logs Total value is undefined

// var counter = 5;
// var rate = 3;

// // is equivalent to:
// function counter(count) {
//   // ...
// }

// var counter;
// var rate;

// console.log('The total value is ' + String(counter * rate)); 

// counter = 5;
// rate = 3;

// #3
// var counter = 5;
// var rate = 3;

// function counter(count) {
//   // ...
// }

// console.log('The total value is ' + String(counter * rate)); // logs same as #1

// #4
let counter = 5;
let rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate)); // logs error because you can't redeclare counter;