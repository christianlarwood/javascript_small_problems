function concat(...args) {
  let concatArray = [];
  args.forEach(function(element) {
    if (Array.isArray(element)) {
      for (let i = 0; i <= element.length - 1; i++) {
        concatArray.push(element[i]);
      } 
    } else {
      concatArray.push(element);
    }
  });
  return concatArray;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]