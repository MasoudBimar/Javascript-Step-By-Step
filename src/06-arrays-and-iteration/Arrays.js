// Arrays
// 1. Add
// 2. Find
// 3. remove - delete
// ... Empty, combine, slice , ...(spred operator)
let arr = [1,2,3];
// console.log(arr);
// Add End,start, middle
// End
arr.push(4, 5);
// console.log(arr);

// start
arr.unshift(0);
// console.log(arr);

// middle
// arr.splice(0,0,'a', 'b');
// arr.splice(arr.length,0,'a', 'b');
arr.splice(2,0,'a', 'b');
arr.push(3,8,9);
// console.log(arr);

// console.log(arr.indexOf(3));
// console.log(arr.indexOf(3, 6));
// console.log(arr.lastIndexOf(3));
// console.log(arr.indexOf(31) !== -1);
// console.log(arr.includes(31));
let courses = [
    {id: 5, name: 'math'},
    {id: 6, name: 'physics'}
];
// console.log(courses);

courses.push({id: 7, name: 'javascript'});

// console.log(courses);

// console.log(courses.includes({id: 5, name: 'math'}));
let result = courses.find(function(course){
    return course.name === 'math'
});
// console.log(result);

// for (const course of courses) {
//     if(course.name === 'physics'){
//         console.log(course);
//         break;
//     }
//     console.log(course);
// }

// Arrow Function (ES6)
let result2 = courses.find(course => course.id === 6); 
// console.log(result2);

// let result3 = courses.findIndex(course => {
//     return course.name === 'physics22'
// });
// console.log(result3);


// console.log(arr);
// console.log(arr.pop());
// console.log(arr.shift());
// console.log(arr.splice(5,1));
// console.log(arr);
// [1,2,3,4,5,6,7,89,0,,]

// Empty array
// console.log(arr);
// arr=[];
// arr.length=0;
// arr.splice(0,arr.length);
// while(arr.length > 0){
//     arr.pop()
// }
// console.log(arr);

let first = [1,2,3];
let second = [4,5,6];
let third = [6,2,5,7,8,9,10, -1];

// console.log(first.concat(second));
// console.log(first);
// console.log([first, second]);
// console.log([...first, ...second]);
// console.log(...first);

// console.log(third.slice(0,3), third.slice(3))
// let copy = [...third];
// let copy = [...third];
// third.push(13);
// console.log(third, copy);

// third.forEach((item, index) => {
//     console.log(item, index);
// })
let scores = [
    { name: 'ali', score: 67},
    { name: 'hasan', score: 69},
    { name: 'Reza', score: 80},
    { name: 'mohammad', score: 55},
    { name: 'nima', score: 100},
]
let newArray = ['ma', 'mb', 'sb', 'ou', 'us', 'dl'];
// newArray.sort();
// console.log(newArray);
// third.sort((a,b) => {
//     return a - b
// });
// console.log(third);
// scores.sort((std1,std2)=>{
//     return std1.score  - std2.score;
// })
// console.log(scores)
// console.log(newArray.join('#'));
// console.log(newArray.toString());

// let fourth = [6,2,5,7,8,9];
// fourth.sort()
// console.log(fourth.reverse())

// sort
// a < b  => -1
// a> b   => 1
// a===b  => 0

// scores.sort(function(std1,std2) {
// if (std1.name.toLocaleLowerCase() < std2.name.toLocaleLowerCase()) return -1;
// if (std1.name.toLocaleLowerCase() > std2.name.toLocaleLowerCase()) return 1;
// if (std1.name.toLocaleLowerCase() === std2.name.toLocaleLowerCase()) return 0;
// })
// console.log(scores);

// console.log(third.some(function(value){
//     return value>0
// }))

// console.log(third.every(value => value>0))

// console.log(third.filter(value => value > 5));

// map function

// const array1 = [1,2,3,4];
// const objs = array1.map(x => ({value: x}));
// console.log(objs);

//reduce

// const array2 = array1.map(x => x*x);
// // const array2 = array1.map(function(x){
// //     return x*2;
// // });

// console.log(array1);
// console.log(array2);

// map
// 1.create new empty array
// 2. call a function once for each element in array
// 3. push result into new array

// const itemList = ['item 1', 'item 2' , 'item 3','item 4'];
// let tmp = itemList.map(item => '<li>' + item + '</li>');
// const htmlString = '<ul>' + tmp.join('') + '</ul>';
// document.getElementById('test').innerHTML = htmlString;

// function myfunc(){
//     console.log('function delaration');
// }
// myfunc();
// let myfunc2 = function(){
//     console.log('Anonymous function delaration');
// }
// myfunc2();
// let myfunc22 = myfunc2;
// myfunc22();

// let myfunc3 = function myfunc4(){
    
//     // myfunc4()
//     console.log('Named function delaration');
//     let x = 5;
// }
// myfunc3();
// // myfunc4();

// walk();

// function walk(){
//     console.log('walking');
// }
// run();
// console.log(x);

// let x = 5;
// let run = function(){
//     console.log('runnnn');
// }
