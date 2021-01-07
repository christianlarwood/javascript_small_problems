function negative(number) {
  if (number >= 0) {
    console.log((-number));
  } else {
    console.log(number);
  }
}

// refactored
function negative(number) {
  return (number >= 0) ? -number : number
}


console.log(negative(5));     // -5
negative(-3);    // -3
negative(0);     // -0