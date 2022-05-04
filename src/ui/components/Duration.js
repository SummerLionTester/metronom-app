import React, { useEffect, useState } from "react";
import {
    setDuration,
    subscribeToDuration,
} from "../../application/durationUseCases";
import { PROPS } from "../../PROPS";

export const Duration = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        subscribeToDuration(setValue, true);
    }, []);

    return (
        <div>
            {PROPS.DURATION.AVAILABLE.map((duration) => {
                return (
                    <div className="form_radio_btn" key={duration}>
                        <input
                            id={duration}
                            type="radio"
                            name="duration"
                            value={duration}
                            checked={value === duration}
                            onChange={(e) =>
                                setDuration(parseInt(e.target.value))
                            }
                        ></input>
                        <label htmlFor={duration}>{duration}</label>
                    </div>
                );
            })}
        </div>
    );
};
