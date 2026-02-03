import { describe, it, expect } from "vitest";


describe('Map', () => {
    it("should contain zero items when constructed", () => {
        let map = new Map();
        expect(map.size).toBe(0);
    });

    it("should contain one item when one item added", () => {
        let map = new Map();
        map.set("age", 38);
        expect(map.size).toBe(1);
    });

    it("should return  value when get is called with the correct key", () => {
        let map = new Map();
        map.set("age", 38);
        expect(map.get("age")).toBe(38);
    });

    it("should allow an object to be the key", () => {
        let map = new Map();
        let masoud = { name: 'Masoud' }
        map.set(masoud, 38);

        expect(map.get(masoud)).toBe(38);
    });


    it("should contain items when given an array in the constuctor", () => {
        // accept array of arrays with two item as key & value to create Map
        let map = new Map([['name', 'John'], ['age', 15], ['weight', 155]]);

        expect(map.size).toBe(3);
    });

    it("should find the correct item when has is called", () => {
        let map = new Map([['name', 'John'], ['age', 15], ['weight', 155]]);

        expect(map.has('age')).toBe(true);
    });

    it("should not allow duplicate key", () => {
        let map = new Map();
        let key = {};

        map.set(key, 'first');
        map.set(key, 'second');

        expect(map.get(key)).toBe('second');

    });

    it("should have no items after clear is called", () => {
        let map = new Map();
        map.set(1, 'a');
        map.set(2, 'b');
        map.set(3, 'c');

        map.clear();

        expect(map.size).toBe(0);
    });

    it("should remove an item when delete is called", () => {
        let map = new Map();
        let key1 = {};
        let key2 = {};
        map.set(key1, 100);
        map.set(key2, 200);

        map.delete(key2);

        expect(map.size).toBe(1);
    });

    it("should be iterable through foreach", () => {
        let map = new Map([['name', 'John'], ['age', 15], ['weight', 155]]);

        let iterationCount = 0;

        map.forEach((value, key) => iterationCount++);

        expect(iterationCount).toBe(3);
    });

    it("should be iterable through for-of", () => {
        let map = new Map([['name', 'John'], ['age', 15], ['weight', 155]]);

        let iterationCount = 0;

        for (const [key, value] of map) {
            // item is an array like ['key', 'value']
            iterationCount++;
        }

        expect(iterationCount).toBe(3);
    });

    it("should return an iterator of arrays of key value pair when entries called", () => {
        let map = new Map();
        map.set('name', 'Joe');

        let items = map.entries();
        let first = items.next().value;

        expect(first[0]).toBe('name');
        expect(first[1]).toBe('Joe');
    });

    it("should return an iterator of keys when keys called ", () => {
        let map = new Map();
        map.set('name', 'Joe');

        let items = map.keys();
        let first = items.next().value;

        expect(first).toBe('name');
    });

    it("should be able to be constructed with an iterator ", () => {
        let map = new Map();
        map.set('name', 'Joe');
        map.set('age', 15);
        map.set('weight', 155);

        let map2 = new Map(map.entries());
        let map3 = new Map(map);

        expect(map2.size).toBe(3);
        expect(map3.size).toBe(3);
    });
});