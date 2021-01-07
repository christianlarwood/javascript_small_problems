// Read the following code carefully. Will the JavaScript garbage collection mechanism garbage collect the value assigned to the variable count after the function counter is run on line 10?

function makeCounter() {
  let count = 1;

  return () => {
    console.log(count++) // closure references count
  };
}

const counter = makeCounter(); 
counter();

// more code

// No, the value assigned to the variable count will not be garbage collected after the function counter is run. The counter function has closed over its parent scope where the value assigned to count exists. As long as the counter function exists, it needs to have access to that scope and so JavaScript cannot garbage collect the value assigned to count.