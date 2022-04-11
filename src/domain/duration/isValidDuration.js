/**
 * Checks duration value for validity
 * @param {Array<number>} available - available values
 * @returns {boolean}
 */
export const isValidDuration = (available) => (value) =>
    Number.isInteger(value) && value > 0 && available.includes(value);
