import { MetronomEntity } from "../MetronomEntity";
import { isValidSample } from "./isValidSample";

/**
 * Create a new sample entity
 * @param {string} initialValue initial value should be in available values
 * @param {Array<string>} available - available values
 * @returns {MetronomEntity}
 */
export const createSample = (initialValue, available) =>
    new MetronomEntity(initialValue, isValidSample(available));
