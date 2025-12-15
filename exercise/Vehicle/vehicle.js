// Abstraction Vs. Encapsulation Vs. Inheritance Vs. PolyMorphisem


// class Test{
//     birthDate; // Date

//     get age(){
//         return 25;
//     }
// }

// let x = new Test();
// console.log(x.birthDate);
// x.birthDate = new Date();


// protect property, Control Access via method
// Encapsulation
class Vehicle1 {
    _maxSpeed; // Access Modifier {private, public}

    constructor(make, model, maxSpeed) {
        this.make = make;
        this.model = model;
        this._maxSpeed = maxSpeed;
    }

    getMaxSpeed() {
        return this._maxSpeed;
    }

    setMaxSpeed(speed) {
        if (speed > 0) {
            this._maxSpeed = speed;
        }
    }
}


let v = new Vehicle1('x', 'y', 150);
// v._maxSpeed = 5;
// console.log(v._maxSpeed);

// Abstraction
class Vehicle2 {
    _maxSpeed;
    engineStatus = "off";

    constructor(make, model, maxSpeed) {
        this.make = make;
        this.model = model;
        this._maxSpeed = maxSpeed;
    }

    startEngine(){
        this.engineStatus = "on";
        // ...
        console.log(`${this.model} engine started`);
    }

    stopEngine(){
        this.engineStatus = "off";
        // ...
        console.log(`${this.model} engine stopped`);
    }


}

let v2 = new Vehicle2('x1', 'y1', 140);
// v2.startEngine();


class Vehicle3 {


    constructor(make, model, maxSpeed) {
        this.make = make;
        this.model = model;
        this._maxSpeed = maxSpeed;
    }

    startEngine(){
        this.engineStatus = "on";
        // ...
        console.log(`${this.model} engine started`);
    }

    stopEngine(){
        this.engineStatus = "off";
        // ...
        console.log(`${this.model} engine stopped`);
    }


}


// Inheritance
class Car extends Vehicle3{

    constructor(make, model, maxSpeed,doorCount) {
        super(make, model, maxSpeed);
        this.doorCount = doorCount;
    }

    honk(){
        console.log("Beeeeeeeeeeeeeeeeeep");
    }
}

let c = new Car('ccc', 'gas', 120, 4);

// PolyMorphism
class ElectricCar extends Car{
    startEngine(){
        console.log(`${this.model} silent On`);
    }
}

let ec = new ElectricCar('e','c', 200,4);
ec.startEngine();
c.startEngine();

// setTimeout(()=> {},5000);
// setInterval(()=> {}, 5000);

// StopWatch 1:02:35
// 1. start
// 2. stop
// 3. reset
// control 
// do not start if already started
// do not stop if already stopped
// Render Stopwatch(with control buttons)
// stop => Duration
