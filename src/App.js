import "./App.css";
import React, { useEffect } from "react";
import { PlayerButton } from "./ui/components/PlayerButton";
import { Bpm } from "./ui/components/Bpm";
import { Beat } from "./ui/components/Beat";
import { Duration } from "./ui/components/Duration";
import { Sound } from "./ui/components/Sound";
import { PROPS } from "./PROPS";

const App = ({ sequencer, storage }) => {
    useEffect(() => {
        const init = async () => {
            await sequencer.loadAudio();
            await storage.loadPreset();
        };
        init();
    }, [sequencer, storage]);

    return (
        <div className="App">
            <Bpm />
            <PlayerButton sequencer={sequencer} />
            <Beat />
            <div>
                <Sound type={"upbeat"} sampleNames={PROPS.SAMPLE.AVAILABLE} />
                <Sound type={"downbeat"} sampleNames={PROPS.SAMPLE.AVAILABLE} />
            </div>
            <Duration />
        </div>
    );
};

export default App;
