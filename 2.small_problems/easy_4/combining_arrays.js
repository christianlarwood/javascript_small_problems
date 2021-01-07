function union(arr1, arr2) {
  let combinedArrays = [];
  for (let i = 0; i < arr1.length; i += 1) {
    if (!combinedArrays.includes(arr1[i])) {
      combinedArrays.push(arr1[i])
    } 
    if (!combinedArrays.includes(arr2[i])) {
      combinedArrays.push(arr2[i])
    }
  }
  console.log(combinedArrays);
}


union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]