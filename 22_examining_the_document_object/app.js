let val;

val = document; // Gives us the whole document
val = document.all; // Gives us the HTML collection ~ array/node list
val = document.all[2]; // Allows for accessing certain indices (zero based)
val = document.all.length; // Properties are also accessible
val = document.head; // Getting element by name
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL; // Whole address including the protocol
val = document.characterSet;
val = document.contentType;

val = document.forms; // Gives us an HTML collection
val = document.forms[0]; // Indices accessible
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList; // Collection of classes
val = document.links[0].classList[1]; // Indices accessible

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts; // Can't use array methods on a collection by default
                                //  it gives Uncaught ReferenceError not defined
                                // E.g. forEach is for arrays only    

let scriptsArr = Array.from(scripts); // Converts collection into an array

scriptsArr.forEach(function(script) {
console.log(script.getAttribute('src'));
});

console.log(val);