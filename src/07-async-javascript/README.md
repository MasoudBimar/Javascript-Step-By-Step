# Asynchrounous Operation

JavaScript uses the event loop with callbacks, promises, and async/await for asynchronous operations.

- [Asynchrounous Operation](#asynchrounous-operation)
  - [Using callback](#using-callback)
  - [Using Promise](#using-promise)
    - [Promise Basics](#promise-basics)
    - [Promise.resolve and Promise.reject](#promiseresolve-and-promisereject)
    - [Promise.all](#promiseall)
    - [Promise.allSettled](#promiseallsettled)
    - [Promise.race \& Promise.any](#promiserace--promiseany)
  - [Using async/await](#using-asyncawait)
  - [What is Promise?](#what-is-promise)
  - [What are `async/wait` functions?](#what-are-asyncwait-functions)
  - [Event Delegation in Javascript](#event-delegation-in-javascript)
  - [Javascript Modules](#javascript-modules)

## Using callback

```js
function fetxhData(callBack) {
  setTimeout(() => {
    callBack("fetching data");
  }, 1000);
}

fetchData((data) => {
  console.log(data);
});
```

## Using Promise

A promise is simply an object that represents an async task. It can either resolve (success) or reject (failure) eventually.

### Promise Basics

A promise has three states: `pending`, `fulfilled`, and `rejected`.
You can use the `then` method to handle the resolved value and the `catch` method to handle any errors.

**How to create a promise?**

Simple way to create a promise (without reject):

```js
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      callBack("fetching data");
    }, 1000);
  });
}

fetchDate().then((data) => {
  console.log(data);
});
```

Another way to create a promise (with reject):

```js
const myPromise = new Promise((resolve, reject) => {
  let success = true; // Simulating an async task

  if (success) {
    resolve("Task completed successfully!"); // success case
  } else {
    reject("Task failed."); // failure case
  }
});

myPromise
  .then((result) => {
    console.log(result); // Logs: Task completed successfully!
  })
  .catch((error) => {
    console.error(error); // Logs: Task failed.
  });
```

### Promise.resolve and Promise.reject

'resolve': This instantly creates a promise that is already resolved with a given value.
It can be used when you don’t want to write the full new Promise() syntax.

```js
Promise.resolve("Resolved instantly!").then((result) => {
  console.log(result); // Logs: Resolve successfully!
});
```

'reject': This instantly creates a promise that is already rejected with a given value.
It can be used when you don’t want to write the full new Promise() syntax.

> [!TIPS]
> This 'reject' method is helpful when you want to simulate or handle errors quickly.

```js
Promise.reject("Rejected instantly!").catch((error) => {
  console.error(error); // Logs: Rejected instantly!
});
```

### Promise.all

`Promise.all` is a method that takes an array of promises and returns a single promise that resolves when all of the promises in the array have resolved, or rejects if any of the promises in the array reject.

> [!TIPS]
> `Promise.all` runs multiple promises together and only succeeds if all of them succeed. If even one fails, the whole thing will fails.

```js
const promise1 = Promise.resolve("First promise resolved");
const promise2 = Promise.resolve("Second promise resolved");

Promise.all([promise1, promise2])
  .then((results) => {
    console.log(results); // Logs: ["First promise resolved", "Second promise resolved"]
  })
  .catch((error) => {
    console.error(error);
  });

// Output: ["First promise resolved", "Second promise resolved"]
```

### Promise.allSettled

`Promise.allSettled` is a method that takes an array of promises and returns a single promise that resolves when all of the promises in the array have settled (either resolved or rejected). It provides an array of objects describing the outcome of each promise.

> [!TIPS]
> Unlike all(), this one doesn’t fail if something rejects. It gives me the final status of every promise, whether it’s resolved or rejected.

```js
const promise1 = Promise.resolve("First promise resolved"); // this promise will resolve successfully
const promise2 = Promise.reject("Second promise rejected"); // this promise will reject with an error

Promise.allSettled([promise1, promise2])
  .then((results) => {
    console.log(results); // Logs: [
    //   { status: "fulfilled", value: "First promise resolved" },
    //   { status: "rejected", reason: "Second promise rejected" }
    // ]
  })
  .catch((error) => {
    console.error(error);
  });

// Output: [
//   { status: "fulfilled", value: "First promise resolved" },
//   { status: "rejected", reason: "Second promise rejected" }
// ]
```

Promise.allSettled Pros & Cons:

- The main "catch" with Promise.allSettled() is that it never rejects.
- You Must Manually Filter Results
- Lack of "Fail-Fast" Behavior
- Masking Errors

comarison table Promise all vs allSettled:

| Feature      | Promise.all()                   | Promise.allSettled()            |
| ------------ | ------------------------------- | ------------------------------- |
| Rejection    | Rejects immediately (fail-fast) | Never rejects                   |
| Return Value | Array of values                 | Array of {status, value/reason} |
| Best For     | Dependent tasks                 | Independent, non-critical tasks |
| Main Catch   | Fails on first error            | Requires manual filtering       |

### Promise.race & Promise.any

`Promise.race` returns a promise that resolves or rejects as soon as one of the promises in the array resolves or rejects.

```js
const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, "First"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 500, "Second"));
const promise3 = new Promise((resolve) => setTimeout(resolve, 1500, "Third"));

Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log(result); // Logs: "Second" (the fastest promise)
  })
  .catch((error) => {
    console.error(error);
  });
```

`Promise.any` returns a promise that resolves as soon as any of the promises in the array resolves (successfully), or rejects if all of the promises reject.

> [!TIPS]
> `Promise.any` is like a "first successful response". It ignores rejected promises and resolves as soon as it gets a successful one.

```js
const promise1 = Promise.reject("First promise rejected");
const promise2 = Promise.resolve("Second promise resolved");
const promise3 = Promise.reject("Third promise rejected");

Promise.any([promise1, promise2, promise3])
  .then((result) => {
    console.log(result); // Logs: "Second promise resolved"
  })
  .catch((error) => {
    console.error(error);
  });
```

## Using async/await

```js
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      callBack("fetching data");
    }, 1000);
  });
}

let data = await fetchData();
console.log(data);
```

## What is Promise?

promise represents the eventual completion or failure of an asynchronous operation.

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("success"), 1000);
});

promise.then(console.log);
```

## What are `async/wait` functions?

`async/await` allows writing asynchronous code that looks synchronous.

```js
const data = await fetch("https://www.api.com");
return data.json();
```

## Event Delegation in Javascript

Event delegation allows you to handle events for multiple child elements at the parent level.

```js
document.getElementById("parent").addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    console.log("Button Clicked");
  }
});
```

## Javascript Modules

Modules allow you to organize code into reusable files using import and export.

```js
// module example: script.js
export const greet = () => "Hello, from greet module";
```

using module:

```js
import { greet } from "./script.js";

greet();
```
