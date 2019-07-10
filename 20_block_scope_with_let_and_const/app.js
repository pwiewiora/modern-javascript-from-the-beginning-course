// Global scope
var a = 1;
let b = 2;
const c = 3;

console.log('Global scope: ', a, b, c);

// Function scope    
function test() {
    var a = 4; // Function scope variable can't have the same name inside of a function
    let b = 5;
    const c = 6;
    console.log('Function Scope: ', a, b, c);
}

test();

// Block scope
if(true) {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Block (if) scope: ', a, b, c); // Returns values from block scope despite same names as global variables
}

for(let a = 0; a < 10; a++) {
    console.log(`Loop: ${a}`)
}
console.log('Global scope (variable a stays the same when we use let a in a block scope): ', a);

for(var a = 0; a < 10; a++) {
    console.log(`Loop: ${a}`)
}
console.log('Global scope (value changed by for loop using var instead of let): ', a);

// let and const have block level scope and var has a function scope