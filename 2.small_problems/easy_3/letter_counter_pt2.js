function wordSizes(string) {
  let result = {};
  if (string.length === 0) {
    return result;
  }

  string.split(' ').forEach(word => {
    let cleanedWord = word.replace(/[^a-z]/gi, '');
    if (!result[cleanedWord.length]) {
      result[cleanedWord.length] = 1;
    } else {
      result[cleanedWord.length] += 1;
    }
  });
  console.log(result);
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "5": 1, "2": 1, "3": 1 }
wordSizes('');                                            // {}