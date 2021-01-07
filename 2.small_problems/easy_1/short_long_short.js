function shortLongShort(string1, string2) {
  if (string1.length > string2.length) {
    console.log(string2.concat(string1.concat(string2)));
    console.log(string2 + string1 + string2);
  } else {
    console.log(string1.concat(string2.concat(string1)));
  }
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"