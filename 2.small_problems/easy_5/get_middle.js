function centerOf(string) {
  let middle = Math.ceil(string.length / 2);
  if (string.length % 2 === 1) {
    console.log(string[middle - 1])
  } else {
    console.log(string.substring(middle -1 , middle + 1));
  }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"