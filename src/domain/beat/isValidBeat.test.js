import { isValidBeat } from "./isValidBeat";

describe("Function isValidBeat", () => { 
    const range = { from: 1, to: 12 };
    const isValid = isValidBeat(range);
    
    it.each`
        value             | expected
        ${range.from - 1} | ${false}
        ${range.from}     | ${true}
        ${range.from + 1} | ${true}
        ${range.to - 1}   | ${true}
        ${range.to}       | ${true}
        ${range.to + 1}   | ${false}
        ${0}              | ${false}
    `("checks that $value is valid beat", ({ value, expected }) => {
        expect(isValid(value)).toBe(expected);
    });
});