import React, { useEffect, useState } from "react";
import {Button} from "antd";
import {PlusOutlined, MinusOutlined} from "@ant-design/icons";
import { heldHandler } from "../handlers/heldHandler";
import {
    subscribeToBeat,
    decreaseBeat,
    increaseBeat,
} from "../../application/beatUseCases";

export const Beat = () => {
    const [value, setValue] = useState(0);
    const STEP = 1;
    const HELD_DELAY = 100;
    const heldButtonHandler = heldHandler();

    useEffect(() => {
        subscribeToBeat(setValue, true);
    }, []);
    
    return (
        <div style={{marginBottom: "1rem"}}>
            <Button type="primary" shape="circle" icon={<MinusOutlined />} onMouseDown={(e) =>
                heldButtonHandler(
                    e,
                    decreaseBeat.bind(null, STEP),
                    HELD_DELAY
                )
            }/>
            <span style={{margin: "0 .5rem", fontSize: "1.5rem"}}>{value} beat</span>
            <Button type="primary" shape="circle"  icon={<PlusOutlined/>} onMouseDown={(e) =>
                heldButtonHandler(
                    e,
                    increaseBeat.bind(null, STEP),
                    HELD_DELAY
                )
            }/>
        </div>
    );
};
