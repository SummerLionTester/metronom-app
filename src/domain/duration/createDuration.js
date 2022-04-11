import { MetronomEntity } from "../MetronomEntity";
import { isValidDuration } from "./isValidDuration";

/**
 * Create a new duration entity
 * @param {number} initialValue - initial value should be a positive integer > 0 and and should be in available values
 * @param {Array<number>} available - available values
 * @returns {MetronomEntity}
 */
export const createDuration = (initialValue, available) =>
    new MetronomEntity(initialValue, isValidDuration(available));
