import { MetronomEntity } from "../MetronomEntity";
import { createDuration } from "./createDuration";

describe("Function createDuration", () => {
    it("shuld return a new instace of MetronomEntity", () => {
        expect(createDuration(1, [1, 2, 4])).toBeInstanceOf(
            MetronomEntity
        );
    });
});