// Create a function myBind, that accepts two arguments: 1) The function to bind, 2) The context object, and returns a new function that's hard-bound to the passed in context object.

function myBind(func, obj) {
  return function() {
    return func.call(obj);
  };
}

let obj = {
  name: 'Chris',
  age: 29,
}

function whoAmI() {
  console.log(`I am ${this.name}.`);
}

let test = myBind(whoAmI, obj);
test();

// if we want to account for arguments we can use `apply`
function myBind(func, obj) {
  return function(...args) {
    return func.apply(obj, args);
  };
}