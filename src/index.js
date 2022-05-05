import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Sequencer } from "./application/playerUseCases";
import { WebAudioSequncer } from "./services/sequencer/WebAudioSequencer";
import { PROPS } from "./PROPS";
import { Storage } from "./application/storageUseCases";
import { LocalStorageAdapter } from "./services/storage/LocalStorageAdapter";

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const sequencer = new Sequencer(
    new WebAudioSequncer(audioContext, PROPS.SAMPLE.AVAILABLE)
);
const storage = new Storage(new LocalStorageAdapter());

ReactDOM.render(
    <React.StrictMode>
        <App sequencer={sequencer} storage={storage} />
    </React.StrictMode>,
    document.getElementById("root")
);
