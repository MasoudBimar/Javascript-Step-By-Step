# Javascript Event Loop

## What is the event loop?

The event loop processes tasks from the queue and stack for asynchronous operations.

The event loop continuously checks the call stack and the task queue, executing tasks from the queue when the stack is empty.

```js
console.log("before execution");
setTimeout(() => console.log("timeout "), 0);
console.log("after execution");
```

## What is a WeakMap and how is it different from a Map?

- `Map`: A collection of key-value pairs where keys can be of any type. It holds strong references to its keys, preventing garbage collection.
- `WeakMap`: Similar to Map but holds weak references to its keys, allowing garbage collection when there are no other references to the key.

```js
const map = new Map();
map.set({}, "value");
console.log(map.size); // 1
const weakMap = new WeakMap();
weakMap.set({}, "value");
console.log(weakMap.has({})); // false
```

## What is a Set in JavaScript?

A Set is a collection of unique values.

```js
const set = new Set();
set.add(1);
set.add(1);
set.add(2);
console.log(set.size); // 2
```

## What is Object.create() used for?

`Object.create()` is used to create a new object with a specified prototype.

```js
const parent = { name: "Parent" };
const child = Object.create(parent);
console.log(child.name); // Parent
```

## How does JavaScript’s garbage collection work?

JavaScript uses a mark-and-sweep algorithm to identify and remove unused objects.

- Mark phase: The garbage collector marks all reachable objects.
- Sweep phase: The garbage collector removes all unmarked objects from memory.

```js
function createObject() {
  const obj = { name: "Object" };
  return obj;
}
const myObject = createObject();
// myObject is reachable and will not be garbage collected
// After `obj` is returned, it becomes unreachable and can be garbage collected
```

Second senario:

```js
let obj1 = { name: "Object1" };
let obj2 = obj1; // obj2 references the same object as obj1
obj1 = null; // obj1 no longer references the object, but obj2 still does
// The object is still reachable through obj2 and will not be garbage collected
obj2 = null; // Now the object is unreachable and can be garbage collected
```

## What are `decorators` in JavaScript?

Decorators are a proposed feature in JavaScript that allows you to modify the behavior of classes and class members (methods, properties) using a special syntax.

Simple example of a class decorator:

```js
function decorator(target) {
  target.decorated = true;
}

@decorator
class Example {}

console.log(Example.decorated); // true
```

Simple example of a method decorator:

```js
function log(target, name, descriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args) {
    console.log(`Calling ${name} with arguments: ${args}`);
    return originalMethod.apply(this, args);
  };
  return descriptor;
}

class Example {
  @log
  method(arg) {
    console.log(`Method called with argument: ${arg}`);
  }
}
const example = new Example();
example.method("test");
```

## What is the difference between `prototype` and `__proto__`?

- `prototype`: A property of a constructor function that is used to build the prototype chain for instances created by that constructor.
- `__proto__`: An internal property of an object that points to the prototype of the object.

```js
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};
const person = new Person("Masoud");
console.log(person.__proto__ === Person.prototype); // true
person.greet(); // Hello, my name is Masoud
```
