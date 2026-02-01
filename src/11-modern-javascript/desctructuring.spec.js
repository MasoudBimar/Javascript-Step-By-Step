import { describe, test, expect, it } from "vitest";

describe('destructring', () => {
    it('should destructure arrays', () => {
        let doSth = () => {
            return [1, 2, 3];
        };

        let [, x, y, z] = doSth();

        expect(x).toBe(2);
        expect(y).toBe(3);
        expect(z).toBeUndefined();
    });

    it('should destructure objects', () => {
        let getUser = () => {
            return {
                firstName: 'Masoud',
                lastName: 'Bimmer',
                email: 'masoudbimar@gmail.com'
            };
        };
        let { firstName: definedFirstName,
            lastName: definedLastName } = getUser();

        expect(definedFirstName).toBe('Masoud');


    });

    it('should destructure objects with nested props', () => {
        let getUser = () => {
            return {
                firstName: 'Masoud',
                lastName: 'Bimmer',
                contact: {
                    email: 'masoudbimar@gmail.com'
                }
            };
        };
        let { firstName: definedFirstName,
            lastName: definedLastName, contact: { email: mailAddress } } = getUser();

        expect(definedFirstName).toBe('Masoud');
        expect(definedLastName).toBe('Bimmer');
        expect(mailAddress).toBe('masoudbimar@gmail.com');



    });
})