import { inRangeIncluding } from "../../lib/range";

/**
 * Checks beat value for validity
 * @param {{from: number, to: number}} range  - range of valid beat values
 * @returns {boolean} 
 */
export const isValidBeat = (range) => (value) =>
    Number.isInteger(value) && value > 0 && inRangeIncluding(value, range);
