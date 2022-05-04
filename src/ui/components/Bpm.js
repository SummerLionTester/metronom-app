import React, { useEffect, useState } from "react";
import {
    subscribeToBpm,
    increaseBpm,
    decreaseBpm,
    setBpm,
} from "../../application/bpmUseCases";
import { PROPS } from "../../PROPS";
import { heldHandler } from "../handlers/heldHandler";

const heldButtonHandler = heldHandler();

export const Bpm = () => {
    const [value, setValue] = useState(0);
    const STEP = 1;
    const HELD_DELAY = 35;

    useEffect(() => {
        subscribeToBpm(setValue, true);
    }, []);

    return (
        <div>
            <span>{value} BPM</span>
            <div>
                <button
                    onMouseDown={(e) =>
                        heldButtonHandler(
                            e,
                            decreaseBpm.bind(null, STEP),
                            HELD_DELAY
                        )
                    }
                >
                    -
                </button>
                <input
                    type="range"
                    step={STEP}
                    min={PROPS.BPM.RANGE.from}
                    max={PROPS.BPM.RANGE.to}
                    value={value}
                    onInput={(e) => setBpm(parseInt(e.target.value))}
                />
                <button
                    onMouseDown={(e) =>
                        heldButtonHandler(
                            e,
                            increaseBpm.bind(null, STEP),
                            HELD_DELAY
                        )
                    }
                >
                    +
                </button>
            </div>
        </div>
    );
};
