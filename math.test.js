// math.test.js
const { add } = require('./math');

describe('add function', () => {
    test('adds two numbers correctly', () => {
        expect(add(1, 2)).toBe(3);
        expect(add(-1, 1)).toBe(0);
        expect(add(0, 0)).toBe(0);
        expect(add(-5, -10)).toBe(-15);
    });

    test('handles non-number parameters', () => {
        expect(add(1, '2')).toBeNaN();
        expect(add('a', 'b')).toBeNaN();
        expect(add(undefined, null)).toBeNaN();
    });
});
