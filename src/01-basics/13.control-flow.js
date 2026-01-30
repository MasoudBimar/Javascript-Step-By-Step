let hour = 14;
if (hour < 10) {
    console.log('good morning');
} else if (hour > 10 && hour < 18) {
    console.log('goog evening');
} else {
    console.log('good night');
}

// switch
let role = 'guest'; // admin, unknown
let hour2 = 14;
switch (role) { // go to 14
    case 'guest':
        console.log('Guest User');
        break;
    case 'admin':
        console.log('admin User');
        break;
    case 'unknown':
        console.log('unknown User');
        break;
    default:
        console.log('default message');
    // code block
}


if (role === 'guest' && hour > 14) {
    console.log('good evening Guest User');
} else if (role === 'admin') {
    console.log('admin User');
} else if (role === 'unknown') {
    console.log('unknown User');
} else {
    console.log('default message');
}

// loops
// for
// for-in
// for-of
// while
// do-while
//     let i =0, j =1
// for( let i =0 ; i < 5 ; j--){

//     console.log('exection count', i, j);
//     // i++; 
//     // j++;
// }

for (var index = 10; index > 0; index--) {
    console.log(index);
}
console.log('last index is: ', index);

let obj = { name: '123', age: 45 };
for (key in obj) {
    console.log(obj[key]);
}

let fruites = ['apple', 'benana', 'ananans']; // 0,1,2 

for (f in fruites) {
    console.log(f, fruites[f]);
    console.log('current item is: ', fruites[f]);
}

let colors2 = ['red', 'blue', 'white'];

function myFunction(value, index, array) {
    console.log('current item is: ', value);
}

// colors.forEach(myFunction);

// let srt = "masoud";
// srt. 
// String

// const cars = ["BMW", "Volvo", "Mini"];
// let language = "JavaScript";

// for(let x of language){
//     // text += x;
//     console.log(x);
// }

//  While loop
let index1 = 0
while (index1 < 10) {
    console.log('exec count', index1);
    index1++;
}

// do while loop
// let i = 0
// do{

//     i++;
// } while( i < 10)

while (true) {
    if (condition) {
        break;
    }
}

// break , continue

for (let index = 0; index < 10; index++) {
    if (index === 3) {
        continue;
    }
    console.log(index);

}


// let a = 10;
// let b = 15;
// let max = a > b ? console.log(a) : console.log(b);

let input = 'varName';

let a = {};
a[input] = 45;



// for in
let person = {
    name: "ali",
    lastName: "karimi",
    age: 28,
};

let colors = ["red", "blue", "green"];

// for (variable of iterable) {
// } // iterable= array, string

let text = "";
for (let color of colors) {
    text += color + "--";
}
console.log(text);

let language = "JavaScript";
for (let word of language) {
    console.log(word);
}

// infinite loop
// let i = 6;
// while (i >= 6) {
//   console.log(i);
//   i++;
// }

let jumpOver = false;
for (let i = 0; i < 6; i++) {
    //   if (i === 3) {
    //     continue;
    //   }
    if (i > 3 && jumpOver) {
        break;
    }
    console.log(i);
}

let i = 0;
while (i <= 10) {
    if (i === 5) break;
    if (i % 2 === 0) {
        i++;
        continue;
    }
    console.log(i);
    i++;
}

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





