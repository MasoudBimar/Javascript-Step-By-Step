var obj = {
    a: "hello world",
    b: 42,
    c: true
    };

Object.keys(obj);
Object.values(obj);
Object.entries(obj);

console.log(
    Object.keys(obj),
Object.values(obj),
Object.entries(obj),
);




obj.a; // "hello world"
obj.b; // 42
obj.c; // true
obj["a"]; // "hello world"
obj["b"]; // 42
obj["c"]; // true

// ///////////////////////////////////////////  Access via Dot || Bracket
var obj = {
    a: "hello world",
    b: 42
    };
var b = "a";
obj[b]; // "hello world"
obj["b"]; // 42

// /////////////////////////////////////////// Arrays

var arr = [
    "hello world",
    42,
    true
    ];
arr[0]; // "hello world"
arr[1]; // 42
arr[2]; // true
arr.length; // 3
typeof arr; // "object"

// /////////////////////////////////////////// Functions

function foo() {
    return 42;
    }
foo.bar = "hello world";
typeof foo; // "function"
typeof foo(); // "number"
typeof foo.bar; // "string"

// /////////////////////////////////////////// Built-In Type Methods


var a = "hello world";
var b = 3.14159;
a.length; // 11
a.toUpperCase(); // "HELLO WORLD"
b.toFixed(4); // "3.1416"

// /////////////////////////////////////////// explicit coercion: 

var a = "42"; 
var b = Number( a ); 
a; // "42" 
b; // 42--the number! 

// /////////////////////////////////////////// implicit coercion: 

var a = "42"; 
var b = a * 1; // "42" implicitly coerced to 42 here 
a; // "42" 
b; // 42--the number! 


// //////////////////////////////////////////  Equality


var a = [1,2,3]; 
var b = [1,2,3]; 
var c = "1,2,3"; 
a == c; // true 
b == c; // true 
a == b; // false

// ///////////////////// In-equality


var a = 41; 
var b = "42"; 
var c = "43"; 
a < b; // true 
b < c; // true 

var a = 42; 
var b = "foo"; 
a < b; // false 
a > b; // false 
a == b; // false 


let car = {
    model: 'S-500',
    brand: 'Benz',
    introduce: function(){
        console.log('Im a '+ this.brand + ' ' + this.model +' car.')
    }
}

car.introduce();
