import { isValidDuration } from "./isValidDuration";

describe("Function isValidDuration", () => {
    const available = [1, 2, 4, 8, 16];
    const isValid = isValidDuration(available);
    
    it.each`
        value | expected
        ${1}  | ${true}
        ${3}  | ${false}
    `("check that $value is valid duration", ({ value, expected }) => {
        expect(isValid(value)).toBe(expected);
    });
});
