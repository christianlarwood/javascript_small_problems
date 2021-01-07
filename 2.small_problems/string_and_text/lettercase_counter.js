function letterCaseCount(string) {
  let splitString = [...string];
  let results = {lowercase: 0, uppercase: 0, neither: 0};
  splitString.forEach(char => {
    if (char.match(/[A-Z]/)) {
      results['uppercase'] += 1;
    } else if (char.match(/[a-z]/)) {
      results['lowercase'] += 1;
    } else {
      results['neither'] += 1;
    }
  })
  console.log(results);
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }