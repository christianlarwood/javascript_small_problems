function myStack() {
  const stack = [];

  return {
    push: function(value) {
      stack.push(value);
    },

    pop: function() {
      return stack.pop();
    },

    printStack: function() {
      stack.forEach(value => console.log(value));
    },
  };
}

let testStack = myStack()
testStack.push('hello');
testStack.push('heyo');
testStack.push('hi');

testStack.printStack();

testStack.pop();

testStack.printStack();
