// Compare
// Equality
// Inequality

// boolean (true, false)
// 

// console.log(1 === '1'); // strict equals
// console.log(1 == '1'); // loose equlas
// Explicit / Implicit


// console.log(1 === +('1')); // Explicit
// console.log(1 == Number('1')); // loose equlas
// let a = null;
// let b = '';
// let c = true;
// let f = function(){
//     console.log('hi');
// }
// if(f){
//     console.log('statement is truthy');
// } else {
//     console.log('statement is falsy');
// }

// non-boolean value coerced to boolean
// Truthy & Falsy

// falsy
// string  "" empty string
// number  0, -0, NaN
// null , undefined
// boolean false

// "hello"
// 42
// true
// arrays ==> [], [1,2,3]
// object ==> {}, { a: 42}


// Equality

// == 
// ===

// non-equality
// !=
// !==

let num1 = 1;
let str1 = '1';
if (num1 != str1) {
    console.log('not equals !=');
}

if (num1 !== str1) {
    console.log('not equals !==');
}

// a(23) ====> (500)  ==> {val: 42}
// b(24) ====> (500)  ==
// c(25) ====> 1
// d(26) ====> 2

// Equality
let a1 = { val: 42 };
let b2 = a;
let c3 = 1;
let d4 = 2;

// object   equality by refrence
if (a1 == b2) {
    console.log('equals');
} else {
    console.log('not equals');
}

// let a = [1,2,3];
// let b = [1,2,3];
// let c = "1,2,3";
// console.log(a.toString());
// console.log(b == c);
// console.log(a == b);

// console.log(null == undefined); // strict
// console.log(null == null);
// console.log(undefined == undefined);
// number, string
// x==y ==> 
// x == !ToNumber(y)

// Inequality

// console.log(1 < 2);

// console.log("ab" < "ac"); // dict

// let a = 41;
// let b = "foo"
// let c = "43";

// console.log(a < b);
// console.log(b < c);

// console.log(Number('foo'));


// Operator
// Arithmetic
// Assignment
// Comparison
// Logical
// Bitwise
let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x ** y);
console.log(x / y);
console.log(x % y);

console.log(x++);
console.log(x--);
console.log(++x);
console.log(--x);

// let a = 3;
// let b = 10;
// a = b++;
// a = ++b;

// Assignment
// let a = 1;
// let b = 2;
// a = b;
// a += b;// a = a+b;
// a -= b;
// a *= b;
// a /= b; // a = a/b
// a %=b;

// Comparison
// ==
// ===
// !=
// !==

// > 
// <
// >=
// <=

// Ternary Operators
// let a;
// let b;
// let c;
// if (condition) {
//     a = b;
// } else {
//     a = c;
// }

// a = (condition) ? b : c;

// let age = 15;
// let voteable = age < 18 ? "Too Young" : "Old Enough";
// console.log(voteable);

// &&
// ||
// !
// let highIncome = false;
// let goodCredit = true;

// let eligibleForLoan = highIncome || goodCredit;
// let aplicationRejected = !eligibleForLoan;

// console.log('is rejected: ', aplicationRejected);

// if (false || 'mystring') {
//     console.log('hi');
// }

// if(){

// }

// let a = "123";
// console.log(a);

// &
// |
// ^
// ~

//  00 XOR => 0
//  01 XOR => 1
//  10 XOR => 1
//  11 XOR => 0
// ~0 = 1
// ~1 = 0

// console.log(1 | 3);  => 
// 001
// 011
// 011 

let a = 'firstVar';
let b = 'secondVar';
//  a <=> b
console.log(a);
console.log(b);
let c = a;
a = b;
b = c;
console.log(a);
console.log(b);

