let x = 10;
let y = { value: 5 };

function myFunc(p1, p2) {
  p1 = 50;
  p2.value = 500;
}

myFunc(x, y);

// console.log(x, y);

// refrence clone
let p = { value: 5 };
// let p2 = p;

// for
// while
// do-while
// for-of
// for-in
// foreach

let circle = {
  radius: 1,
  location: {
    x: 1,
    y: 3,
  },
  isVisible: true,
};

let anotherObj = {};
for (let key in circle) {
  // clone
  anotherObj[key] = circle[key];
  // console.log(key, circle[key]);
}
// anotherObj.location.x = 5555;
// console.log(anotherObj, circle);

const another = Object.assign({}, circle);
// another.location.x = 444;
// console.log(another, circle);

// const another3 = { ...circle };
// another3.location.x = 444;
// console.log(another3, circle);

function cloneObject(obj) {
  let anotherObj = {};
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      anotherObj[key] = cloneObject(obj[key]);
    } else {
      anotherObj[key] = obj[key];
    }
  }
  return anotherObj;
}

const another4 = cloneObject(circle);
another4.location.x = 444;
console.log(another4, circle);

// Shallow Copy => for-in, object.assign, spred opr
// Deep Copy => my recursion function
