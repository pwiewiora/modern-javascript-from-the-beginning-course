// String

const name1 = 'Jeff';
const name2 = new String('Jeff');
//name2.foo = 'bar';
console.log(name2);
console.log(typeof name2);

if (name2 === 'Jeff') {
  console.log('Yes');
} else {
  console.log('No');
}

// Number
const num1 = 5;
const num2 = new Number(5);

console.log(typeof num2);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// Functions
const getSum1 = function(x, y){
  return x + y;
}
const getSum2 = new Function('x', 'y', 'return x + y')


console.log(getSum2(1,1));


// Object
const john1 = {name: "John"};
const john2 = new Object({name: "John"});
console.log(john2);

// Array
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

// Regular expressions
const re1 = /\w+/;
// Constructor needs escaping slashes
const re2 = new RegExp('\\w+');
