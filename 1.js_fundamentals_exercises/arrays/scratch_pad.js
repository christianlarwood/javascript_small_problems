// create an object exam, with a property numberOfQuestions that has a value of 10, a property maxScore that has a value of 100, and a property title that has a value of 'JS'.

// What are two ways to access the values of the properties? Bonus points for a third. 

// Bonus points to create an object named hello that has a method greet, outputting 'Hello!'.

let exam = {
  numberOfQuestions: 10,
  maxScore: 100,
  title: 'JS',
}

// bracket
console.log(exam['numberOfQuestions']); // 10

// dot notation
console.log(exam.title) // 'JS'

// method?
console.log(Object.values(exam)); // [10, 100, 'JS']


// Jay's Example
let arr = [1, 2, 3];
arr.length = 6;
arr[4] = 4;
arr['foo'] = 'bar';

// What do the following log to the console? Why?
console.log(arr.length); // 6
console.log(Object.keys(arr).length); // 4