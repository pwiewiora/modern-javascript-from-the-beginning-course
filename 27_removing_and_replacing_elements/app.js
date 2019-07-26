// REPLACE ELEMENT

// Create an element

const newHeading = document.createElement('h2');

// Add id
newHeading.id = 'task-title';
newHeading.appendChild(document.createTextNode('Task list'));

// Get the old heading
const oldHeading = document.getElementById('task-title');

//Parent 
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

console.log(newHeading, oldHeading, cardAction);

// REMOVE ELEMENT

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// CLASSES AND ATTRIBUTES

const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');

// Check for attributes
link.setAttribute('title', 'Google');
link.removeAttribute('title', 'Google');
val = link.hasAttribute('title');

console.log(val);