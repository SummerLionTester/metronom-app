import { inRangeIncluding } from "../../lib/range";

/**
 * Checks bpm value for validity
 * @param {{from: number, to: number}} range  - range of valid bpm values 
 * @returns {boolean}
 */
export const isValidBpm = (range) => (value) =>
    Number.isInteger(value) && value > 0 && inRangeIncluding(value, range);
