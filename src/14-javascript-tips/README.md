# Javscript Tips

## Swapping variable values

```js
let a = 5;
let b = 10;
let tmp;

tmp = a;
a = b;
b = tmp;

console.log(a); // Output: 10
console.log(b); // Output: 5
```

Values of two variables can be swapped without using a temporary variable by utilizing destructuring assignment.

```js
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(a); // Output: 10
console.log(b); // Output: 5
```

## Unary plus operator

To convert a string to a number:

- Using `Number` (for strict conversion), `const value = Number("42"); // 42`
- Using Unary `+` (shortest syntax), `const value = +"42"; // 42`
- Using `parseInt()` (for integers)
- Using parseFloat() (for decimals)

```js
const value = Number("42"); // 42
const value = +"42"; // 42
const value = parseInt("42", 10); // 42
parseInt("08", 10); // Always pass the radix (10) to avoid weirdness:
const value = parseFloat("3.14"); // 3.14
```

## Removing duplicates from an array

Duplicate elements can be removed from an array by using the Set and the spread operator

```js
let arr = [1, 2, 3, 4, 2, 3, 1];
let unique = [...new Set(arr)];
// Output: [1, 2, 3, 4]
```

> [!TIP]
> The spread operator (...) works on Set because a Set is iterable in JavaScript.

Merge two arrays with removing duplicates using sets:

```js
const a = new Set([1, 2]);
const b = new Set([2, 3]);

const merged = new Set([...a, ...b]);
console.log(merged); // Set {1, 2, 3}
```

## Copying an object in JavaScript

### Shallow copy

Using `spread (...)`

```js
const original = { name: "Masoud", age: 30 };
const copy = { ...original };

copy.age = 31;

console.log(original.age); // 30
console.log(copy.age); // 31
```

Using `Object.assign()`

```js
const original = { name: "Masoud", age: 30 };
const copy = Object.assign({}, original);
```

> [!CAUTION]
> Important caveat: nested objects are still shared.

```js
const original = {
  user: { name: "Masoud" },
};

const copy = { ...original };

copy.user.name = "Ali";

console.log(original.user.name); // "Ali"  <-- changed!
```

### Deep copy (data must be independent)

Using `structuredClone()`

```js
const original = {
  user: { name: "Masoud" },
  tags: ["js", "ts"],
};

const copy = structuredClone(original);

copy.user.name = "Ali";
copy.tags.push("angular");

console.log(original.user.name); // "Masoud"
console.log(original.tags); // ["js", "ts"]
```

Using JSON trick (naive approach)

```js
JSON.parse(JSON.stringify(obj));
```

The JSON trick can break or lose data like:

- Date
- Map
- Set
- undefined
- functions
- circular references (it throws)

### What is the difference between deep copy and shallow copy?

- `Shallow Copy`: Creates a new object but only copies the references of nested objects. Changes to nested objects affect both the original and the copy.
- `Deep Copy`: Creates a new object and recursively copies all nested objects, ensuring that changes to the copy do not affect the original.

### How to prevent function for being called multiple time?

multiple function calls can be prevented using debounce function.

```js
function(func, delay){
    let timeout;

    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args),dalay);
    }
}
```

better version of debounce function:

```js
function debounce(func, wait) {
  var timeout;
  return (...args) => {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

const callOnce = debounce((k) => console.log("called...", k), 1000);
callOnce(1);
callOnce(2);
callOnce(3);
callOnce(4);
callOnce(5);
callOnce(6);
callOnce(7);
```

### What is the difference between apply() and call() methods?

- `call()`: Invokes a function with a specific this value and arguments passed individually.
- `apply()`: Similar to call(), but arguments are passed as an array

```js
function greet(greeting, message) {
  console.log(`${greeting} ${this.name}!,  ${message}`);
}

const person = { name: "Masoud" };

console.log(greet.call(person, "hi", "how are you")); // hi Masoud!,  how are you
console.log(greet.apply(person, ["hi", "how are you"])); // hi Masoud!,  how are you
```

### What is bind() method used for?

The bind() method creates a new function with a specific this value and optional arguments.

> [!TIP]
> `bind` is useful when you want to create a new function with a specific this context and potentially pre-fill some arguments. It's often used in event handlers or callbacks where you need to preserve the context of an object.

```js
function greet(greeting, message) {
  console.log(`${greeting} ${this.name}!,  ${message}`);
}

const person = { name: "Masoud" };

const greetingFunc = greet.bind(person);
console.log(greetingFunc("hi", "how are you")); // hi Masoud!,  how are you
```

### Waht are "event bubbling" and "event capturing"?

- Event Bubbling: Events propagate from the target element to the parent elements.
- Event Capturing: Events propagate from the parent elements to the target element.

```js
// Capturing
document.getElementById("child").addEventListener(
  "click",
  () => {
    console.log("Capturing");
  },
  true,
);

// Bubbling
document.getElementById("parent").addEventListener(
  "click",
  () => {
    console.log("Bubbling");
  },
  true,
);
```

### What is Generator Functions?

Generators are special functions that can pause execution and resume later.

```js
function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
}
const generator = generatorFunction();
console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: undefined, done: true }
```

### What is the new keyword used for?

The `new` keyword is used to create an instance of a constructor function or a class. It creates a new object, sets the prototype, and binds `this` to the new object.

```jsfunction Person(name) {
  this.name = name;
}
const person = new Person("Masoud");
console.log(person.name); // Masoud
```

### How do JavaScript’s setTimeout and setInterval work?

`setTimeout` and `setInterval` are built-in JavaScript functions that allow you to schedule code execution in the future.

- `setTimeout`: Executes a function once after a specified delay (in milliseconds).
- `setInterval`: Repeatedly executes a function at specified intervals (in milliseconds).

Example:

```js
setTimeout(() => {
  console.log("This runs once after 1 second");
}, 1000);

setInterval(() => {
  console.log("This runs every 2 seconds");
}, 2000);
```

### First Success Within Timeout Challenge

```js
const never = new Promise(() => {}); // همیشه pending

const driver1 = new Promise((resolve, reject) => setTimeout(() => reject({ driver: "ali", car: "benz" }), 1000)).catch(() => never);

const driver2 = new Promise((resolve) => setTimeout(() => resolve({ driver: "reza", car: "audi" }), 2000)).catch(() => never);

const driver3 = new Promise((resolve) => setTimeout(() => resolve({ driver: "hasan", car: "bmw" }), 3000)).catch(() => never);

const timeout = new Promise((_, reject) => {
  setTimeout(() => reject(new Error("try again")), 5000);
});

Promise.race([driver1, driver2, driver3, timeout])
  .then((result) => {
    if (result) {
      console.log(`This trip allocated by ${result.driver}`);
    } else {
      throw new Error("noone accepts the request");
    }
  })
  .catch((error) => console.error(error.message));
```

better implementation of the above code:

```js
const never = new Promise(() => {}); // pending forever

const acceptOnly = (p) => p.then((res) => (res.status === "accepted" ? res : never)).catch(() => never); // ignore errors too

const driver1 = new Promise((resolve) => setTimeout(() => resolve({ status: "rejected", driver: "ali", car: "benz" }), 1000));

const driver2 = new Promise((resolve) => setTimeout(() => resolve({ status: "rejected", driver: "reza", car: "audi" }), 2000));

const driver3 = new Promise((resolve) => setTimeout(() => resolve({ status: "accepted", driver: "hasan", car: "bmw" }), 3000));

const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error("try again")), 5000));

Promise.race([acceptOnly(driver1), acceptOnly(driver2), acceptOnly(driver3), timeout])
  .then((winner) => {
    console.log(`This trip allocated by ${winner.driver}`);
  })
  .catch((e) => console.error(e.message));
```
