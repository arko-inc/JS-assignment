// 1
let carName = "Volvo";

// 2
let firstName = "John"; lastName = "Doe"; age = 35;

// 3
let value_x = 10;
let value_y = 5;
x *= y; 

// 4
let length = 16; // number
let lastName = "Johnson"; // string

const Person = {
  firstName: "John",
  lastName: "Doe"
}; // object

// 5
function myFunction() {
  alert("Hello World!");
}
myFunction(); //answer

// 6
var person = {
  name: "John",
  age: 50
};
alert(person.name + " is " + person.age);


// 7
function myFunction() {
  alert("You clicked the button!");
}
<button onclick="myFunction()">Click me.</button>

// 8
const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length); 
//8.2
const Brand = ["Volvo", "Jeep", "Mercedes"];
Brand[0] = "Ford";

// 9.1
let randomNumber = Math.random();
//9.2
let largest = Math.max(10, 20); 
//9.3
let squareRoot = Math.sqrt(9); 

// 10.1
var x = 10;
var y = 5;

alert(x > y); 

// 10.2
var age = 17; 
age < 18 ? alert("Too young") : alert("Old enough");

// 11
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}
console.log(celsiusToFahrenheit(0)); // 32
console.log(celsiusToFahrenheit(25)); // 77

// 12
function Even(num) {
  return num % 2 === 0;
}

console.log(Even(4)); 
console.log(Even(7)); 

// 13//
function sum(a, b) {
  return a + b;
}

console.log(sum(3, 4)); 
console.log(sum(10, 20)); 

// 14
function numfunc(arr) {
  return Math.min(arr);
}

console.log(numfunc([3, 5, 1, 9])); // 1
console.log(numfunc([-1, -5, 0, 10])); // -5

// 15
function vowel(str) {
  let vowels = 'aeiouAEIOU';
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(vowel("hello world")); // 3
console.log(vowel("Javascript")); // 3

// 16
function get_first_element(arr) {
  return arr[0];
}

console.log(getFirstElement([1, 2, 3])); 
console.log(getFirstElement(["a", "b", "c"])); 

// 17
function array_empty(arr) {
  return arr.length === 0;
}

console.log(array_empty([])); 
console.log(array_empty([1, 2, 3])); 

// 18
function factorialize(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorialize(num - 1);
}
console.log(factorialize(5));
console.log(factorialize(7)); 

// 19
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString("hello")); 
console.log(reverseString("world")); 
console.log(reverseString("I love you")); 

// 20
function toLowerCase(str) {
  return str.toLowerCase();
}

console.log(toLowerCase("HELLO WORLD")); 
console.log(toLowerCase("JavaScript")); 

// 21
function stringLength(str) {
  return str.length;
}

console.log(stringLength("hello")); 
console.log(stringLength("world")); 

// 22
function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); 
console.log(mergeArrays(["a", "b"], ["c", "d"])); 

// 23
function getLastElement(arr) {
  return arr[arr.length - 1];
}

console.log(getLastElement([1, 2, 3])); 
console.log(getLastElement(["a", "b", "c"])); 

// 24
function getFirstCharacter(str) {
  return str.charAt(0);
}

console.log(getFirstCharacter("hello")); 
console.log(getFirstCharacter("world")); 

// 35
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumArray([1, 2, 3, 4])); 
console.log(sumArray([-1, -2, -3, -4])); 
console.log(sumArray([1.5, 2.5, 3.5])); 
