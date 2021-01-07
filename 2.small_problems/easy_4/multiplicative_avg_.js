function showMultiplicativeAverage(array) {
  let product = array.reduce((acc, num) => acc * num, 1);
  let result = (product / array.length).toFixed(3);
  console.log(result);
}

showMultiplicativeAverage([3, 5]);                   // "7.500"
showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"