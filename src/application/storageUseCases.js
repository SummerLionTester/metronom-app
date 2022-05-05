import { ENTITIES } from "../ENTITIES";
import { setBeat, subscribeToBeat } from "./beatUseCases";
import { setBpm, subscribeToBpm } from "./bpmUseCases";
import { setDuration, subscribeToDuration } from "./durationUseCases";
import { setDownbeatSample, setUpbeatSample, subscribeToUpbeatSample } from "./sampleUseCases";
import { subscribeToDownbeatSample } from "./sampleUseCases";

export const Storage = class {
    constructor(storage) {
        this.storage = storage;
        subscribeToBeat(this.saveBeat.bind(this), false);
        subscribeToBpm(this.saveBpm.bind(this), false);
        subscribeToDuration(this.saveDuration.bind(this), false);
        subscribeToUpbeatSample(
            this.saveUpbeatSample.bind(this),
            false
        );
        subscribeToDownbeatSample(
            this.saveDownbeatSample.bind(this),
            false
        );
    }

    save(key, value) {
        this.storage.set(key, value);
    }

    saveBeat(value) {
        this.save(ENTITIES.BEAT, value);
    }

    saveBpm(value) {
        this.save(ENTITIES.BPM, value);
    }

    saveDuration(value) {
        this.save(ENTITIES.DURATION, value);
    }

    saveUpbeatSample(value) {
        this.save(ENTITIES.UPBEAT_SAMPLE, value);
    }

    saveDownbeatSample(value) {
        this.save(ENTITIES.DOWNBEAT_SAMPLE, value);
    }

    async loadPreset() {
        const beat = await this.storage.get(ENTITIES.BEAT);
        const bpm = await this.storage.get(ENTITIES.BPM);
        const duration = await this.storage.get(ENTITIES.DURATION);
        const upbeatSample = await this.storage.get(ENTITIES.UPBEAT_SAMPLE);
        const downbeatSample = await this.storage.get(ENTITIES.DOWNBEAT_SAMPLE);

        if (beat) setBeat(beat);
        if (bpm) setBpm(bpm);
        if (duration) setDuration(duration);
        if (upbeatSample) setUpbeatSample(upbeatSample);
        if (downbeatSample) setDownbeatSample(downbeatSample);
    }
};
