import { describe, expect, it } from 'vitest';

/**
 * In Jasmine, the done callback is the signal that an asynchronous operation is complete. 
 * By default, Jasmine assumes tests are synchronous and will move to the next spec as soon as the test function returns.
 * Unlike Jasmine, which historically relied heavily on done, Vitest is built for modern JavaScript. 
 * If your function returns a Promise, you simply mark the test as async and use await. 
 * Vitest will automatically wait for the promise to resolve before finishing the test
 *  */

describe('Promises', () => {
    it('should execute the callback given to then', async () => {
        let promise = new Promise((resolve, reject) => {
            resolve();
        });

        return promise.then(() => {
            // done(); // Signals Jasmine to proceed
        })
    });

    it('should recieve the resolved data', async () => {
        let promise = new Promise((resolve, reject) => {
            resolve(1);
        });

        return promise.then((data) => {
            expect(data).toBe(1);
        });
    });

    it('should receive the resolved data without then', async () => {
        let promise = Promise.resolve(1);

        // Use await directly instead of .then()
        const data = await promise;
        expect(data).toBe(1);
    });

    it('should fails when rejected', async () => {
        let promise = new Promise((resolve, reject) => {
            reject(Error('oh no!'));
        });

        return promise.then(() => {
            // done(); // Signals Jasmine to proceed
        }, (error) => {
            expect(error.message).toBe('oh no!');
        })
    });

    it('should have a catch', async () => {
        let promise = new Promise((resolve, reject) => {
            reject(Error('oh no!'));
        });

        return promise.catch((error) => {
            expect(error.message).toBe('oh no!');
        })
    });
    // ------------------------------------------------------------

    it('should compose when resolved with a promise', async () => {
        let previousPromise = new Promise((resolve, reject) => {
            resolve(3);
        });

        let promise = new Promise((resolve, reject) => {
            resolve(previousPromise);
        });

        await promise.then((data) => {
            expect(data).toBe(3);
        });
    });

    it('should have a static resolve', async () => {
        let previousPromise = Promise.resolve(3);

        let promise = Promise.resolve(previousPromise);

        await promise.then((data) => {
            expect(data).toBe(3);
        });
    });

    it('should have a static reject', async () => {
        let promise = Promise.reject(Error('oh no!'));

        await promise.catch((error) => {
            expect(error.message).toBe('oh no!');
        });
    });

    it('should be asynchronous', async () => {
        let async = false;

        let promise = new Promise((resolve, reject) => {
            resolve();
        });

        promise.then(() => {
            expect(async).toBe(true);
        });
        async = true;
    });

    it('should chain sequentially using then', async () => {
        await getOrder(3).then((order) => {
            return getUser(order.userId);
        }).then((user) => {
            return getCompany(user.companyId);
        }).then((company) => {
            expect(company.name).toBe('myCompany');
        }).catch((error) => {
            // handle error
        });
    });

    it('should execute after all promises with all', async () => {
        let courseIds = [1, 2, 3];
        let promises = [];
        for (let i = 0; i < courseIds.length; i++) {
            promises.push(getCourse(courseIds[i]));
        }
        await Promise.all(promises).then((values) => {
            expect(values.length).toBe(3);
        });
    });

    it('should resolve after the first promise', async () => {
        let courseIds = [3, 23, 83];
        let promises = [];
        for (let i = 0; i < courseIds.length; i++) {
            promises.push(getCourse(courseIds[i]));
        }
        await Promise.race(promises).then((firstValue) => {
            expect(firstValue.name).toBeDefined();
        });
    });
});

// Utility

// PROMISES CODE
function getOrder(orderId) {
    return new Promise((resolve, reject) => {
        resolve({ userId: 35 });
    });
}

function getUser(userId) {
    return new Promise((resolve, reject) => {
        resolve({ companyId: 18 });
    });
}

function getCompany(companyId) {
    return new Promise((resolve, reject) => {
        resolve({ name: 'myCompany' });
    });
}

function getCourse(courseId) {
    let courses = {
        3: { name: "JS Intro" },
        23: { name: "Yet Another One" },
        83: { name: "third one" }
    }
    return new Promise((resolve, reject) => {
        resolve(courses[courseId]);
    });
}