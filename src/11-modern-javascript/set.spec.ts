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


    it("should have no item after clear", () => {
        let set = new Set();
        set.add(1);
        set.add(2);
        set.add(3);

        set.delete(2);

        expect(set.size).toBe(2);
    });
})