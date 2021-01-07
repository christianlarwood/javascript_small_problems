function asciiValue(string) {
  let total = 0;
  let splitString = string.split('');
  splitString.forEach(element => {
    total += element.charCodeAt(); 
  });
  console.log(total);
}


asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0