import React, {useEffect, useState} from "react";
import {Button, Slider} from "antd";
import {PlusOutlined, MinusOutlined} from "@ant-design/icons";
import {
    subscribeToBpm,
    increaseBpm,
    decreaseBpm,
    setBpm,
} from "../../application/bpmUseCases";
import {PROPS} from "../../PROPS";
import {heldHandler} from "../handlers/heldHandler";

const heldButtonHandler = heldHandler();

export const Bpm = () => {
    const [value, setValue] = useState(0);
    const STEP = 1;
    const HELD_DELAY = 35;

    useEffect(() => {
        subscribeToBpm(setValue, true);
    }, []);

    return (
        <div style={{marginTop:"2rem"}}>
            <h1 style={{fontSize:"3rem"}}>{value} BPM</h1>
            <div style={{display: "flex", justifyContent: "center", textAlign: "center"}}>

                <Button style={{width:"3.2rem", height: "3.2rem"}} type="primary" shape="circle"  icon={<MinusOutlined/>} onMouseDown={(e) =>
                    heldButtonHandler(
                        e,
                        decreaseBpm.bind(null, STEP),
                        HELD_DELAY
                    )
                }/>
                <Slider min={PROPS.BPM.RANGE.from}
                        max={PROPS.BPM.RANGE.to}
                        step={STEP}
                        value={value}
                        tooltipVisible={false}
                        onChange={(value) => setBpm(parseInt(value))}
                        style={{width: "50%", margin:"auto 2rem"}}
                />
                <Button style={{width:"3.2rem", height: "3.2rem"}} type="primary" shape="circle" size="large" icon={<PlusOutlined/>} onMouseDown={(e) =>
                    heldButtonHandler(
                        e,
                        increaseBpm.bind(null, STEP),
                        HELD_DELAY
                    )
                }/>
            </div>
        </div>
    );
};
