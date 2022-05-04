import React, { useEffect, useState } from "react";
import {
    subscribeToUpbeatSample,
    setUpbeatSample,
    subscribeToDownbeatSample,
    setDownbeatSample,
} from "../../application/sampleUseCases";
export const Sound = ({ type, sampleNames }) => {
    let options;
    if (type === "upbeat") {
        options = {
            name: "upbeat",
            subscribeFn: subscribeToUpbeatSample,
            setFn: setUpbeatSample,
        };
    } else if (type === "downbeat") {
        options = {
            name: "downbeat",
            subscribeFn: subscribeToDownbeatSample,
            setFn: setDownbeatSample,
        };
    }

    const [value, setValue] = useState("");

    useEffect(() => {
        options.subscribeFn(setValue, true);
    }, [options]);

    return (
        <div>
            <span>{options.name + " " + value}</span>
            <div>
                <select
                    className="no-outline"
                    value={value}
                    onChange={(e) => {
                        options.setFn(e.target.value);
                    }}
                >
                    {Object.values(sampleNames).map((name) => (
                        <option key={name} value={name}>
                            {name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};
