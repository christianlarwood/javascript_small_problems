const person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);
// this will log `NaN` (undefined + undefined) because outside of a method invocation, `this` always refers to the global object. 