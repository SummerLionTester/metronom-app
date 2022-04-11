import { MetronomEntity } from "./MetronomEntity";

describe("Class MetronomEntity", () => {
    const isNotValid = () => false;
    const isvalidFn = (x) => x > 0;
    const initialValue = 10;

    describe("method setValue", () => {
        let entity;
        let cb;
        beforeEach(() => {
            cb = jest.fn((x) => x);
            entity = new MetronomEntity(initialValue, isvalidFn);
        });

        it("should change current value, if passed value is valid", () => { 
            const passedValue = 1;    
            entity.subscribe(cb);

            entity.setValue(passedValue);

            expect(cb).toHaveBeenCalledWith(passedValue);
        });

        it("should not change current value, if passed value is not valid", () => {
            const passedValue = 0;
            entity.subscribe(cb);

            entity.setValue(passedValue);

            expect(cb).not.toHaveBeenCalled();
        });
    });

    describe("if parameter isValidFn return false in constructor", () => {
        expect(() => new MetronomEntity(initialValue, isNotValid)).toThrow(
            "Invalid initial value!"
        );
    });

    describe("if parameter isValidFn return true and isRanged = true or not passed", () => {
        it("if parametr isRanged = false, should not have increaseValueBy/decreaseValueBy", () => {
            const entity = new MetronomEntity(initialValue, isvalidFn, false);

            expect(typeof entity.increaseValueBy === "undefined").toBe(true);
            expect(typeof entity.decreaseValueBy === "undefined").toBe(true);
        });

        it("if parametr isRanged not passed, should not have increaseValueBy/decreaseValueBy", () => {
            const entity = new MetronomEntity(initialValue, isvalidFn);

            expect(typeof entity.increaseValueBy === "undefined").toBe(true);
            expect(typeof entity.decreaseValueBy === "undefined").toBe(true);
        });
    });

    describe("if parameter isValidFn return true and isRanged = true", () => {
        let entity;
        beforeEach(() => {
            entity = new MetronomEntity(initialValue, isvalidFn, true);
        });

        it("should have methods increaseValueBy/decreaseValueBy", () => {
            expect(typeof entity.increaseValueBy === "function").toBe(true);
            expect(typeof entity.decreaseValueBy === "function").toBe(true);
        });

        it("method increaseValueBy", () => {
            const cb = jest.fn((x) => x);
            const step = 1;
            const expected = initialValue + step;
            entity.subscribe(cb);

            entity.increaseValueBy(step);

            expect(cb).toHaveBeenCalledWith(expected);
        });

        it("method decreaseValueBy", () => {
            const cb = jest.fn((x) => x);
            const step = 1;
            const expected = initialValue - step;
            entity.subscribe(cb);

            entity.decreaseValueBy(step);

            expect(cb).toHaveBeenCalledWith(expected);
        });
    });
});
