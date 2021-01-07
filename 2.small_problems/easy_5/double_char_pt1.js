// function repeater(string) {
//   let result = '';
//   for (let i = 0; i < string.length; i += 1) {
//     result += string[i] + string[i];
//   }
//   console.log(result);
// }

function repeater(string) {
  console.log(string.split('').map(char => {
    return char + char;
  }).join(''))
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""