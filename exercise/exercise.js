// 0,1,1,2,3,5,8
// 0,1,2,3,4,5,6
// F(n) = F(n-1)+F(n-2);

// fibunacci(12);

// function fibunacci(n) {
//   if (n < 2) {
//     return n;
//   }
//   return fibunacci(n - 1) + fibunacci(n - 2);
// }
// console.log(fibunacci(5));

// function fibunacci(n) {
//   let f1 = 0;
//   let f2 = 1;
//   temp = 0;
//   while (n > 0) {
//     temp = f2;
//     f2 = f1 + f2;
//     f1 = temp;
//     n--;
//   }
//   return f1;
// }

// console.log(fibunacci(100));

function fibunacci3(n) {
  let n0 = 0;
  let n1 = 1;
  let nextTerm = 0;
  for (let i = 1; i <= n; i++) {
    nextTerm = n0 + n1;
    n0 = n1;
    n1 = nextTerm;
    console.log(n0, n1);
  }
  console.log(n0);
}


console.log(fibunacci3(100));
// 0,1,1,2,3,5,8
// 0,1,2,3,4,5,6
// F(n) = F(n-1)+F(n-2);

let expression = false;
if (expression) {
  // ...
  // ...
} else {
  // ...
  // ..
}
