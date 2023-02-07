const romanToInt = require('./romanToInt');

describe('romanToInt', () => {
    test("converts I to 1", () => {
        expect(romanToInt('I') ).toBe(1);
    });

    test("converts III to 3", () => {
        expect( romanToInt('III') ).toBe(3);
    });

    test("converts IV to 4", () => {
        expect( romanToInt('IV') ).toBe(4);
    });

    test("converts IX to 9", () => {
        expect( romanToInt('IX') ).toBe(9);
    });

    test("converts MMXIII to 2013", () => {
        expect( romanToInt('MMXIII') ).toBe(2013);
    });
});