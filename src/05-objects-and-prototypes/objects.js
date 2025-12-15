// objects are collections of key, value pairs
// شی یک مجموعه از زوج کلید و و مقدار هاست
// Objects group related variables or functionality
// یک شی گروهی از متغیر های به هم مرتبط است

// All Javascript values are objects except primitives

let person = { name: "ali", age: 22 };
let person2 = {
  name: "ali",
  age: 22,
  sayHello() {
    console.log("hi i am ", this.name);
  },
};

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));
let circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
};

// یک برنامه به زبان جاوااسکریپت را می توان به صورت مجموعه ای از اشیائ دید

// function myFunc(){} ===> function
let obj = {
  myFunc() {}, // method
};

let obj2 = {
  myFunc: function () {}, // method
};
