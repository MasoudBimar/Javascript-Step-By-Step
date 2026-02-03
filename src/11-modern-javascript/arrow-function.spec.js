import { describe, it, expect } from 'vitest';

describe('arrow function', () => {
    it('arrow function, compact function definition', () => {
        let add = (x, y) => {
            let temp = x + y;
            return temp;
        };

        let square = x => x * x;
        let three = () => 3;

        expect(square(add(2, three()))).toBe(25);
    });

    it('can be used with array methods', () => {
        let numbers = [1, 2, 3];

        let sum = 0;
        numbers.forEach(n => sum += n);
        expect(sum).toBe(6);

        let doubled = numbers.map(n => n * 2);
        expect(doubled).toEqual([2, 4, 6]);
    });

    it('lexically binds to this', () => {
        this.name = 'Masoud';

        setTimeout(() => {
            expect(this.name).toBe('Masoud');
        }, 15);
    })
});