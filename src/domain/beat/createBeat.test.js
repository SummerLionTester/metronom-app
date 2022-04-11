import { MetronomEntity } from "../MetronomEntity";
import { createBeat } from "./createBeat";

describe("Function createBeat", () => {
    it("shuld return a new instace of MetronomEntity", () => {
        expect(createBeat(1, { from: 1, to: 12 })).toBeInstanceOf(
            MetronomEntity
        );
    });
});
