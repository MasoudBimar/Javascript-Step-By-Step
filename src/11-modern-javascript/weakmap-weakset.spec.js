/**
 * WeakMap and WeakSet in ES6
 * 
 * WeakMap and WeakSet were introduced in ES6 (ECMAScript 2015) to provide:
 * 
 * 1. Memory Management: They hold weak references to their keys/values, allowing
 *    garbage collection when the referenced object has no other references.
 * 
 * 2. Privacy: WeakMap is commonly used to store private data for objects without
 *    polluting the object's properties or using naming conventions.
 * 
 * 3. Avoiding Memory Leaks: Unlike Map and Set, they don't prevent garbage
 *    collection of their contents, making them ideal for caches and metadata.
 * 
 * 4. Non-enumerable Storage: WeakMap and WeakSet keys are not enumerable,
 *    providing better encapsulation and preventing unintended iteration.
 * 
 * 5. Object-specific Storage: Keys must be objects (not primitives), making them
 *    suitable for associating data specifically with object instances.
 * 
 * For example when we have a reference of dom in object and we remove it from DOM, 
 * keeping the reference of DOm in object prevent Garbage Collector to collect it
 * 
 * Use Cases:
 * - Private instance variables
 * - DOM node metadata
 * - Object-specific caches
 * - Event handlers bound to objects
 */

import { expect, describe, test, it } from 'vitest';

describe('WeakSet', () => {
    it('should not have properties & methods that relate to the entire set', () => {
        let weakSet = new WeakSet();

        expect(weakSet.size).toBe(undefined);
        expect(weakSet.entries).toBe(undefined);
        expect(weakSet.values).toBe(undefined);
        expect(weakSet.forEach).toBe(undefined);
    });

    it('should be able to find items with has', () => {
        let weakSet = new WeakSet();
        let item = { name: 'Joe' };
        weakSet.add(item);

        expect(weakSet.has(item)).toBe(true);
    });

    it('should be able to remove items with delete', () => {
        let weakSet = new WeakSet();
        let item = { name: 'Joe' };
        weakSet.add(item);
        weakSet.delete(item);

        expect(weakSet.has(item)).toBe(false);
    });
});

describe('WeakMap', () => {
    it('should not have properties & methods that relate to the entire set', () => {
        let weakMap = new WeakMap();

        expect(weakMap.size).toBe(undefined);
        expect(weakMap.entries).toBe(undefined);
        expect(weakMap.values).toBe(undefined);
        expect(weakMap.forEach).toBe(undefined);
    });

    it('should be able to find items with has', () => {
        let weakMap = new WeakMap();
        let item = { name: 'Joe' };
        weakMap.set(item, 35);

        expect(weakMap.has(item)).toBe(true);
    });

    it('should be able to remove items with delete', () => {
        let weakMap = new WeakMap();
        let item = { name: 'Joe' };
        weakMap.set(item, 36);
        weakMap.delete(item);

        expect(weakMap.has(item)).toBe(false);
    });
});

