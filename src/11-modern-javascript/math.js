// Math
// let num = 123.823456789;
// let roundedNum = Math.round(num);
// let num2 = Math.ceil(num);
// let num3 = Math.floor(num);
// console.log(roundedNum);
// console.log(num2);
// console.log(num3);

// console.log(Math.abs(-4.7));
// let numArray = [0, 150, 200, 20, -8, -50];
// console.log(numArray);
// console.log(...numArray);
// console.log(Math.max(...numArray), Math.min(...numArray));
// Math.max(0, 150, 200, 20, -8, -50);

// console.log(Math.round(Math.random() * 500));

// Sting
// let s = "      My name my is masoud    "; // my, MY, My, mY
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.length);
// console.log(s[1]);
// console.log(s.includes("name", 2));
// console.log(s.toLowerCase().startsWith("my"));
// console.log(s.toUpperCase());
// console.log(s.trimEnd());

// console.log('hi my name is \'ali\' and i am 30 years old');
// let name = 'ali'; // Template Literal
// let age = 36;
// let age2 = 2;
// console.log(`hi my name is ${name} and i am ${age - age2} years old`);

const now = new Date();
// console.log(now);
// console.log(new Date("May 11 2010 09:10"));
// console.log(new Date(2018, 4, 11, 9));

// 0,1,2,3,4
// now.setFullYear(2017);
// console.log(now.toDateString());
// console.log(now.toLocaleDateString());
// console.log(now.toISOString());
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
console.log(now.toLocaleDateString('en-US', options));