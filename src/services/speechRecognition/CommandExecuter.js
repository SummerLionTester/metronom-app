import { decreaseBpm, increaseBpm, setBpm } from "../../application/bpmUseCases";

export const CommandExecuter = class {
    #sequencer;
    #disableVoiceControl;

    constructor(sequencer) {
        this.#sequencer = sequencer;
        this.#disableVoiceControl = () => { };
    }

    setDisableVoiceControlFn(cb) {
        this.#disableVoiceControl = cb;
    }

    execute(command) {
        const text = command.toLowerCase();

        if (text.startsWith("run")) {
            this.#sequencer.play();
        }
        if (text.startsWith("stop")) {
            this.#sequencer.stop();
        }
        if (text.startsWith("set")) {
            const value = text.split("set")[1].trim();
            setBpm(parseInt(value) || NUMBER_MAP[value]);
        }
        if (text.startsWith("increase by")) {
            const value = text.split("increase by")[1].trim();
            increaseBpm(parseInt(value) || NUMBER_MAP[value]);
        }
        if (text.startsWith("decrease by")) {
            const value = text.split("decrease by")[1].trim();
            decreaseBpm(parseInt(value) || NUMBER_MAP[value]);
        }
        if (text.startsWith("disable voice control")) {
            this.#disableVoiceControl();
        }
    }
};

const NUMBER_MAP = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
};