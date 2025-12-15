// for in
let person = {
  name: "ali",
  lastName: "karimi",
  age: 28,
};

let colors = ["red", "blue", "green"];

// for (variable of iterable) {
// } // iterable= array, string

// let text = "";
// for (let color of colors) {
//   text += color + "--";
// }
// console.log(text);

// let language = "JavaScript";
// for (let word of language) {
//   console.log(word);
// }

// infinite loop
// let i = 6;
// while (i >= 6) {
//   console.log(i);
//   i++;
// }
// let jumpOver = false;
// for (let i = 0; i < 6; i++) {
//   //   if (i === 3) {
//   //     continue;
//   //   }
//   if (i > 3 && jumpOver) {
//     break;
//   }
//   console.log(i);
// }

// let i = 0;
// while (i <= 10) {
//   if (i === 5) break;
//   if (i % 2 === 0) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// }

// max(num1, num2)

function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

let result = max(4, 5);
console.log(result);

function max2(a, b) {
  return a > b ? a : b;
}
let result2 = max2(6, 9);
console.log(result2);
