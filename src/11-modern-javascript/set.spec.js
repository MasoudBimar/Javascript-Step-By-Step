import { describe, it, expect } from "vitest";


describe('Set', () => {
    it("should contain zero items when constructed", () => {
        let set = new Set();
        expect(set.size).toBe(0);
    });

    it("should contain one item when one item added", () => {
        let set = new Set();
        set.add("SomeValue");
        expect(set.size).toBe(1);
    });

    it("should allow object as key", () => {
        let set = new Set();
        let key = {};
        set.add(key);
        expect(set.has(key)).toBe(true);
    });

    it("should contains item when given an array in the constructor", () => {
        let set = new Set([1, 2, 3]);
        expect(set.has(1)).toBe(true);
    });

    it("should not allow duplicate item", () => {
        let set = new Set();
        let key = {};
        set.add(key);
        set.add(key);

        expect(set.size).toBe(1);
    });

    it("should have no item after clear", () => {
        let set = new Set();
        set.add(1);
        set.add(2);
        set.add(3);

        set.clear();

        expect(set.size).toBe(0);
    });


    it("should remove an item when delete is called", () => {
        let set = new Set();
        set.add(1);
        set.add(2);
        set.add(3);

        set.delete(2);

        expect(set.size).toBe(2);
    });

    it("should be iterable through foreach", () => {
        let set = new Set();
        set.add(1);
        set.add(2);
        set.add(3);

        let iterationCount = 0;

        set.forEach(item => iterationCount++);

        expect(iterationCount).toBe(3);
    });

    it("should be iterable through for-of", () => {
        let set = new Set();
        set.add(1);
        set.add(2);
        set.add(3);

        let iterationCount = 0;

        for (const element of set) {
            iterationCount++;
        }

        expect(iterationCount).toBe(3);
    });

    it("should return an iterator of arrays when enteries called", () => {
        let set = new Set();
        set.add(1);
        set.add(2);
        set.add(3);

        let entries = set.entries();
        // ? entries = { [ 1, 1 ], [ 2, 2 ], [ 3, 3 ] }

        let firstEntry = entries.next().value;

        expect(firstEntry?.[0]).toBe(1);
        expect(firstEntry?.[1]).toBe(1);
    });

    it("should return an iterator of values when values is called", () => {
        let set = new Set();
        set.add(1);
        set.add(2);
        set.add(3);

        let values = set.values();
        //? values = { 1, 2, 3 }

        let firstValue = values.next().value;

        expect(firstValue).toBe(1);
    });

    it("should be able to be construted with an iterator (values)", () => {
        let set = new Set();
        set.add(1);
        set.add(2);
        set.add(3);


        let set2 = new Set(set.values());
        expect(set2.size).toBe(3);
    });

    it("should be able to be construted with an iterator (set)", () => {
        let set = new Set();
        set.add(1);
        set.add(2);
        set.add(3);


        let set2 = new Set(set);
        expect(set2.size).toBe(3);
        expect(set2.has(1)).toBeTruthy();
        expect(set2.has(2)).toBeTruthy();
        expect(set2.has(3)).toBeTruthy();

    });
})