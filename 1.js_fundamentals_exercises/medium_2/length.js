const languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages); // logs the array
console.log(languages.length); // logs 3

languages.length = 4;
console.log(languages); // logs [..,..,..,1 empty slot]
console.log(languages.length); // logs 4

languages.length = 1;
console.log(languages); // logs [JavaScript]
console.log(languages.length); // logs 1

languages.length = 3; 
console.log(languages); // logs [JS, 2 empty slots]
console.log(languages.length); // logs 3

languages.length = 1;
languages[2] = 'Python';
console.log(languages); // logs [JS, 1 empty item, python]
console.log(languages[1]); // logs undefined
console.log(languages.length); // logs 2