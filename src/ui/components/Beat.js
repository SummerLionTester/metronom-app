import React, { useEffect, useState } from "react";
import { heldHandler } from "../handlers/heldHandler";
import {
    subscribeToBeat,
    decreaseBeat,
    increaseBeat,
} from "../../application/beatUseCases";

const heldButtonHandler = heldHandler();

export const Beat = () => {
    const [value, setValue] = useState(0);
    const STEP = 1;
    const HELD_DELAY = 100;

    useEffect(() => {
        subscribeToBeat(setValue, true);
    }, []);
    
    return (
        <div>
            <button
                onMouseDown={(e) =>
                    heldButtonHandler(
                        e,
                        decreaseBeat.bind(null, STEP),
                        HELD_DELAY
                    )
                }
            >
                -
            </button>
            <span>{value} beat</span>
            <button
                onMouseDown={(e) =>
                    heldButtonHandler(
                        e,
                        increaseBeat.bind(null, STEP),
                        HELD_DELAY
                    )
                }
            >
                +
            </button>
        </div>
    );
};
