import { subscribeToBeat } from "./beatUseCases";
import { subscribeToBpm } from "./bpmUseCases";
import { subscribeToDuration } from "./durationUseCases";
import { subscribeToUpbeatSample } from "./sampleUseCases";
import { subscribeToDownbeatSample } from "./sampleUseCases";
 
export const Sequenser = class  {
    #sequencer;

    constructor(sequencer) {
        this.#sequencer = sequencer;
        subscribeToBeat(this.#sequencer.setBeat.bind(this));
        subscribeToBpm(this.#sequencer.setBpm.bind(this));
        subscribeToDuration(this.#sequencer.setDuration.bind(this));
        subscribeToUpbeatSample(this.#sequencer.setUpbeatSample.bind(this));
        subscribeToDownbeatSample(this.#sequencer.setDownbeatSample.bind(this));
    }

    play() {
        this.#sequencer.play();
    }

    stop() { 
        this.#sequencer.stop();
    }

    subscribeToState(updateCb) { 
        this.#sequencer.subscribeToState(updateCb);
    }
}
