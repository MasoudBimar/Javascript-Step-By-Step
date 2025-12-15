let colors = [];
let persons = ['i', 'you', 'he'];

console.log(persons);
// JavaScript arrays are zero-based indexed. 
// In other words, the first element of an array starts at index 0, 
// the second element starts at index 1, and so on.

persons[3]= 'she';
console.log(persons);
console.log( typeof persons );
console.log( typeof persons[0] );
console.log( persons.join('-') );

// Technically an array is an object
console.log( persons.length ); // return the number of items

