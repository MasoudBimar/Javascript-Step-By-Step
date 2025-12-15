
// Function Expression {named, anonymous}
// walk();
// swim();
// Function Declaration // hoist 
function walk() {
    console.log('walking');
}

// Function Expression {named}
let swim = function func() {
    console.log('swimming');
}

// Function Expression {anonymous}
let swim1 = function () {
    console.log('swimming');
}

let swim3 = swim1;
// swim1();
// swim3();


// let foo = function bar(){
//     console.log('ccccccc')
//     // let foo = 'baz';

//     // function baz(foo) {
//     //     foo = bar;
//     //     foo;
//     // }

//     // baz();
// };

// console.log(x);
// var x = '1';


// Arguments

function sum() {
    console.log(arguments); // Array-liked Object
    // return a+b;
    let total = 0
    for (const value of arguments) {
        total += value;
    }
    return total;
}

function sum2(...args) { // Rest Operator
    console.log(args);
    let total = 0
    for (const value of arguments) {
        total += value;
    }
    return total;
}

function sum3(...args) { // Rest Operator
    if (args.length > 0) {
        return args.reduce((a, c) => a + c);
    } else {
        return 0;
    }
}

function calculate(discount, ...prices) { // price: number[], discount
    if (prices.length > 0) {
        let total = prices.reduce((a, c) => a + c);
        return total * (1 - (discount / 100));
    } else {
        return 0;
    }
}

function multiply(a = 1, b = 1) {// ES6 Default parameter
    // console.log(typeof b);
    // b = (typeof b!== 'undefined') ? b : 1;
    return a * b;
}

// console.log(multiply(5, 2));
// console.log(multiply(5));


// function interest(p, rate = 3.5, years = 5) { // Before ES6
//     // rate = rate || 3.5;
//     // years = years || 5;

//     return p * rate / 100 * years;
// }

// function call(url, data, port) {
//     console.log("🚀 ~ f ~ x:", x, y, z);
// }

// function get(url, port) {
//     console.log("🚀 ~ f ~ x:", x, y, z);
// }

// function post(url, data, port) {
//     console.log("🚀 ~ f ~ x:", x, y, z);
// }

// call('github.com', undefined,'80847');


// console.log( {} ?? 6);


// console.log(calculate(10,15, [11, 12,13]));// => 900

// console.log(sum(1, 2));       // 3
// console.log(sum(1));         // NaN
// console.log(sum());          // NaN
// console.log(sum(1, 2, 3, 4, 5)); // 3

// console.log(sum2(1, 2));       // 3
// console.log(sum2(1));         // NaN
// console.log(sum2());          // NaN
// console.log(sum2(1, 2, 3, 4, 5)); // 3

// console.log(sum3(1, 2));       // 3
// console.log(sum3(1));         // NaN
// console.log(sum3());          // NaN
// console.log(sum3(1, 2, 3, 4, 5)); // 3


// getter,setter
const person = {
    firstName: 'ali',
    lastName: 'hasani',
    // birthDate: 1990,
    // bt: new Date(),
    age: 36,
    get fullName() {
        return person.firstName + ' ' + person.lastName;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    },
    get birthDate() {
        return this.bt.toLocaleString('fa-IR');
    },
    set birthDate(value) {
        if (value) { // Defencive Programming
            this.bt = value;
        } else {
            throw new Error('Birth Data Value is invalid')
            // value = new Date();
        }
    }


}
// person.fullName = 'ali karimi';
// person.birthDate = undefined;
// console.log(person.birthDate);

calculation = (p = 0, q = 1) => {
    if (isNaN(p)) {
        console.log('p must be a number');
        return;
    }

    if (isNaN(q)) {
        console.log('q must be a number');
        return;
    }

    if (q === 0) {
        console.log('connot calc with zero value for q');
        return;
    }

    return p / q;
}

// console.log(calculation(60, 0));

// try {
//     person.fullName = 'ali karimi';
//     person.birthDate = undefined;
//     console.log(person.birthDate);
// } catch (error) {
//     // console.log("🚀 ~ error:", error)
// }

// 1. Engine
// 2. Scope
// let x = 5
// function foo(a,b){
//     console.log(a, x);
// }

// // foo(2);
// {
//     const message = 'hi';
// }

// function start() {
//     for (let i = 0; i < 5; i++){
//         console.log(i);
//     }

//     console.log(i);//
// }

// // console.log(message);
// start();
// 1. this inside method refer to object
// 2. this inside regular function refers to window
// 3. this in constructor function refers to new Empty Object(...)
const video = {
    title: 'clip1',
    play() {
        console.log(this)
    }
}

video.stop = function () {
    console.log(this);
}

function playVideo() {
    console.log(this);
}

function Video(title) { // Constructor Function ==> Stack
    // this.title = title;
    console.log(this);
}

const video3 = {
    title:'a',
    tags:['a', 'b','c'],
    showTags(){
        let x = 3;
        this.tags.forEach(function(tag){
            console.log(this)
            // console.log(tag, this.title, x);
        }.bind(this))
    }
}

video3.showTags();

// fill this
// 1. Using self
// 2. call, apply, bind
// 3. Arrow Function



// video.play();
// video.stop();
// let myThis = {name: 'Masoud'};
// playVideo.call(myThis);

// const v = new Video('clip2');

// video3.showTags();


// function Stack(){
//     // pop
//     // push
//     // isEmpty
//     // top
// }


// const s1 = new Stack();
// s1.push(1);

function playVideo2(a,b){
    console.log(this);
    console.log(a,b);
}



// playVideo2.call({name: 'ali', age: 23},1,2); // call (call, this changed, arguments)
// playVideo2.apply({name: 'ali', age: 23},[1,2]);
// Math.max(1,20,34);
// let arr = [50,60,90];
// console.log(Math.max.apply(null,arr))

// call, apply => (call, this changed, arguments(diff))
// bind => (this changed)


// let newFunc = playVideo2.bind({name: 'ali', age: 23});
// newFunc(1,2);




