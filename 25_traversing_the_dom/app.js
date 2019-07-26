let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes (gets also linebreaks as text nodes)
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;


// Node types:
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype


// Get children element nodes (returns an HTML collection)
val = list.children;
val = list.children[0];
list.children[1].textContent = 'Hello';

// Get children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children;

// First child (first node regardless whether it is an element of not)
val = list.firstChild;

// Disregards other nodes than elements
val = list.firstElementChild;

// Last child and last element child
val = list.lastChild;
val = list.lastElementChild;

// Getting count
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling

val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

// Get previous sibling

val = listItem.previousSibling;
val = listItem.previousElementSibling;
val = listItem.nextElementSibling.previousElementSibling;

console.log(val);