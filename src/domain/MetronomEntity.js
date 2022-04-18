import { Observer } from "../lib/Observer";

/**
 * A class representing a metonom entity
 */
export class MetronomEntity {
    #currentValue;
    #observer;
    #isValid;

    /**
     * Create a metronom entity
     * @param {number=|string=} initialValue - initial value of metronom entity. If not valid, an exception will be thrown
     * @param {requestCallback} isValidFn - entity value validation function
     * @param {boolean} isRanged - flag indicating the presence of additional methods increaseValueBy/decreaseValueBy. Methods can only be used with incremented/decremented values
     */
    constructor(initialValue, isValidFn, isRanged = false) {
        this.#observer = new Observer();
        this.#isValid = isValidFn;
        if (this.#isValid(initialValue)) {
            this.#currentValue = initialValue;
        } else {
            throw new Error("Invalid initial value!");
        }

        if (isRanged) {
            /**
             * Increase current value by passed value
             * @param {number} value
             */
            this.increaseValueBy = function (value) {
                const newValue = this.#currentValue + value;
                this.setValue(newValue);
            };
            /**
             * Decrease current value by passed value
             * @param {number} value
             */
            this.decreaseValueBy = function (value) {
                const newValue = this.#currentValue - value;
                this.setValue(newValue);
            };
        }
    }

    /**
     * Set a  new value that,if validated, will replace the old value and notify subscribers with it
     * @param {number=|string=} newValue - A new value to replace
     */
    setValue(newValue) {
        if (this.#isValid(newValue) && newValue !== this.#currentValue) {
            this.#currentValue = newValue;
            this.#observer.notifyAllWith(this.#currentValue);
        }
    }

    /**
     * Entity change subscription function.
     * In case of changing the value of the entity, the callback passed when subscribing will be called
     * @param {requestCallback} cb - callback that will be called if the value of the entity changes
     * @param {boolean} isNeededInitialData - If true, callback will be called immediately with current value
     */
    subscribe(cb, isNeededInitialData) {
        this.#observer.subscribe(cb);
        if (isNeededInitialData) {
            this.#observer.notifyLastWith(this.#currentValue);
        }
    }
}
