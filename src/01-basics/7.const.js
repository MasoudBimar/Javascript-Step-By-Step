let taxRate = 9;

taxRate = 2;

console.log(taxRate);

// const taxRate; // raise error

taxRate = 2;

console.log(taxRate);

// =============================================================================

const PI = 3.141592653589793;
// PI = 3.14;      // This will give an error
// PI = PI + 10;   // This will also give an error

// const PI; // This will give an error ==> Uncaught SyntaxError: Missing initializer in const declaration
// PI = 3.14159265359;


// ================================================================   Constant Arrays
// You can create a constant array:
// You can change the elements of a constant array:
// But you can NOT reassign the array:
const cars = ["Saab", "Volvo", "BMW"];
// cars = ["Toyota", "Volvo", "Audi"];    // ERROR

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

// ================================================================   Constant Objects
// You can change the properties of a constant object:
// You can create a const object:
const car = { type: "Fiat", model: "500", color: "white" };

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";
// But you can NOT reassign the object:

const car2 = { type: "Fiat", model: "500", color: "white" };

// car2 = { type: "Volvo", model: "EX60", color: "red" };    // ERROR
