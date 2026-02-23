# Javascript Closure

What is a closure?
A closure is a function that retains access to its outer scope variables even after the outer function has executed.

```js
function outer() {
  let counter = 0;
  return function inner() {
    counter++;
    return counter;
  };
}

let counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
```
