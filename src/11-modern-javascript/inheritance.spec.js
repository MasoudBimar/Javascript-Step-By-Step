import { describe, it, expect } from 'vitest';
describe("ES6 class inheritance", () => {
    it("can have a base class", () => {

        class Person {

            constructor(name) {
                this.name = name;
            }

            get name() {
                return this._name;
            }

            set name(newValue) {
                if (newValue) {
                    this._name = newValue;
                }
            }
        }

        class Employee extends Person {
            doWork() {
                return `${this._name} is working`;
            }
        }

        let person1 = new Person("Masoud");
        let empl1 = new Employee("Christopher");

        expect(person1.name).toBe("Masoud");
        expect(empl1.name).toBe("Christopher");
        expect(empl1.doWork()).toBe("Christopher is working");


    });


    it("can invoke base methods", () => {

        class Person {

            constructor(name) {
                this.name = name;
            }

            get name() {
                return this._name;
            }

            set name(newValue) {
                if (newValue) {
                    this._name = newValue;
                }
            }
        }

        class Employee extends Person {

            constructor(title, name) {
                super(name);
                this._title = title;
            }

            get title() {
                return this._title;
            }

            doWork() {
                return `${this._name} is working`;
            }

        }

        let empl1 = new Employee("Developer", "Masoud");
        expect(empl1.name).toBe("Masoud");
        expect(empl1.title).toBe("Developer");

    });

    it("can override methods", () => {

        class Person {

            constructor(name) {
                this.name = name;
            }

            get name() {
                return this._name;
            }

            set name(newValue) {
                if (newValue) {
                    this._name = newValue;
                }
            }

            doWork() {
                return "free";
            }

            toString() {
                // override base object method for Person
                return this.name;
            }
        }

        class Employee extends Person {

            constructor(title, name) {
                super(name);
                this._title = title;
            }

            get title() {
                return this._title;
            }

            doWork() {

                // acess base using super.doWork();
                return "paid";
            }

        }

        let empl1 = new Employee("Developer", "Masoud");
        let person1 = new Person("Alex");

        expect(person1.doWork()).toBe("free");
        expect(empl1.doWork()).toBe("paid");
        expect(person1.toString()).toBe("Alex");
        expect(empl1.toString()).toBe("Masoud");

        let makeEveryoneWork = (...people) => {
            var results = [];
            for (var i = 0; i < people.length; i++) {
                if (people[i] instanceof Person) {
                    results.push(people[i].doWork());
                }
            };
            return results;
        }

        expect(makeEveryoneWork(person1, empl1, {})).toEqual(["free", "paid"]);

    });

});