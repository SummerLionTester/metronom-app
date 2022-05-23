import React, {useState, useEffect} from "react";
import { Switch } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

export const VoiceControl = ({ voiceControl }) => {
    const [isOn, setIsOn] = useState(false);

    useEffect(() => {
        voiceControl.subscribe("STATE", setIsOn);
    }, [voiceControl]);

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1rem",
            }}
        >
            <label style={{ marginRight: "1rem", fontSize: "1.3rem" }}>
                Voice control
            </label>
            <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                checked={isOn}
                onChange={() => {
                    voiceControl.toggle();
                }}
            />
        </div>
    );
};
