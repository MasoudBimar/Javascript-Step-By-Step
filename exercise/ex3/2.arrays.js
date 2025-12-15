// Array

// Adding new Elements

const nums = [
    {id: 1 , name: 'a'},
    {id: 2 , name: 'b'},
    {id: 3 , name: 'b'}
];
// nums = [];

// End  

// nums.push(7,8);
// console.log(nums);

// beginning

// nums.unshift(1,2);
// console.log(nums);

// custom(Middle)
// nums.splice(2, 0,'x', 'y');
// console.log(nums);

// find ()

// console.log( nums.indexOf(10));
// console.log( );
const item = nums.find(function(element){
     return element.name === 'b';
    }
);

// console.log(item);


const item2 = nums.find(element => element.name === 'b');

console.log(item2);

// function ==> arrow function
// remove function keyword
// add =>
// remove return


const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true



// Arrow function
array1.every((element) => { /* ... */ } )
array1.every((element, index) => { /* ... */ } )
array1.every((element, index, array) => { /* ... */ } )

// Callback function
array1.every(isBelowThreshold)
array1.every(isBelowThreshold, this)

// Inline callback function
array1.every(function(element) { /* ... */ })
array1.every(function(element, index) { /* ... */ })
array1.every(function(element, index, array){ /* ... */ })
array1.every(function(element, index, array) { /* ... */ }, this)


// Parameters
// callbackFn
// A function to test for each element, taking three arguments:

// [element]
// The current element being processed in the array.

// [index] Optional
// The index of the current element being processed in the array.

// [array] Optional
// The array every was called upon.

// [thisArg] Optional
// A value to use as this when executing callbackFn.

const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]


const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt)


const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];
  
  persons.map(getFullName);
  
  function getFullName(item) {
    return [item.firstname,item.lastname].join(" ");
  }