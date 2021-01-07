function swapCase(string) {
  let result = '';
  let lowercase = /[a-z]/;
  let uppercase = /[A-Z]/;
  
  for (let char in string) {
    if (string[char].match(lowercase)) {
      result += string[char].toUpperCase();
    } else if (string[char].match(uppercase)) {
      result += string[char].toLowerCase();
    } else {
      result += string[char];
    }
  }
  console.log(result);
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"