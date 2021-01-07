let makeTodoList = (() => {
  let list = [];

  return () => {
    return {
      add(item) {
        list.push(item);
      },
      display() {
        list.forEach(item => console.log(item));
      }
    };
  };
})();


console.log(makeTodoList()); // { add: [Function: add], display: [Function: display] }


let generateStudentId = (function() {
  let studentId = 0;

  return function() {
    studentId += 1;
    return studentId;
  };
})();

console.log(generateStudentId());