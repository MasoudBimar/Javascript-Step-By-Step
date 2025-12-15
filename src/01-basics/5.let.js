// Cannot be Redeclared //////////////////////

// let x = "John Doe";

// let x = 0;

// SyntaxError: 'x' has already been declared


// var x = "John Doe";

// var x = 0;

// Block Scope //////////////////////

// Before ES6 (2015), JavaScript had only Global Scope and Function Scope.
// ES6 introduced two important new JavaScript keywords: let and const.
// Variables declared inside a { } block cannot be accessed from outside the block:
// Variables defined with let must be Declared before use
console.log(x);
console.log(y);
{
    let x = 2;
    var y = 2;
    console.log(x);
    console.log(y);
}
// x can NOT be used here
console.log(x);
console.log(y);

// Redecalring variable with var  //////////////////////

var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

// Here x is 2