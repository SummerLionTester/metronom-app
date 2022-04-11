/**
 * Checks sample value for validity
 * @param {Array<number>} available - available values
 * @returns {value}
 */
export const isValidSample = (available) => (value) =>
    typeof value === "string" && available.includes(value);
