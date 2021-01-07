// function doubler(number, caller) {
//   console.log(`This function was called by ${caller}.`);
//   return number + number;
// }

// doubler(5, 'Victor');                   // returns 10
// // logs:
// // This function was called by Victor.

function makeDoubler(caller) {
  return function(number) {
    console.log(`This function was called by ${caller}.`);
    return number + number;
  };
}

const double = makeDoubler('Victor');
console.log(double(5));