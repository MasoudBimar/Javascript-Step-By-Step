import { describe, test, expect, it } from "vitest";

describe('Using Prototype', () => {
    it("Providing method through prototype", () => {
        let Employee = function () {

        };

        Employee.prototype.doSth = () => {
            return "Complete!";
        };

        let empl = new Employee();

        expect(empl.doSth()).toBe("Complete!");
    })
});

describe('Using ES6 Class keyword', () => {
    it("Providing method through class", () => {
        class Employee {

            constructor(name) {
                // Initialization logic
                this._name = name;
            }

            doSth() {
                return "Complete!";
            }
        }

        let empl1 = new Employee("Masoud");
        let empl2 = new Employee("Ali");

        expect(empl1.doSth()).toBe("Complete!");
        expect(Employee.prototype.doSth.call(empl1)).toBe("Complete!");
    });

    it("Providing access to class properties using methods(this)", () => {
        class Employee {

            constructor(name) {
                // Initialization logic
                this._name = name;
            }

            getName() {
                return this._name;
            }

        }

        let empl1 = new Employee("Masoud");
        let empl2 = new Employee("Ali");

        expect(empl1.getName()).toBe("Masoud");
        expect(empl2.getName()).toBe("Ali");
    });

    it("Providing access to class properties using Getters & Setters", () => {
        class Employee {

            constructor(name) {
                // Initialization logic
                this._name = name;
            }

            get name() {
                return this._name;
            }

            set name(value) {
                // validation
                this._name = value;
            }
        }

        let empl1 = new Employee("Masoud");
        let empl2 = new Employee("Ali");
        expect(empl1.name).toBe("Masoud");
        expect(empl2.name).toBe("Ali");

        empl2.name = "Tom";
        expect(empl2.name).toBe("Tom");
    })
});