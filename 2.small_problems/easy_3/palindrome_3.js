function isPalindromicNumber(number) {
  let reversedNum = Number(String(number).split('').reverse().join(''));
  return number === reversedNum;
}


console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true