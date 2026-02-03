import { describe, it, expect } from 'vitest';

describe('Iterables & Iterators', () => {
    it('should be iterable by having next method as iterator', () => {
        let sum = 0;
        let numbers = [1, 2, 3, 4];

        // for loop
        for (let index = 0; index < numbers.length; index++) {
            sum += numbers[index];
        }

        expect(sum).toBe(10);
        sum = 0;
        // for in
        for (const idx in numbers) {
            sum += numbers[idx];
        }
        expect(sum).toBe(10);

        // iterator
        sum = 0;

        let iterator = numbers.values();
        // let iterator = numbers[Symbol.iterator]();
        let next = iterator.next();
        while (!next.done) {
            sum += next.value;
            next = iterator.next();
        }
        expect(sum).toBe(10);
    });


});

describe('for of', () => {
    it('can work with iterables', () => {
        let sum = 0;
        let numbers = [1, 2, 3, 4];

        for (const value of numbers) {
            sum += value;
        }

        expect(sum).toBe(10);
    })
});

describe('Build Your Own Interable', () => {
    it('can be done by implementing Symbol.iterator', () => {
        //! hard way to implement iterator
        class Company {
            constructor() {
                this.employees = [];
            }

            addEmployees(...names) {
                this.employees = this.employees.concat(names);
            }

            [Symbol.iterator]() {
                return new ArrayIterator(this.employees);
            }
        }

        class ArrayIterator {
            constructor(array) {
                this.array = array;
                this.index = 0;
            }

            next() {
                let result = { value: undefined, done: true };
                if (this.index < this.array.length) {
                    result.value = this.array[this.index];
                    result.done = false;
                    this.index += 1;
                }
                return result;
            }
        }

        let count = 0;

        let company = new Company();
        company.addEmployees('Tim', 'Sue', 'Joy', 'Tom');
        //! Normally Raise error: TypeError: company is not iterable
        for (let employee of company) {
            count += 1;
        }

        expect(count).toBe(4);
    })
});

describe('Build Your Own Interable Using Generator', () => {
    it('can be done by Generators', () => {
        //? easier way to implement iterator
        class Company {
            constructor() {
                this.employees = [];
            }

            addEmployees(...names) {
                this.employees = this.employees.concat(names);
            }

            *[Symbol.iterator]() {
                for (const e of this.employees) {
                    yield e;
                }
            }
        }

        class ArrayIterator {
            constructor(array) {
                this.array = array;
                this.index = 0;
            }

            next() {
                let result = { value: undefined, done: true };
                if (this.index < this.array.length) {
                    result.value = this.array[this.index];
                    result.done = false;
                    this.index += 1;
                }
                return result;
            }
        }

        let count = 0;

        let company = new Company();
        company.addEmployees('Tim', 'Sue', 'Joy', 'Tom');
        //! Normally Raise error: TypeError: company is not iterable
        for (let employee of company) {
            count += 1;
        }

        expect(count).toBe(4);
    })
})

