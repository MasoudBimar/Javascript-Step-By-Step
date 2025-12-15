// Destructuring
// let x = 2;
// let y = 3;

// [x, y] = [y, x];

// console.log(x,y);

let a = 1;
let b = 2;

({ a, b } = { a: 3, b: 4 });

// const obj = { x: 1, y: 4, z: 7, p: 3, q: 5 };
//  ({ p, q, ...rest }) = obj;
// const { ['key']: x} = obj;
// console.log(p, q);

// Template Literal

// let category = "music";

// let id = 123;

// let url1 = "http://apiserver/" + category + "/" + id;
// let url2 = `http://apiserver/${category}/${id}`;

// const person = {
//     name: 'ali',
//     lastName: 'karimi',
//     age: 25
// }

// const { name:firstName, lastName, birthDate = 1987} = person;

// console.log(firstName, lastName,birthDate);

// let name = 'ThisIsATest';

// let [a1,a2,a3,a4,a5] = name;

// console.log(a1,a2,a3,a4,a5);

// let sum = function (...numbers) {
//     let result = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         result += numbers[i];
//     }
//     return result;
// }

// // console.log(sum(1,2,3));

// let doSth = function (x, y, z) {
//     return x + y + z;
// }

// let arr = [1,2,3];

// doSth(...arr);

// class Empolyee {
//     doWork() {
//         return 'work complete!';
//     }
// }



// let Employee = function () {

// };

// Employee.prototype = {
//     doWork: function() {
//         return 'work complete!';
//     }
// }


// let e = new Employee();
// console.log(e.doWork())
// console.log(e);


class Person { // Parent, والد, Base
    constructor(name, lname) {
        this.name = name;
        this.lname = lname;
        console.log(this);
    }
}


// Child, فرزند, Derived
// class Employee extends Person {

//     constructor(name, lname,ssn) {
//         super(name, lname);
//         this.ssn = ssn;
//     }

//     doWork() {
//         return 'work complete!';
//     }

//     get firstName() {
//         return this.name;
//     }

//     set lastName(value) {
//         this.lname = value;
//     }
// }

// class Student extends Person{

// }

// let e = new Employee('hasan', 'karami', 123456);
// let s = new Student('reza', 'hasani');
// console.log(e.doWork())
// console.log(e.name);

// const date = {a:1};


// Student is a Person
// Employee is a Person

// Benz is a Car
// Engine ... Car === > Car has a engine => 


class Shape {
    constructor(x) {
        this.x = x;
    }
    draw() {
        console.log('drawwwwing', this.x);
    }
}

class Square extends Shape {
    constructor(x, y) {
        super(x);
        this.y = y;
    }
}

class Circle extends Shape { }

class Triangle extends Shape {

    constructor(x, t) {
        super(x);
        this.t = t;
    }

    draw(){ // Override
        console.log('drawwwwing this is my t', this.t);
    }
}

// let t = new Square(2,3);
let t = new Triangle(4,5)
t.draw();


// Person => Employee => Manager => Execute


class Animal{

    move(){

    }
}

class Tiger{} // Run

class Bird{} // Fly

class Fish{} // swim


// let numbers = [1,2,3]; // iterable

// let iterator = numbers.values();
// iterator.next(); // iteraot

// numbers.forEach()

// Array Iterable
// object not iterable

