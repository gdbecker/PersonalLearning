let output;

// This is deprecated, but good to know about
output = document.all;
output = document.all[11];
output = document.all.length;

// Examples of document properties
// Getting HTMLCollections back, like an array
output = document.documentElement;

output = document.head;
output = document.body;

output = document.head.children;
output = document.body.children;

output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;

output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
output = document.forms[0].method;
output = document.forms[0].action;

// output = document.forms[0].id = 'new-id';

// output = document.links[0].href;
// output = document.links[0].href = 'https://google.com';
// output = document.links[0].id = 'google-link';
// output = document.links[0].className = 'google-class';
// output = document.links[0].classList;

output = document.images;
output = document.images[0].src;

console.log(output);

// Won't work because HTMLCollections technically are not arrays
// document.forms.forEach((form) => console.log(form));

const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));