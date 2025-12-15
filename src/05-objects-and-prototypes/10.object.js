// let name= 'ali';
// let age= 33;
// let ssn= '1232452345';

// let person = {
//     name: 'ali',
//     age: 33,
//     ssn: '1232452345',

// }

// function greet(name, age, ssn){

// }

// function greet(person){

// }


// 1. Literal syntax
// let circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 3
//     },
//     isVisible: false,
//     draw: function () { // method
//         console.log('draw', this.radius);
//     }
// }

// 2. Factory Function

// function createCircle(rad) {
//     return {
//         radius: rad,
//         draw: function () { // method
//             console.log('draw');
//         }
//     }
// }

// let cr = createCircle(5);
// console.log(cr);

// PascalCase => CreateCircle
// camelCase => createCircle
// kebab-case, snacke-case => create-circle

// 3. Constructor Function

// function CreateCircle(rad) {
//     this.radius = rad;
//     this.draw = function(){}
// }

// let cr2 = new CreateCircle(8);
// console.log(cr2.constructor);
// aaa = 3;
// console.log(this);


// const circle = {
//     raduis : 5
// }
// // console.log(circle);
// circle.color = 'red';
// circle.draw = function(){}

// delete circle.color;
// circle = {}; // c => x0000010 => a:
// console.log(circle);

// let z = new String('abc');
// let str = 'name';
// // str.
// console.log(z);

// let x = {}; // Constructor Function
// let x1 = new Object();
// console.log(x);
// console.log(x1);

// new String();
// new Number();
// new Boolean();
// new Object();
// new Array();
// new Function();
// new Date()

// const Circle1 = new Function('radius',
//     `this.radius = radius;
//     this.draw = function(){
//     console.log('draw')
//     }
//     `
// )

// let cr3 = new Circle1(10);
// console.log(cr3);

// CreateCircle.call({},1)


// let x = { value: 10 };
// let y = x;
// y.value = 11;
// console.log(x, y);// 11, 10

// Primitive => by value
// reference => by reference

// function func(x) {
//     x.val = x.val + 3;
// }

// let myValue = {val: 45};
// func(myValue);
// console.log(myValue);
// let x = { value: 10, name: 'test' };
// for (const element of Object.keys(x)) {
//     console.log(element, x[element]);

// }

// for (const element in x) {
//     console.log(element, x[element]);

// }

// console.log(Object.entries(x))

// for (const element of Object.entries(x)) {
//     console.log(element[0], element[1]);

// }

const circle = {
    radius: 5,
    location: {
        x: 1,
        y: 3
    },
    // draw: function(){
    //     console.log('test')
    // }
    createDate: new Date()
}
// clone
function clone(obj) {
    const copy = {};
    for (const key in obj) {
        copy[key] = obj[key];
    }
    return copy;
}

// let c2 = clone(circle);
// c2.radius = 10;
// c2.location.x = 15;
// c2.draw = function draw(){console.log('another thing')}
// circle.draw();
// c2.draw();
// console.log(circle, c2);

// shallow / deep

// 1. forin
// 2. object.assign
// 3. spread operator

// const another = Object.assign({color: 'blue'},circle);
// another.location.x = 15;
// console.log(circle, another);

// console.log(circle);
// console.log({...circle});

// const another  = {...circle};
// another.location.x = 15;
// console.log(circle, another);
// console.log(circle, another);


// let anotherStr = JSON.stringify(circle);
// let another = JSON.parse(anotherStr);
// console.log( circle.createDate instanceof Date);
// console.log(another.createDate instanceof Date);

// best practice


// let dateManager = {
//     m : new Moment(),
//     add : function(){
//         // ...
//         // this.m.
//     }
// }

// let person = {
//     isHuman: false,
//     name: 'ali',
//     print: function(){
//         console.log(`My name is ${this.name}`);
//     }
// }

// let test = Object.create(person);
// console.log(person);
// test.isHuman = true;
// console.log(test);

// function Person(n, l){
//     this.name = n;
//     this.lastName = l;
// }

// let p1 = new Person('ali', 'karimi');
// console.log(p1);

// let p2 = new Person('reza', 'hasani');
// console.log(p2);

// let obj = {
//     x: 5
// }

// Math.

// console.log(Math.max(1,2,3,4,5,6))

// function max2(){
//     console.log(arguments)
// }

// max2(100,200,300, 455)

const message = 'he is a student';
// console.log(message.split(' ').join('-'));


// function Circle(){
//     this.raduis = 3,
//     this.draw = function(){
//         console.log('mesaage')
//     }
// }

// let c1 = new Circle();
// let d1 = new Date();

// console.log(typeof message);
// console.log(typeof c1);

// console.log(c1 instanceof Circle);
// console.log(d1 instanceof Date);


// console.log(c1);
// console.log(d1);

// const message2 = 'he is a \\student\\ \n im 25 years old';
// console.log(message2);

// let str1 = `
// ${d1}
// this is a test
// hi
// `;

// console.log(str1);

// let persons= []

// for (let index = 0; index < persons.length; index++) {
//     // const element = array[index];
//     str += ',\n'

// }

// function Circle(radius) {
//     this.raduis = radius,
//         this.draw = function () {
//             console.log('mesaage')
//         }
// }

// function Rectangle(a, b) {
//     // ...
//     this.a = a;
//     if (!b) {
//         this.b = 1;
//     } else {
//         this.b = b;
//     }
// }

// let c1 = Rectangle(5,6);
// let c2 = Rectangle(5);

// const now = new Date('May 11 2018 09:00');
// const now = new Date();
// const options = {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
// };
// console.log(now.toLocaleDateString('fa-IR', options));

// function calculateWage(person){
//     console.log("🚀 ~ calculateWage ~ person:", person);
//     // person.hours
// }

// ?? Nullish Coalescing   =====> returns first defined value
// || return first truthy value



let res3, a, b;
a = false; // truthy/falsy
b = 'test';

let res1 = a ?? b;
let res2 = (a !== null && a !== undefined) ? a : b;
let res4 = a || b;

if (a) {
    res3 = a;
} else {
    res3 = b;
}

console.log(a,b, res1, res2, res3);


