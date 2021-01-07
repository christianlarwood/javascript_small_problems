function shift(array) {
  if (array.length === 0) {
    return undefined;
  } else {
    let firstChar = array[0];
    let arrayLength = array.length - 1;
    
    for (let i = 0; i < arrayLength; i++) {
      array[i] = array[i + 1];
    }

    array.length = arrayLength;
    console.log(firstChar);
  }
}

function unshift(array, ...args) {
  for (let i = 0; i < args.length; i++) {
    // console.log(i);
    array.splice(i, 0, args[i]);
  }

  console.log(array.length);
}


shift([1, 2, 3]);                // 1
shift([]);                       // undefined
shift([[1, 2, 3], 4, 5]);        // [1, 2, 3]

unshift([1, 2, 3], 5, 6);        // 5
unshift([1, 2, 3]);              // 3
unshift([4, 5], [1, 2, 3]);      // 3

const testArray = [1, 2, 3];
shift(testArray);                // 1
console.log(testArray);                       // [2, 3]
unshift(testArray, 5);           // 3
console.log(testArray);                       // [5, 2, 3]