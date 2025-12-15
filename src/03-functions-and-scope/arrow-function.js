// function myFunc(param){
//     return param+10;
// }

let myFunc = function(param){
    let tmp = param*2;
    return tmp+10;
}

let myFunc2 = function(a,b){
    return a*b;
}

console.log(myFunc(2));

// (a,b) => a*b;

// (param) =>  {let tmp = param*2; return tmp+10}
let courses = [
    {id: 5, name: 'math'},
    {id: 6, name: 'physics'}
];
let result2 = courses.find(course => {
    console.log(this)
    return course.id === 6;
});

let result3 = courses.find(function(course){
    console.log(this)
    return course.id === 6;
});
console.log(result3);