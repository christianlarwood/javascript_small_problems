// const franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies() {
//     return [1, 2, 3].map(function(number) {
//       return `${this.name} ${number}`;
//     });
//   },
// };

// as is, this.name resolves to undefined because the code is inside a function declaration which means that `this` references the global object and since `name` is not a valid variable JS returns undefined. 

// there are several ways to solve this issue:
// // use self = this
// const franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies() {
//     let self = this;
//     return [1, 2, 3].map(function(number) {
//       return `${self.name} ${number}`;
//     });
//   },
// };

// console.log(franchise.allMovies());
// [
//   'How to Train Your Dragon 1',
//   'How to Train Your Dragon 2',
//   'How to Train Your Dragon 3'
// ]


// const franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies() {
//     return [1, 2, 3].map(function(number) {
//       return `${this.name} ${number}`;
//     });
//   },
// };

// console.log(franchise.allMovies()); // [ 'undefined 1', 'undefined 2', 'undefined 3' ]
// the reason why this.name resolves to undefined is because we have a nested or inner function which means that all function invocations resolve to the global context and since `name` isn't a variable in the global context, this.name returns undefined. 

// to fix this we can hard bind the function invocation or declare self = this within the method?
// const franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies() {
//     return [1, 2, 3].map(function(number) {
//       return `${this.name} ${number}`;
//     }.bind(franchise));
//   },
// };

// console.log(franchise.allMovies()); 
// [
//   'How to Train Your Dragon 1',
//   'How to Train Your Dragon 2',
//   'How to Train Your Dragon 3'
// ]

// const franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies() {
//     let self = this;
//     return [1, 2, 3].map(function(number) {
//       return `${self.name} ${number}`;
//     });
//   },
// };

// console.log(franchise.allMovies()); // works
