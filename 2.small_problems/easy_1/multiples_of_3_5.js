function multisum(num) {
  let total = 0;
  for (let startNum = 1; startNum <= num; startNum += 1) {
    if (startNum % 5 === 0 || startNum % 3 === 0) {
      total += startNum;
    }
  }
  console.log(total);
}


multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168