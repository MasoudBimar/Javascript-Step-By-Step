// let item = 5;
// let _case = 6;

// let 
// 1. reDecalre
// 2. declare before use
// 3. Block Scope


// const
// const RATE;

// console.log('hello node');


// Built-In Js
// string
// number
// boolean
// null, undefined


// Object
// Symbol


// Primitive / Value Type
// let a = 6;
// a = 6;


// // Reference type
// let obj = { name: 'test'};
// // console.log(obj);
// obj.lastName = 'test2';
// console.log(obj);


// let a = 'masoud'; // 
// String('masoud').


// Type Method => String, Number, Boolean
// console.log(a.toLocaleUpperCase());
// console.log(typeof Number(5));

// string str = 'masoud';

// Object
// Array
// Function

// let obj = {
//     name: 'masoud', // Writable, Configurable
//     lastName: 'karimi',
//     age: 25,
//     fullName: function(){ // Method
//         return this.name +' '+ this.lastName;
//     }

// }
// let a = 5;
// console.log(obj.fullName());
// console.log(a)
// let propName = 'lastName';
// obj[propName]
// console.log(obj['name'] + obj['lastName']); //namelastName


// let obj = {
//     a : 5,
//     outer: function(){ // this => object
//         let x = {
//             y : 5,
//             inner: function(){
//                 // this.
//             }
//         }
//         return {

//         }
//     }
// }

// Arrays

// let obj =
// {
//     name: 'masoud',
//     lastName: 'karimi',
//     age: 25
// }
// console.log(obj['name']);

// let arr = ['ali', 4, true];
// console.log(typeof arr);


function func() {
    console.log('test');
}

// console.log(typeof func);

// function func2(f){
//     console.log('inside func2');
//     f();
// }

// func2(func);

let func3 = func;
func3();

function fib(n) {
    if (n <= 1) {
        return n
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}


// 8 =>
// return fib(7)+fib(6)
// (return fib(6)+ fib(5)) + (return fib(5)+ fib(4))
//(return (return fib(5)+ fib(4))+ (return fib(4)+ fib(3))) + (return fib(5)+ fib(4))



