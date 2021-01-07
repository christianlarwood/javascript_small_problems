function reverse(inputForReversal) {
  if (typeof inputForReversal === 'string') {
    return reverseString(inputForReversal);
  } else {
    return reverseArray(inputForReversal);
  }

}

function reverseArray(inputForReversal) {
  let result = [];

  for (let i = inputForReversal.length - 1; i >= 0; i -= 1) {
    result.push(inputForReversal[i]);
  }
  return result;
}

function reverseString(inputForReversal) {
  return reverseArray(inputForReversal).join('');
}

// reverse('Hello');
console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]
