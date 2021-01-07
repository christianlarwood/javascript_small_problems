function swap(string) {
  if (string.length === 1){
    return string;
  }
  let splitString = string.split(' ');
  let swappedArray = splitString.map(word => {
    let firstChar = word[0];
    let lastChar = word[word.length - 1];
    let swappedChars = lastChar + word.slice(1, word.length - 1) + firstChar
    return swappedChars;
  })
  return swappedArray.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"