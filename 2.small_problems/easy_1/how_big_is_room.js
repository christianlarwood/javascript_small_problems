// let readlineSync = require('readline-sync');

// let length = readlineSync.prompt('Enter the length of the room in meters:');

// let width = readlineSync.prompt('Enter the width of the room in meters:');

// let areaMeters = Math.round(length * width, 2); 
// let areaFeet =  Math.round(areaMeters * 10.7639, 2);

// console.log(`The area of the room is ${areaMeters} meters (${areaFeet} square feet).`);


let readlineSync = require("readline-sync");

const SQMETERS_TO_SQFEET = 10.7639;

console.log("Enter the length of the room in meters:");
let length = readlineSync.prompt();
length = parseInt(length, 10);

console.log("Enter the width of the room in meters:");
let width = readlineSync.prompt();
width = parseInt(width, 10);

let areaInMeters = (length * width);
let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET);

console.log(
  `The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`
);