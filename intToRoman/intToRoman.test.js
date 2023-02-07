const intToRoman= require("./intToRoman");
describe("intToRoman",()=>{

    test("should convert 2 to II",()=>{
        expect(intToRoman(2)).toBe("II");
    });
    test("should convert 4 to IV",()=>{
        expect(intToRoman(4)).toBe("IV");
    });
    test("should convert 9 to IX",()=>{
        expect(intToRoman(9)).toBe("IX");
    });
     it('converts 100 to C', () => {
        expect(intToRoman(100)).toEqual('C');
    });

    it('converts 500 to D', () => {
        expect(intToRoman(500)).toEqual('D');
    });

    it('converts 1000 to M', () => {
        expect(intToRoman(1000)).toEqual('M');
    });

    it('converts 3888 to MMMDCCCLXXXVIII', () => {
        expect(intToRoman(3888)).toEqual('MMMDCCCLXXXVIII');
    })
})