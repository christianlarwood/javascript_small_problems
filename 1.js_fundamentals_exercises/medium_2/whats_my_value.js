const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length); // logs 3
console.log(Object.keys(array).length); //l ogs 4

array[-2] = 'Watermelon';
console.log(array.length); // logs 3
console.log(Object.keys(array).length); // logs 5