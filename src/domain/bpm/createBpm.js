import { MetronomEntity } from "../MetronomEntity";
import { isValidBpm } from "./isValidBpm";

/**
 * Create a new bpm entity
 * @param {number} initialValue - initial value should be a positive integer > 0 and in passed range
 * @param {{from: number, to: number}} range - range of valid bpm values
 * @returns {MetronomEntity}
 */
export const createBpm = (initialValue, range) =>
    new MetronomEntity(initialValue, isValidBpm(range), true);
