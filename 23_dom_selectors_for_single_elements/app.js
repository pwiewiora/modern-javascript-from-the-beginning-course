// document.getElementById();

console.log(document.getElementById('task-title'));

// Get things from the element
console.log(document.getElementById('task-title').id); // Accessing property of an element
console.log(document.getElementById('main').className);

const taskTitle = document.getElementById('task-title'); // Setting selected element as a variable for brevity

// Change styling
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
taskTitle.style.display = ''; // Display and other properties often hooked to an event

// Change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red'; // Selectin single element - the first - despite multiple similar existing
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow'; // Selecting using CSS3 pseudo classes
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = '#ccc'; // Odd/even selects only one (always singular element selection)
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';




