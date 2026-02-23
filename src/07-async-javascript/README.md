# Asynchrounous Operation

JavaScript uses the event loop with callbacks, promises, and async/await for asynchronous operations.

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
