// function multiplyList(array1, array2) {
//   let result = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     result.push(array1[i] * array2[i]);
//   }
//   console.log(result);
// }

function multiplyList(array1, array2) {
  console.log(array1.map((num, index) => num * array2[index]));
}


multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]