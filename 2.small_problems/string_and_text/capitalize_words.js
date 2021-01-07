function wordCap(string) {
  let splitString = string.split(' ');
  console.log(splitString.map(word => {
    let upcase = word[0].toUpperCase() + word.substring(1);
    return upcase;
  }).join(' '));
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'