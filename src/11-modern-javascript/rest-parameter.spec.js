import { describe, test, it, expect } from 'vitest';
describe('rest parameters', () => {
    it('should be like arguments', () => {
        let doSth = (name, ...numbers) => {
            let result = 0;
            numbers.forEach(n => result += n);
            return result;
        };

        let result = doSth('Masoud', 1, 2, 3);
        expect(result).toBe(6);
    });

    it('should work with no params provided', () => {
        let doSth = (name, ...numbers) => {
            let result = 0;
            numbers.forEach(n => result += n);
            return result;
        };

        let result = doSth('Masoud');
        expect(result).toBe(0);
    });
})