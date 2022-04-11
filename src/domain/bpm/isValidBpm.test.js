import { isValidBpm } from "./isValidBpm";

describe("Function isValidBpm", () => {
    const range = { from: 20, to: 240 };
    const isValid = isValidBpm(range);

    it.each`
        value             | expected
        ${range.from - 1} | ${false}
        ${range.from}     | ${true}
        ${range.from + 1} | ${true}
        ${range.to - 1}   | ${true}
        ${range.to}       | ${true}
        ${range.to + 1}   | ${false}
        ${0}              | ${false}
    `("checks that value $value is valid bpm", ({ value, expected }) => {
        expect(isValid(value)).toBe(expected);
    });
});
