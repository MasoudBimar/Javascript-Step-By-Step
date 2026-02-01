import { expect, describe, test, it } from 'vitest';

describe("Template Literals", () => {
    it('can be used to combine literals', () => {
        let sayHello = (name) => {
            return `Hello, ${name}`;
        };

        let result = sayHello('Masoud');

        expect(result).toBe("Hello, Masoud");
    })

    it('can be used to build urls', () => {
        let entity = 'users';
        let entityId = 157;

        let url = `http://apiserver/${entity}/${entityId}`;

        expect(url).toBe("http://apiserver/users/157");
    });

    it('can used to build tag list', () => {
        let upper = (strings, ...values) => {
            console.log(strings, values);
            let result = '';
            for (let i = 0; i < strings.length; i++) {
                result += strings[i];
                if (i < values.length) {
                    result += values[i];
                }
            }
            return result.toUpperCase();
        }

        let x = 1;
        let y = 3;

        let result = upper`${x} + ${y} is ${x + y}`;
        // pass [ '', ' + ', ' is ', '' ] , [ 1, 3, 4 ] to upper function

        expect(result).toBe("1 + 3 IS 4");
    })
});