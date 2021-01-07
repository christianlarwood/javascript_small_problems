function multiplyAllPairs(arr1, arr2) {
  let productArray = [];
  arr1.forEach(element => {
    arr2.forEach(element2 => {
      productArray.push(element * element2);
    })
  })

  let sortedArray = productArray.sort((a, b) => a - b);
  console.log(sortedArray);
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]