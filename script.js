// 1
let carName = "Volvo";

// 2
let firstName = "John"; lastName = "Doe"; age = 35;

// 3
let x = 10;
let y = 5;
x *= y; // x = 50

// 4
let length = 16; // number
let lastName = "Johnson"; // string

const person = {
  firstName: "John",
  lastName: "Doe"
}; // object

// 5
function myFunction() {
  alert("Hello World!");
}

myFunction(); // Call the function

// 6
const personDetails = {
  name: "John",
  age: 50
};

alert(`${personDetails.name} is ${personDetails.age}`); // "John is 50"

// 7
document.body.innerHTML += '<button onclick="alert(\'Button clicked!\')">Click me.</button>';

// 8.1
const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length); // Alerts 3

// 8.2
const Brand = ["Volvo", "Jeep", "Mercedes"];
Brand[0] = "Ford";

// 9.1
let randomNumber = Math.random(); 
// 9.2
let largest = Math.max(10, 20); // 20

// 9.3
let squareRoot = Math.sqrt(9); // 3

// 10.1
let xVal = 10;
let yVal = 5;



alert(xVal > yVal); // Alerts true

// 10.2
let ageVal = 20; // Example age value
alert(ageVal < 18 ? "Too young" : "Old enough");

// 11
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

console.log(celsiusToFahrenheit(0)); // 32
console.log(celsiusToFahrenheit(25)); // 77

// 12
function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false

// 13
function sum(a, b) {
  return a + b;
}

console.log(sum(3, 4)); // 7
console.log(sum(10, 20)); // 30

// 14
function findSmallestNum(arr) {
  return Math.min(...arr);
}

console.log(findSmallestNum([3, 5, 1, 9])); // 1
console.log(findSmallestNum([-1, -5, 0, 10])); // -5

// 15
function countVowels(str) {
  let vowels = 'aeiouAEIOU';
  return [...str].filter(char => vowels.includes(char)).length;
}

console.log(countVowels("hello world")); // 3
console.log(countVowels("Javascript")); // 3

// 16
function getFirstElement(arr) {
  return arr[0];
}

console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(["a", "b", "c"])); // "a"

// 17
function isArrayEmpty(arr) {
  return arr.length === 0;
}

console.log(isArrayEmpty([])); // true
console.log(isArrayEmpty([1, 2, 3])); // false

// 18
function factorialize(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorialize(num - 1);
}

console.log(factorialize(5)); // 120
console.log(factorialize(7)); // 5040

// 19
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow"

// 20
function toLowerCase(str) {
  return str.toLowerCase();
}

console.log(toLowerCase("HELLO WORLD")); // "hello world"
console.log(toLowerCase("JavaScript")); // "javascript"

// 21
function stringLength(str) {
  return str.length;
}

console.log(stringLength("hello")); // 5
console.log(stringLength("world")); // 5

// 22
function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]

// 23
function getLastElement(arr) {
  return arr[arr.length - 1];
}

console.log(getLastElement([1, 2, 3])); // 3
console.log(getLastElement(["a", "b", "c"])); // "c"

// 24
function getFirstCharacter(str) {
  return str.charAt(0);
}

console.log(getFirstCharacter("hello")); // "h"
console.log(getFirstCharacter("world")); // "w"

// 35
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([-1, -2, -3, -4])); // -10
console.log(sumArray([1.5, 2.5, 3.5])); // 7.5
