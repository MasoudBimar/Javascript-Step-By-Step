import { describe, it, expect } from 'vitest';

let Calc = function (start) {
    this.add = function (x) {
        start = start + x;
        return this;
    };

    this.multiply = function (x) {
        start = start * x;
        return this;
    };

    this.equals = function (callback) {
        callback(start);
        return this;
    }
}

describe('chaining pattern', () => {
    it('should calculate the chain of action', () => {
        let result = 0;
        new Calc(0).add(1).add(2).multiply(3).equals((val) => {
            result = val;
        });

        expect(result).toBe(9);
    })
})