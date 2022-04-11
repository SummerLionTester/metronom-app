/**
* Checks that a number is included in the range inclusive
* @param {number} number - The number to check for entry into the range
* @param {{from: number, to: number}} range - The preset range
* @returns {boolean}
*/
export const inRangeIncluding = (number, { from, to }) => {
    return number >= from && number <= to;
}