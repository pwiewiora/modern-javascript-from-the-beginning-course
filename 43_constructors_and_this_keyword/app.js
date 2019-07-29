// const brad = {
//   name: 'Brad',
//   age: 30
// };

// console.log(brad);

// Person constructor
// Constructors should start with a capital
function Person(name, dob) {
  // this refers to the current instance of the object
  this.name = name;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  // this.age = age;
  // console.log(this);
}
// This in the global scope refers to the object window
//console.log(this);


// const brad = new Person('Brad', 36);
// const john = new Person('John', 30);
// console.log(brad, john);
const brad = new Person('Brad', '9-10-1981');