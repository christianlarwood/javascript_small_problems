function findFibonacciIndexByLength(num) {
  let fibonacciArray = [1, 1];
  let fibIndex = fibonacciArray.length - 1;
  // console.log(fibonacciArray[fibIndex].toString().length);
  do {
    nextFib = fibonacciArray[fibIndex - 2] + fibonacciArray[fibIndex];
    fibonacciArray.push(nextFib);
  } while (fibonacciArray[fibIndex].toString().length < num);
  
  console.log(fibonacciArray[fibIndex]);
}


findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74