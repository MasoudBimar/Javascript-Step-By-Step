import { describe, it, expect, toEqual } from 'vitest';

describe('spread operator', () => {
    it('should cpread an array across params', () => {
        let doSth = (x, y, z) => {
            return x + y + z;
        };

        let result = doSth(...[1, 2, 4]);

        expect(result).toBe(7);
    });

    it('can be used to build arrays', () => {
        let array1 = [14, 15, 16];
        let array2 = [11, 12, 13, ...array1, 17, 18, 19];

        expect(array2).toEqual([11, 12, 13, 14, 15, 16, 17, 18, 19]);
    })
})