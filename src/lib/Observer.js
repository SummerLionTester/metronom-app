/** 
 * A class representing a simple implementation of the Observer pattern 
 */
export class Observer {
    #subscribers;

    /**Creates an empty subscriber store */
    constructor() {
        this.#subscribers = [];
    }

    /**
     *Adds a subscriber callback to the subscriber store
     * @param {requestCallback} cb - The subscriber callback added to the subscriber store
     */
    subscribe(cb) {
        this.#subscribers.push(cb);
    }

    /**
     * Calls all callbacks from the subscriber store with optioanal passed value
     * @param {number=|string=} value - The value passed to each callback in the subscriber store
     */
    notifyAllWith(value) {
        this.#subscribers.forEach((cb) => cb(value));
    }

    /** 
     * Calls only last added callback from the subscriber store with optioanal passed value
     * @param {number=|string=} value - The value passed to last added callback in the subscriber store
     */
    notifyLastWith(value) {
        if (this.#subscribers.length > 0) {
            this.#subscribers[this.#subscribers.length - 1](value);
        }
    }
}
