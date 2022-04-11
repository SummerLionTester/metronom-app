import { MetronomEntity } from "../MetronomEntity";
import { createSample } from "./createSample";

describe("Function createBeat", () => {
    it("shuld return a new instace of MetronomEntity", () => {
        expect(createSample("stick", ["stick", "drums"])).toBeInstanceOf(
            MetronomEntity
        );
    });
});
