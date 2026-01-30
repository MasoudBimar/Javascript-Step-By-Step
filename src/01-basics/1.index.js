console.log('>>>>>>>>>', 'this is a js code')
alert('this is a js code')
var age = prompt("please insert yor age");
console.log('your age is : ', age);
var a = 3;
console.log(a);
a += 5;
console.log(a);

console.log(a--);
console.log(--a);

var ab = "3"; // {number, string, boolean}
var bc = 3;
var cd = true;
ab = 3;

console.log(ab, bc, cd);

const TAX_RATE_VALUE = 9;
// TAX_RATE_VALUE = 6; // Raise Error
console.log(TAX_RATE_VALUE);

console.log(ab == bc);

console.log(ab + bc);
console.log(bc + ab);
var d = Number(ab) + bc;
var e = bc + ab;
console.log(d);
console.log(typeof d);
console.log(typeof e);

cd = ab * bc;
console.log(ab == bc && ab === bc);  // {true, false}
console.log(ab !== bc); // {true, false}

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// this function calculate age based on birthdate
function calculate() {
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);

}

calculate();


alert('hello world');

console.log('this is a message');

var age2 = prompt("please insert your age");
console.log("your age is: ", age2);


var aa = 5; // Declaration + Initialization
var bb = "masoud";
var cc = false;

console.log(aa, bb, cc);

let x = 5;
let y = "ali";

console.log(x + y);

const cst = 56;
// cst = 45; // Assignment to constant variable.
console.log(cst);

const TAX_RATE = 9;
// Tax_Rate = 15;
console.log(TAX_RATE)

let myNumber = 5;
let yourNumber = '5';
console.log(myNumber == yourNumber); // loose equal
console.log(myNumber === yourNumber); // strict equal


let secondNumber = 5;
let thirdNumber = '5';
// string, number, boolean
console.log(secondNumber + (+thirdNumber));// cast
console.log(secondNumber + Number(thirdNumber));// cast
console.log(thirdNumber + secondNumber);

console.log(typeof secondNumber);
console.log(typeof thirdNumber);

thirdNumber = 13;

console.log(typeof thirdNumber);



// program  = variable + function

// 1. Statement + Expression
// 2. Executing a program
// 3. Output
// 4. Input
// 5. Operators
// 6. Value & Types

// result = b * 2; // Statement
// result, b =>>>> variable
// 2 ===>>> literal value

// 2 => value expression
// b => variable expression
// b*2 => arithmetic expr
// result = b*2; assignment expr

// Assignment =
// Math (+,-,*,/)
// a = a+3; => a+=3; (+=, -=,*=,/=)
// Inc,dec => a++; a--;

// name = "ali";
// lastName = "karimi";
// age = 34;
// object
// p = {
//   name: "ali", // object property
//   lastName: "karimi",
//   age: 34,
// };

// dot notation
// console.log(p.age); // dot =>>> object property access
// console.log(p["age"]); // beacket notation

// Equality

// ==, ===, !=, !==

// Comparison
// <
// >
// <=
// >=

// Logical
// &&
// ||

// Values
// "ali"  => string literal
// 123 ==> number literal
// true/false ==> boolean literal

// Type => {string, number, boolean}  built in types

// array ==> [1,2,3] ['ali', 'reza']
// object ==> { name: 'ali', age: 25}
// function ==> function(){ ...}

// let/ var
// let a = "ali";
// console.log(a);

// let b = "42";
// let c = 56;
// let d = false;
// console.log(b + c); // Implicit Coercion
// console.log(c + b);
// console.log(c + d);

// convert
// type-string => type-number
// Implicit => ضمنی
// Explicit => صریح Number(b)

/* let n = 99.9;
let m = "99.9"; */
// console.log(n === m); // type
// console.log(n == m); // value without type

// comment
// let a = 45; // initialize مقدار دهی اولیه
// a = "ali";

// variable

// let, var, const
// const a = 3;
// a = "4";

// series of statement ===> block

let acount_balance = 300;
let amount = 99;
{
    amount = amount * 2;
    console.log(amount, acount_balance);
}
let empty = "";
let unsetValue = undefined;
// ==> true, false
// Conditional شرطی
if (unsetValue) {
    console.log("I want to buy this phone", empty);
}
// console.log(amount > acount_balance);

// ارزیابی
// truthy/falsy

// number 0,1,2,3,4,5,6  ======> 0
// string "" ====> falsy , "ali", 'a', "I want to buy this phone"
// boolean true/false ====> false
// undefined ==> falsy
// null ==> falsy

// let f = null;
// console.log(f);

// loops
// while
// let num = 1;
// while (num < 5) {
//   console.log("inside while loop", num);
//   num++;
// }
// do-while
// let num2 = 1;
// do {
//   console.log("inside do-while loop", num2);
//   num2++;
// } while (num2 < 5);

// for (let i = 0; i <= 10; i++) {
//   console.log("inside for loop", i);
// }

let message2 = "some messages from somewhere";
// Function
function print(message) {
    let x = 3;
    // let x = 4;
    console.log(message, "---", message2);
    if (x === 3) {
        // let x = 55;
        console.log("inside if i can see message2", x);
    }
}
// console.log(x);
let msg = "hi my name is ali";
print(msg);
// print(msg);
// print(msg);
// print(msg);

// scope => global => everywhere
// scope let variable => block

