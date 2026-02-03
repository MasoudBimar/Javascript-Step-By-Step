import { describe, it, expect } from 'vitest';
/**
 * A JavaScript generator is like a storybook that only reveals one page at a time: 
 * you define it with `function*`, and inside it you use yield to “hand out” a value and then pause, 
 * remembering exactly where it stopped; when you call .next() again (or loop with for...of), 
 * it continues from the next line after the last yield, 
 * so you can produce values step-by-step instead of all at once—useful for big sequences, 
 * streams, or any situation where you want to generate results lazily (only when asked). */


describe('generators', () => {
    it('can build an iterator ', () => {
        let numbers = function* () {
            yield 1;
            yield 2;
            yield 3;
            yield 4;
        }

        let sum = 0;
        let iterator = numbers();

        let next = iterator.next();
        while (!next.done) {
            sum += next.value;
            next = iterator.next();
        }

        expect(sum).toBe(10);
    });

    it('can build an iterator more dynamially', () => {
        let numbers = function* (start, end) {
            for (let i = start; i <= end; i++) {
                yield i;
            }
        }

        let sum = 0;
        let iterator = numbers(2, 8);

        let next = iterator.next();
        while (!next.done) {
            sum += next.value;
            next = iterator.next();
        }

        expect(sum).toBe(35);
    });

    it('can build an iterator more dynamially', () => {
        let numbers = function* (start, end) {
            for (let i = start; i <= end; i++) {
                yield i;
            }
        }

        let sum = 0;
        for (const num of numbers(2, 8)) {
            sum += num;
        }

        expect(sum).toBe(35);
    });
});

describe('Build Optimized Filter & Take methods with Generator', () => {
    it('can be done by Generators', () => {
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

        let filter = function* (items, predicate) {
            for (const item of items) {
                if (predicate(item)) {
                    yield item;
                }
            }
        }



        let count = 0;
        let company = new Company();
        company.addEmployees('Tim', 'Sue', 'Joy', 'Tom');

        for (const employee of filter(company, e => e[0] == 'T')) {
            count += 1;
        }
        expect(count).toBe(2);


        let take = function* (items, number) {
            let count = 0;
            if (number < 1) return;
            for (const item of items) {
                yield item;
                count += 1;
                if (count >= number) {
                    return;
                }
            }
        }

        count = 0;

        for (const employee of take(filter(company, e => e[0] == 'T'), 2)) {
            count += 1;
        }
        expect(count).toBe(2);
    })
});

// with generator on search & filter that sort of methods
// by using iterator & generator we can control how the loops behave
// and stop at the middle of process


describe('passing param to next(param)', () => {
    it('can take a parameter from next(param)', () => {
        let range = function* (start, end) {
            let current = start;
            while (current <= end) {
                let delta = yield current;
                current += delta || 1;
            }
        };

        let result = [];
        let iterator = range(1, 10);
        let next = iterator.next(); // not allowed to pass param
        while (!next.done) {
            result.push(next.value);
            next = iterator.next(2); //? next method can take parameters
        }
        expect(result).toEqual([1, 3, 5, 7, 9]);
    });
});