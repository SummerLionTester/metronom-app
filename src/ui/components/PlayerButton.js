import React, {useEffect, useState, useRef} from "react";
import {Button} from "antd";
import {PlayCircleFilled, PauseCircleFilled} from "@ant-design/icons";

export const PlayerButton = ({sequencer}) => {
    const [isRunning, setIsRunning] = useState(false);
    const buttonRef = useRef(null);

    useEffect(() => {
        sequencer.subscribeToState(setIsRunning);
        const playerButtonHandler = (e) => {
            if (
                e.key.toLowerCase() === "spacebar" ||
                e.key.toLowerCase() === " "
            ) {
                buttonRef.current.click();
            }
        };
        window.addEventListener("keyup", playerButtonHandler);

        return () => {
            window.removeEventListener("keyup", playerButtonHandler);
        };
    }, [sequencer]);

    return (
        <div style={{margin: "1.2rem auto 1.5rem auto"}}>
            {isRunning ? (
                <Button ref={buttonRef} style={{width: "5rem", height: "3rem",display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}
                        type="primary" shape="round"
                        icon={<PauseCircleFilled style={{fontSize: '2rem', verticalAlign: 'middle'}}/>}
                        onClick={() => sequencer.stop()}/>

            ) : (
                <Button ref={buttonRef} style={{width: "5rem", height: "3rem",display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}
                        type="primary" shape="round"
                        icon={<PlayCircleFilled style={{fontSize: '2rem', verticalAlign: 'middle'}}/>}
                        onClick={() => sequencer.play()}/>
            )}
        </div>
    );
};
