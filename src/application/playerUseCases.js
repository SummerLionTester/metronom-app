import { subscribeToBeat } from "./beatUseCases";
import { subscribeToBpm } from "./bpmUseCases";
import { subscribeToDuration } from "./durationUseCases";
import { subscribeToUpbeatSample } from "./sampleUseCases";
import { subscribeToDownbeatSample } from "./sampleUseCases";

export const Sequencer = class {
    constructor(sequencer) {
        this.sequencer = sequencer;
        subscribeToBeat(this.sequencer.setBeat.bind(this.sequencer), true);
        subscribeToBpm(this.sequencer.setBpm.bind(this.sequencer), true);
        subscribeToDuration(
            this.sequencer.setDuration.bind(this.sequencer),
            true
        );
        subscribeToUpbeatSample(
            this.sequencer.setUpbeatSample.bind(this.sequencer),
            true
        );
        subscribeToDownbeatSample(
            this.sequencer.setDownbeatSample.bind(this.sequencer),
            true
        );
    }

    async loadAudio() {
        await this.sequencer.loadAudio();
    }

    play() {
        this.sequencer.play();
    }

    stop() {
        this.sequencer.stop();
    }

    subscribeToState(updateCb) {
        this.sequencer.subscribeToState(updateCb);
    }
};
