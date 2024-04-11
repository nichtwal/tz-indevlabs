const findMissingNumber = require('./missingNumbers')

describe('findMissingNumber', () => {
    test('Missing number in the middle', () => {
        expect(findMissingNumber([5, 0, 1, 3, 2])).toBe(4);
    });

    test('Missing number in the middle', () => {
        expect(findMissingNumber([7, 10, 11, 12, 9])).toBe(8);
    });

    test('Missing number at the beninging', () => {
        expect(findMissingNumber([1, 2, 3, 4, 5])).toBe(0);
    });
    test('Empty array', () => {
        expect(findMissingNumber([])).toBe(false);
    });

    test('Missing number at the end', () => {
        expect(findMissingNumber([0, 1, 2, 3, 4])).toBe(5);
    });
})