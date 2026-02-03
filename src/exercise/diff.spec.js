import { describe, it, expect, toEqual } from "vitest";

/**
 * Check two number array that have no duplicate 
 */
function diffArray1(array1, array2) {
    let frequency = {};
    let diff = [];
    for (let i = 0; i < array1.length; i++) {
        if (!frequency[array1[i]]) {
            frequency[array1[i]] = 1;
        } else {
            frequency[array1[i]]++;
        }
    }

    for (let j = 0; j < array2.length; j++) {
        if (!frequency[array2[j]]) {
            frequency[array2[j]] = 1;
        } else {
            frequency[array2[j]]++;
        }
    }

    for (const [key, value] of Object.entries(frequency)) {
        if (value === 1) {
            diff.push(+key);
        }
    }

    return diff;
}

function diffArray(a, b) {
    const setA = new Set(a);
    const setB = new Set(b);

    const out = [];
    for (const x of setA) if (!setB.has(x)) out.push(x);
    for (const x of setB) if (!setA.has(x)) out.push(x);
    return out;
}


describe('find diff', () => {
    it('should report all items in array1 when array2 is empty', () => {
        let arr1 = [];
        let arr2 = [1, 2, 3, 4, 6,];
        let result = diffArray(arr1, arr2);
        expect(result.sort()).toEqual(arr2.sort());
    });

    it('should report all items in array2 when array1 is empty', () => {
        let arr1 = [1, 2, 3, 4, 6,];;
        let arr2 = [];
        let result = diffArray(arr1, arr2);
        expect(result.sort()).toEqual(arr1.sort());
    });

    it('should report empty when arrays are the same', () => {
        let arr1 = [1, 2, 3, 4, 6,];
        let arr2 = [1, 2, 3, 4, 6,];
        let result = diffArray(arr1, arr2);
        expect(result.sort()).toEqual([]);
    });
    it('should find items that only in array1', () => {
        let arr1 = [33, 1, 2, 3, 4, 6, 7];
        let arr2 = [1, 2, 3, 4, 6,];
        let result = diffArray(arr1, arr2);
        expect(result.sort()).toEqual([33, 7].sort());
    });

    it('should find items that only in array2', () => {
        let arr1 = [1, 2, 3, 4, 6];
        let arr2 = [1, 2, 3, 4, 6, 44, 53];
        let result = diffArray(arr1, arr2);
        expect(result.sort()).toEqual([44, 53].sort());
    });

    it('should find items that that either in array1 or array2', () => {
        let arr1 = [21, 1, 2, 55, 3, 4, 6, 60];
        let arr2 = [103, 1, 2, 3, 4, 6, 44, 53];
        let result = diffArray(arr1, arr2);
        expect(result.sort()).toEqual([103, 60, 21, 44, 53, 55].sort());
    });
})