import { Observer } from "./Observer";

describe("Class Observer", () => {
    let observer;

    beforeEach(() => {
        observer = new Observer();
    });

    describe("notifyAllWith()", () => { 
        it("verifies notification of one subscriber using notifyAllWith() without parameters", () => {
            const cb = jest.fn((x) => x);

            observer.subscribe(cb);
            observer.notifyAllWith();

            expect(cb).toHaveBeenCalledTimes(1);
        });

        it("checks notification of multiple subscribers using  notifyAllWith() with a passed value", () => {
            const callBacks = [jest.fn((x) => {}), jest.fn((x) => {})];
            const value = 1;

            callBacks.forEach((c) => {
                observer.subscribe(c);
            });
            observer.notifyAllWith(value);

            callBacks.forEach((c) => {
                expect(c).toHaveBeenCalledWith(value);
                expect(c).toHaveBeenCalledTimes(1);
            });
        });
    });
});
