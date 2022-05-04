import React, { useEffect, useState, useRef } from "react";

export const PlayerButton = ({ sequencer }) => {
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
        <div>
            {isRunning ? (
                <button ref={buttonRef} onClick={() => sequencer.stop()}>
                    Stop
                </button>
            ) : (
                <button ref={buttonRef} onClick={() => sequencer.play()}>
                    Play
                </button>
            )}
        </div>
    );
};
