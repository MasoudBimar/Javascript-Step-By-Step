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