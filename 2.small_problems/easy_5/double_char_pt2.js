function doubleConsonants(string) {
  let splitString = string.split('');
  const alphaNoConsonants = /[bcdfghjklmnpqrstvwxyz]/gi;

  let doubled = splitString.map(char => {
  
    if (char.match(alphaNoConsonants)) {
      return char + char
    } else {
      return char
    }
  });
  console.log(doubled.join(''));
}


doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""