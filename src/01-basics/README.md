# JavaScript Basics - Notes, Best Practices, and Cautions

This README summarizes the sample files in this folder and adds best practices, notes, and cautions.

## Section 1 - Variables, I/O, Functions, and Comparisons

Topics: `var`, `let`, `const`, console output, `prompt`, `alert`, assignments, simple functions, comparisons, `typeof`.

Sample:

```js
console.log("this is a js code");
alert("this is a js code");
var age = prompt("please insert your age");
console.log("your age is:", age);

var a = 3;
a += 5;
let total = 0;
total = total + a;

const TAX_RATE = 9;

function calculate(birthdate) {
  return typeof birthdate;
}

let b = "3";
console.log(a == b);
console.log(a === b);
console.log(calculate("1990-01-01"));
```

Best practices:

- Prefer `let`/`const` over `var`.
- Keep console usage for debugging; remove or gate it in production.
- Use `===` instead of `==` to avoid implicit coercion.

Note: `prompt` and `alert` only work in browsers, not in Node.js.

Caution: Reassigning a `const` variable throws an error.

## Section 2 - Naming Rules, Expressions, Operators, Objects

Topics: naming rules, notation styles, expressions, operators, object creation, property access.

Sample:

```js
// Naming styles
// camelCase, PascalCase, kebab-case

let obj = {
  name: "masoud",
  lastName: "karimi",
  age: 35,
};

// Dot notation
console.log(obj.lastName);
// Bracket notation
console.log(obj["age"]);

let count = 1; // variable expression
let total = count * 2; // literal + operator (expression)
count++; // ++
count--; // --
count += 2; // +=
count -= 1; // -=
count *= 3; // *=
```

Best practices:

- Use meaningful names and consistent notation.
- Prefer dot notation, use bracket notation for dynamic keys.
- Declare each variable on its own line for readability.

Notes:

- Variable names cannot start with numbers, contain spaces or hyphens, or be reserved keywords.
- JavaScript is case-sensitive.

Caution: `kebab-case` is fine for filenames, not for variable names.

## Section 3 - Scope and the `var` Problem

Topic: `var` scope collision in nested loops.

Sample:

```js
function printMatrix1(matrix) {
  for (var i = 0; i < matrix.length; i++) {
    var line = matrix[i];
    for (var i = 0; i < line.length; i++) {
      var element = line[i];
      console.log(element);
    }
  }
}
```

Best practices:

- Use `let` in loops to avoid accidental reuse of the same variable.

Note: With `var`, the same name inside one function refers to the same variable.

Caution: Reusing `var i` in nested loops causes unexpected behavior.

## Section 4 - `let` Specification (ES6)

Topics: redeclaration, block scope, TDZ, ES6 rules.

Sample:

```js
{
  let x = 2;
  var y = 2;
}
// x is not accessible here

// let x = 1;
// let x = 2; // SyntaxError: cannot redeclare in the same scope
```

Best practices:

- Use `let` for variables that change.
- Keep variables scoped to the smallest block possible.

Notes:

- Before ES6, JavaScript had only global scope and function scope.
- `let` and `const` are block-scoped.

Caution: `let` cannot be redeclared in the same scope.

## Section 5 - Accessing Variables Before Declaration

Topic: differences between `var`, `let`, and `const` when used before declaration.

Sample:

```js
console.log(a); // undefined (var is hoisted)
var a = 1;

// console.log(b); // ReferenceError (TDZ)
let b = 2;

// console.log(c); // ReferenceError (TDZ)
const c = 3;
```

Best practices:

- Declare variables at the top of their scope.
- Prefer `let`/`const` to make TDZ errors explicit.

Note: `var` is hoisted and initialized to `undefined`.

Caution: Accessing `let`/`const` before declaration throws a runtime error.

## Section 6 - `const`, Arrays, and Objects

Topics: const arrays, const objects, mutation vs reassignment.

Sample:

```js
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Toyota";
cars.push("Audi");

const car = { type: "Fiat", model: "500", color: "white" };
car.color = "red";
car.owner = "Johnson";

// car = { type: "Volvo" }; // ERROR
```

Best practices:

- Use `const` by default for bindings that should not be reassigned.
- Mutate objects/arrays intentionally and document it.

Note: `const` prevents reassignment, not mutation.

Caution: Reassigning a `const` array or object throws an error.

## Section 7 - Primitive Types, Objects, and Symbols

Topics: primitive/value types and reference types.

Sample:

```js
// Primitives
let s = "masoud";
let n = 42;
let b = true;
let u = undefined;
let k = null;

// Objects
let obj = { name: "masoud" };
obj.lastName = "karimi";

// Symbol
let id = Symbol("id");
```

Best practices:

- Use primitives for simple values.
- Use objects for structured data.

Note: Symbols create unique identifiers.

Caution: Objects are reference types; copies share the same reference unless cloned.

## Section 8 - Equality, Casting, Truthy/Falsy

Topics: `==` vs `===`, implicit casting, comparing different types, truthy/falsy.

Sample:

```js
let a = "5";
let b = 5;
console.log(a == b); // true (coercion)
console.log(a === b); // false (strict)
console.log(Number(a) === b); // explicit cast

if ("") {
  console.log("truthy");
} else {
  console.log("falsy");
}
```

Best practices:

- Use `===` and `!==` for predictable comparisons.
- Convert types explicitly when needed (`Number()`, `String()`).

Note: Non-boolean values are coerced to boolean in conditions.

Caution: `==` can lead to surprising results with type coercion.

Falsy values by type:

- Boolean: `false`
- Number: `0`, `-0`, `NaN`
- BigInt: `0n`
- String: `""` (empty string)
- Null/Undefined: `null`, `undefined`

## Section 9 - Operators Overview

Topics: arithmetic, assignment, comparison, logical, ternary, bitwise, nullish.

Sample:

```js
let x = 10;
let y = 3;
let sum = x + y; // arithmetic
x += y; // assignment
let cmp = x >= y; // comparison
let ok = x > 0 && y > 0; // logical AND
let either = x > 0 || y > 0; // logical OR
let notOk = !ok; // logical NOT
let max = x > y ? x : y; // ternary
let mask = x & y; // bitwise AND
let orMask = x | y; // bitwise OR
let xorMask = x ^ y; // bitwise XOR
let flipped = ~x; // bitwise NOT
let fallback = null ?? "default"; // nullish coalescing
```

Best practices:

- Use parentheses for clarity in complex expressions.
- Prefer `??` when you want to allow `0` or empty string.

Note: Bitwise operators work on 32-bit integers.

Caution: Operator precedence can change meaning; add parentheses to be explicit.

## Section 10 - Control Flow and Loops

Topics: if/else, switch, for, for-in, for-of, while, do-while, break/continue.

Sample:

```js
if (age >= 18) {
  console.log("adult");
} else {
  console.log("young");
}

switch (role) {
  case "guest":
    break;
  default:
    break;
}

for (let i = 0; i < 3; i++) {
  if (i === 1) continue;
  console.log(i);
}

let arr = [1, 2];
for (let index in arr) {
  console.log(index);
}
for (let value of arr) {
  console.log(value);
}

let i = 0;
while (i < 2) {
  i++;
}

do {
  i--;
} while (i > 0);
```

Best practices:

- Use `for-of` for values, `for-in` for object keys.
- Avoid infinite loops unless you explicitly break.

Note: `continue` skips the current iteration; `break` exits the loop.

Caution: `for-in` on arrays iterates indices as strings, not values.

## Section 11 - Naming Conventions and Style Guidelines

Topics: PascalCase, camelCase, kebab-case, underscores, formatting rules.

Sample:

```js
// PascalCase: MyVariable (class, object type)
// camelCase: myVariable (variables, functions, properties)
// kebab-case: my-variable (filenames)
// snake_case: my_variables

const MY_VARIABLE = 123;
```

Best practices:

- Keep indentation consistent.
- Add spaces around operators.
- Keep line length around 80 characters when possible.

Note: Style guidelines improve readability and collaboration.

Caution: Mixing naming styles in one project makes code harder to scan.
