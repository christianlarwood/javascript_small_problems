function crunch(string) {
  let result = '';
  for (let i = 0; i <= string.length - 1; i += 1) {
    if (string[i] !== string[i + 1]) {
      result += string[i]
    }
  }
  console.log(result);
}


crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""