console.log(`Hello World`);

let num1 = 20; // this is an integer
let num2 = 2;

function myFunction(num1, num2) {
  // this is a function
  let sum = num1 + num2;
  return sum;
}

// this is how to
console.log(myFunction(num1, num2));
console.log("CHALLENGE 1");

// create a function that will recieve to 2 parameters
// and multiply it then devide by 2

// value 1 = 10
// value 2 = 100

// your code bellow here

let value1 = 10;
let value2 = 100;
function myFunction2(value1, value2) {
  let value = (value1 * value2) / 2;
  return value;
}

console.log(myFunction2(2, 10));

// final

function inputName(firstName) {
  return firstName;
}

let print = inputName("Ronie");

console.log(print);

console.log("CHALLENGE 2");

function fullName(param1, param2, param3) {
  return param1 + param2 + param3;
}
console.log(fullName("ronie", "lumansoc", "cabanlit"));

// trial 2

// create a function that will recive 3 parameters
// that will recieve lastname,firstname,middlename
// and comibine them
// then console log to see the result
function fullName2(param1, param2, param3) {
  return param3 + param1 + param2;
}
console.log(fullName2("ronie", "lumansoc", "cabanlit"));
