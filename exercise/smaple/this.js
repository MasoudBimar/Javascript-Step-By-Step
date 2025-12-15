const person = {
    name: 'ali',
    walk(){
        console.log(this)
    }
}

person.walk();

const walk = person.walk;
// console.log(walk);
walk();

function myFunc(){
    console.log(this);
}
myFunc();