// Read the following code carefully. Will the JavaScript garbage collection mechanism garbage collect the value assigned to the variable count after the function counter is run on line 12?

function makeCounter() {
  let count = 1; 

  return () => { // this is a closure which stores a reference to count
    console.log(count++)
  };
}

const counter = makeCounter();
counter();
// no since the counter function has closed over its parent scope where the value assigned to count exists. As long as the counter function exists, it needs to have access to that scope and so JS cannot GC the value assigned to count. 