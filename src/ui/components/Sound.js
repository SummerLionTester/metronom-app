import React, {useEffect, useState} from "react";
import {Select, Typography} from 'antd';
import {
    subscribeToUpbeatSample,
    setUpbeatSample,
    subscribeToDownbeatSample,
    setDownbeatSample,
} from "../../application/sampleUseCases";

const {Option} = Select;
const {Title} = Typography;

export const Sound = ({type, sampleNames}) => {
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
        <div style={{width: "9rem"}}>
            <Title level={4}>{options.name}</Title>
            <Select style={{width: "8rem", fontSize: "1.2rem"}} value={value} onChange={(value) => {
                options.setFn(value);
            }}>
                {Object.values(sampleNames).map((name) => (
                    <Option style={{fontSize: "1.2rem"}} key={name}>
                        {name}
                    </Option>
                ))}
            </Select>
        </div>
    );
};
