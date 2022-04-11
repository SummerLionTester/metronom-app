import { MetronomEntity } from "../MetronomEntity";
import { isValidBeat } from "./isValidBeat";
/**
 * Create a new beat entity
 * @param {number} initialValue - initial value should be a positive integer > 0 and in passed range
 * @param {{from: number, to: number}} range  - range of valid beat values
 * @returns {MetronomEntity}
 */
export const createBeat = (initialValue, range) =>
    new MetronomEntity(initialValue, isValidBeat(range), true);