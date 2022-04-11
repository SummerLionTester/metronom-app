import { MetronomEntity } from "../MetronomEntity";
import { createBpm } from "./createBpm";

describe("Function createBpm", () => {
    it("shuld return a new instace of MetronomEntity", () => {
        expect(createBpm(20, { from: 20, to: 240 })).toBeInstanceOf(
            MetronomEntity
        );
    });
});
