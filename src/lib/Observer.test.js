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

        it("check that if subscriber store is empty, no error will be thrown", () => {
            expect(() => observer.notifyAllWith()).not.toThrowError(Error);
        });
    });

    describe("notifyLastWith()", () => { 
        it("check notification of last subscriber using notifyLastWith() with a passed value", () => { 
            const callBack1 = jest.fn((x) => { });
            const callBack2 = jest.fn((x) => { });
            const value = 1;

            observer.subscribe(callBack1);
            observer.subscribe(callBack2);
            observer.notifyLastWith(value);

            expect(callBack1).not.toHaveBeenCalled();
            expect(callBack2).toHaveBeenCalledWith(value);
            expect(callBack2).toHaveBeenCalledTimes(1);

        });

        it("check notification of only one subscriber using notifyLastWith() without parameters", () => {
             const cb = jest.fn((x) => x);

             observer.subscribe(cb);
             observer.notifyLastWith();

             expect(cb).toHaveBeenCalledTimes(1);
        });

        it("check that if subscriber store is empty, no error will be thrown", () => { 
            expect(() => observer.notifyLastWith()).not.toThrowError(Error);
        });
    });
});

