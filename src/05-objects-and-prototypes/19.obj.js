// 1. obj lit
// 2. cons func
// 3. fact func
// Object.create

let obj = {
    x: 1,
    y: 2,
    myDate: new Date(),
    walk: function () {
        console.log('test');
    },
    nestedObj: {
        z: 65
    }
}

// console.log(Object.values(obj))
// console.log(Object.keys(obj))
// console.log(Object.entries(obj))
// sessionStorage.setItem('myObj', JSON.stringify(obj));
// console.log(sessionStorage.getItem('myObj'));
// let str = sessionStorage.getItem('myObj');
// console.log(str);
let temp = JSON.stringify(obj)
let newObj = JSON.parse(temp);
// newObj = obj;
obj.nestedObj.z = 22;
newObj.nestedObj.z = 23;
// console.log(newObj, obj);

// function Jewels(){ this.name = 'Diamond'}
// function Gems(){Jewels.call(this)}
// Gems.prototype = Object.create(Jewels.prototype);
// // let anotherObj = {};
// // anotherObj.prototype = Object.create(obj);
// let g = new Gems();
// console.log(g);


function Person() {
    this.age = 15;
}

// Object.defineProperty(Person.prototype, 'doHomeWork1', () => {
//     console.log('xxxxxxx')
// }
// )

Person.prototype.alaki = 500;

Person.prototype.doHomeWork1 = function doHomeWork1() {
    console.log('xxxxxxx')
}

Person.prototype.doHomeWork2 = function doHomeWork2() {
    console.log('xxxxxxx')
}

Person.prototype.doHomeWork3 = function doHomeWork3() {
    console.log('xxxxxxx')
}

Person.prototype.doHomeWork4 = function doHomeWork4() {
    console.log('xxxxxxx')
}

let objects = [];
for (let i = 0; i < 10; i++) {
    let instance = new Person();
    instance.mine = 45;
    objects.push(instance);
}

// console.log(objects)

let x = { p: 1 };
let y = { q: 3 };
let z = Object.assign(y, objects[0]);
console.log(z, y);
console.log(objects[0]);

// console.log(objects[0].hasOwnProperty('alaki'));// Consider own property
console.log('alaki' in objects[0]); // Consider own property and prototype property