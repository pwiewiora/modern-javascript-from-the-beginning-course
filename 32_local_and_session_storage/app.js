// values set in local storage have to be strings

// set local storage item (stays until manually cleared)
localStorage.setItem('name', 'John');

// set session storage item (stays until the end of session)
sessionStorage.setItem('name', 'Beth');

// remove from storage

// localStorage.removeItem('name');

//get from storage

const name = localStorage.getItem('name');
const age = localStorage.getItem('age');

// clear local storage
// localStorage.clear();


console.log(name, age);

document.querySelector('form').addEventListener('submit',
 function(e){
    const task = document.getElementById('task').value;

    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
    // get items stored as string and convert it to an array     
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
// need to use JSON stringify to store an array as a string
    localStorage.setItem('tasks', JSON.stringify(tasks));


    alert('Task saved');

    e.preventDefault();
});

//
const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach((task) => {
    console.log(task);
});