// document.getElementsByClassName

const items = document.getElementsByClassName('collection-item');
console.log(items);

// We can treat the collection like an array
console.log(items[3]);
items[0].style.color = 'red';
items[3].textContent = 'Hello';

// Extra: Log multiple elements in a collection treated as array
for(let item = 0; item < items.length; item++) {
    console.log(items[item]);
};

// Targeting elements in a ul using querySelector
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);

//document.getElementsByTagName
// Let used to allow redefining the value
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'Hello';

// Convert an HTML collection into an array
lis = Array.from(lis);
lis.forEach((e, index) => {
    console.log(e.className);
// index parameter used in a template string
    e.textContent = `${index}: Hello`;
});

//reverse is an array method
lis.reverse();

console.log(lis);

// document.querySelectorAll returns a NodeList (does not require changing to an array)

// Accessing any css selector just like in jQuery
const itemsAll = document.querySelectorAll('ul.collection li.collection-item');
itemsAll.forEach((e, index) => {
    console.log(e.className);
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');


// Two methods for looping through elements
liOdd.forEach((item, index) => {
    item.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++){
    liEven[i].style.background = '#f2f2f2';
}

console.log(itemsAll);

