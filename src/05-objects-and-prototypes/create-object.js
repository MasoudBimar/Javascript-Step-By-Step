// 1. Object Literal Syntax, initializer Notation
//  {}
// key, value (colon eperated)

let obj = {
  name: "ali",
  age: 23,
};

let circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("draw", this.location);
  },
};

// 2. Factory Function
// =>>>>>> (()) ===>

function createCircle(rad, xPoint, yPoint, isVis) {
  return {
    radius: rad,
    location: {
      x: xPoint,
      y: yPoint,
    },
    isVisible: isVis,
    draw() {
      console.log("draw");
    },
  };
  //   return circle;
}

function createCircle2(rad, location, isVis) {
  return {
    radius: rad,
    location: location,
    isVisible: isVis,
    draw() {
      console.log("draw");
    },
  };
  //   return circle;
}

let myCircle1 = createCircle(2, 5, 5, true);
let myCircle2 = createCircle2(2, { x: 5, y: 5 }, true);
// console.log(myCircle1);
// console.log(myCircle2);

// 3. Constructor Function == تابع سازنده

function Circle(radius, location, isVisible) {
  this.radius = radius;
  this.location = location;
  this.isVisible = isVisible;
  this.draw = function () {
    console.log("draw", this.radius);
  };
}

const newCircle = new Circle(3, { x: 6, y: 7 }, true);
// console.log(newCircle);
// console.log(typeof newCircle);

// console.log(this);

// 4. Object.create

// let circle3 = Object.create(circle); asdfasdf sassssssss sdssssssssss ssssss
// sssssss sssssssssssssssssssssssssssssss
// console.log(circle3);

// Dynamic nature of object ===> ماهیت پویای شی جاوا اسکریپتی

const person = {
  name: "ali",
  age: 34,
  sayHello: function () {
    console.log("hi");
    console.log("hi");
    console.log("hi");
    console.log("hi");
  },
};

// console.log(person);

// person.age = 35;
// person.sayHello = function () {
//   console.log("hi");
// };
// console.log(person);

delete person.sayHello;

// console.log(person);

const num = 23 + 2; // primitive
// num = 24;

const newPerson = {
  name: "reza",
};
newPerson.name = "ali";
// console.log(newPerson);
// newPerson = {};
// console.log(newPerson);

// let circle4 = new Circle(1, { x: 1, y: 2 }, true);
// console.log(circle4);
// console.log(circle4.constructor);

// let myCircle3 = createCircle2(2, { x: 5, y: 5 }, true);
// console.log(myCircle3);
// console.log(myCircle3.constructor);

let x = {};

// let x = new Object();

let s = "masoud";
let s1 = new String("reza");
let num2 = 5;
let num1 = new Number(5);
let bool2 = true;
let bool = new Boolean(true);
// console.log(s, s1);
// console.log(num2, num1);
// console.log(bool2, bool);

// console.log(this);
// alert("aaa");
// Window.Circle

function Circle2(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const Circle6 = new Function(
  "radius",
  `
this.radius = radius;
this.draw = function () {
    console.log("draw");
  };
`
);

const anotherCircle = new Circle6(8);

console.log(anotherCircle);

let f1 = function () {
  console.log("f1 called");
};

let f2 = function (func) {
  func();
  console.log("f2 called");
};

f2(f1);
