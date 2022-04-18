import { subscribeToBeat } from "./beatUseCases";
import { subscribeToBpm } from "./bpmUseCases";
import { subscribeToDuration } from "./durationUseCases";
import { subscribeToUpbeatSample } from "./sampleUseCases";
import { subscribeToDownbeatSample } from "./sampleUseCases";
 
export const Sequencer = class  {
    #sequencer;

    constructor(sequencer) {
        this.#sequencer = sequencer;
        subscribeToBeat(this.#sequencer.setBeat.bind(this), true);
        subscribeToBpm(this.#sequencer.setBpm.bind(this), true);
        subscribeToDuration(this.#sequencer.setDuration.bind(this), true);
        subscribeToUpbeatSample(this.#sequencer.setUpbeatSample.bind(this), true);
        subscribeToDownbeatSample(this.#sequencer.setDownbeatSample.bind(this), true);
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
