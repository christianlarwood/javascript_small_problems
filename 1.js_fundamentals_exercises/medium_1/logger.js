function debugIt() {
  const status = 'debugging'; // declare const with value 'debugging'
  function logger() { // function declaration
    console.log(status); // logs 'debugging'
  }

  logger(); // invoke function
}

debugIt(); // invoke function