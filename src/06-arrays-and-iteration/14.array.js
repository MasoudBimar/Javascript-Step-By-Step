// Primitive
// Object
// Array
// Function

// Array
// List
// Stack
// Linkedlist
// Tree, BTree, 

// [2, 3, 45, 46, 45, 4,  5]


// Add, Find, Remove, Combine, Split

let a1 = {
    name: 'ali1',
    age: 13
}

let a2 = {
    name: 'ali2',
    age: 13
}

let a3 = {
    name: 'ali3',
    age: 13
}


let arr = [a1, a2, a3];

const numbers = [3, 4];
// numbers = [];
numbers.push(5); // End
// console.log(numbers);
numbers.unshift(2); // First
// console.log(numbers);
numbers.splice(2, 0, 45, 46, 45); // Insert in the Middle
// console.log(numbers);

// console.log(numbers.indexOf(45));
// console.log(numbers.lastIndexOf(45));

let lastIndex = numbers.lastIndexOf(45);
if (lastIndex !== -1) {
    numbers[lastIndex] = 47;
}

// console.log(numbers.includes(45));
// let str = 'hi my name is my ali';
// console.log(str.split(' ').join('_'));

let courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
    { id: 2, name: 'c' },
]

let arr1 = [5, 12, 130, 44];

// console.log( course.includes({id: 1, name: 'a'}));

// const found = arr1.find(function (element, index, object) {
//     console.log("🚀 ~ found ~ element:", element, index, object);
//     return element === 130;
// });

// const found2 = arr1.find((element, index, object) => element === 130); // Arrow Function ES 6


// const found3 = courses.findIndex(function (course) {
//     return course.id === 2;
// });

// console.log(found);


// function plus(a) { return a + 100 }
// function (a) { return a + 100 }
// (a) { return a + 100 }
// (a) return a + 100
// (a) => return a + 100
// a => return a + 100

// function(a, b) {
//     return a + b + 100;
// }

// (a,b) => return a+b+100;

// function Student() {
//     // this={};
//     console.log(this);
//     this.name = "Ali";    
// }

// let x ={
//     let self = this;
//     this.name = 'blah blah';
//     s:setTimeout(function(){
//        console.log(self)
//     },500)
// }

// function test(title, func){
//     this.name = title;
//     setTimeout(() => {
//         console.log('inside timeout', this.name);
//         func();
//     }, 500);
// }

// test('title1', function(){
//     console.log('hi')
// })


// let st1 = new Student();
// let d = new doWork();
// console.log();




// let combined = numbers2.concat(numbers3);
// let combined2 =[ ...numbers2,'midlle' ,...numbers3];
// let copy = [...numbers2];
// console.log(combined2);
// let slice = combined.slice(2)
// console.log(slice);

// End
// console.log(numbers2.pop());
// console.log(numbers2);
//First
// console.log(numbers2.shift());
// console.log(numbers2);

// numbers2.splice(0,1);
// numbers2 = []; // recomended
// numbers2.length = 0
// numbers2.splice(0, numbers2.length);
// console.log(numbers2);


// let numbers4 = [];

// numbers2.forEach(value => {
//     numbers4.push(value * value);
// });

// console.log(numbers4);




let numbers2 = [8, 1, 6, 7, 9]; //

let numbers3 = [36, 49, 64];

let students = [
    { id: 43, name: 'babak' },
    { id: 57, name: 'Reza' },
    { id: 2, name: 'Cat' },
    { id: 100, name: 'Daniel' },
]

// students.sort((a, b) => {
//     // a<b => -1
//     // a>b => 1
//     // a ===b => 0

//     if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
//     if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
//     return 0;
// });
// console.log(students);

// students.every()

// any
// every
// filter
// build array of object from array of number : 1 => {value: 1} => Arrow Function


// students.forEach(element => {

// });

// 
// let liList = numbers2.map(element => {
//     return `<li> ${element} </li>`;
// });

// htmlCode = '<ul>' + liList.join('') + '</ul>';

// let res2 = numbers2.map(Math.sqrt);

// console.log(res2);

// map


// console.log(numbers3.map(Math.sqrt))
// console.log(numbers3.map(n => Math.sqrt(n)));

// const res44 = numbers3.map(n => {
//     const x = {title: 'item:'+ n, value: Math.sqrt(n)};
//     return x;
// });
// console.log(res44)


// console.log(numbers3.map(n => ({res: n+1})));


// console.log(numbers3.filter(x => x > 45).map(n => Math.sqrt(n)))

// let persons = [
//     { id: 43, firstName: 'babak', lastName: 'babak' },
//     { id: 57, firstName: 'Reza', lastName: 'Reza' },
//     { id: 2, firstName: 'Cat', lastName: 'Cat' },
//     { id: 100, firstName: 'Daniel', lastName: 'Daniel' },
// ]

// function getFullName(item) {
//     return item.firstName +'--'+ item.lastName;
// }

// persons.map(pers => getFullName(pers));

// reduce

const nums33 = [1, -1, 2, 3];

const res66 = nums33.reduce((acc,curr) => {
    return acc + curr
});

// a = 0, c = 1 => res = 1
// a =1, c = -1 => res = 0
// a =0, c = 2 => res = 2
// a =2, c = 3 => res = 5

console.log(res66)

