let firstName = 'Masoud';
console.log(typeof firstName);

firstName = 30;

console.log(typeof firstName);

// unlike static languages the type of 
// this variables will be determined 
// at runtime based on the values
// based on the values that we assigned to them

let age = 30;
console.log(typeof age);

age= 30.1;
console.log(typeof age); // "number"

// In Javascript we dont have two kins of numbers
// we dont have floating point numbers

console.log(0.1 + 0.2);

let x = undefined;
console.log(typeof x); // value & type of x is undefined?
// undefined actully is a type and aslo a value
let y = null;
console.log(typeof y); // value is null & type of y is object
