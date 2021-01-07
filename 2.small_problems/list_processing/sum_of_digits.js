function sum(num) {
  let toString = num.toString();
  let splitString = toString.split('');
  console.log(splitString);
  let total = splitString.reduce((acc, element) => {
    return acc + Number.parseInt(element);
  }, 0);

  console.log(total);
}


sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45