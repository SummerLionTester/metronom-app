import { isValidSample } from "./isValidSample";

describe("Function isValidSample", () => {
    const available = ["claves", "drumstick", "bongo", "woodblock", "1"];
    const isValid = isValidSample(available);

    it.each`
        value       | expected
        ${"claves"} | ${true}
        ${"guitar"} | ${false}
        ${1}        | ${false}
    `("check that value $value is valid sample", ({ value, expected }) => {
        expect(isValid(value)).toBe(expected);
    });
});
