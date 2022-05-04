import { Observer } from "../../lib/Observer";
import { loadAudioAsBuffersMap } from "./loadAudioAsBuffersMap";

export const WebAudioSequncer = class {
    #audio;
    #audioContext;
    #audioBufferMap;
    #observer;
    #source;

    constructor(audioContext, audio) {
        this.#audio = audio;
        this.#audioContext = audioContext;
        this.#audioBufferMap = null;
        this.#observer = new Observer();
        this.sequence = null;
        this.beatIterator = null;
        this.bpm = null;
        this.duration = null;
        this.upbeatSample = null;
        this.downBeatSample = null;
        this.#source = null;
    }

    async loadAudio() {
        this.#audioBufferMap = await loadAudioAsBuffersMap(
            this.#audio,
            this.#audioContext
        );
    }

    play() {
        if (!this.isRunning()) {
            let nextStartTime = this.#audioContext.currentTime;
            const runSamples = () => {
                const nextBeat = this.beatIterator.next().value;
                this.#source = this.#audioContext.createBufferSource();

                this.#source.buffer = this.#audioBufferMap.get(
                    nextBeat === "UPBEAT"
                        ? this.upbeatSample
                        : this.downBeatSample
                );

                this.#source.connect(this.#audioContext.destination);
                this.#source.start(nextStartTime);
                this.#source.onended = runSamples;
                nextStartTime += 60 / (this.bpm * (this.duration / 4));

                this.#observer.notifyAllWith(this.isRunning());
            };

            runSamples();
            this.#audioContext.resume();
        }
    }

    stop() {
        this.#audioContext.suspend();
        if (this.#source) this.#source.buffer = null;
        this.#observer.notifyAllWith(this.isRunning());
    }

    isRunning() {
        return this.#audioContext.state === "running";
    }

    setBeat(value) {
        this.sequence = createSequence(value);
        this.beatIterator = createSequenceIterator(this.sequence);
    }

    setBpm(value) {
        this.bpm = value;
    }

    setDuration(value) {
        this.duration = value;
    }

    setUpbeatSample(value) {
        this.upbeatSample = value;
    }

    setDownbeatSample(value) {
        this.downBeatSample = value;
    }

    subscribeToState(cb) {
        this.#observer.subscribe(cb);
    }
};

const createSequence = (beat) => {
    return Array(Number(beat))
        .fill("")
        .map((_, index) => {
            if (index === 0) {
                return "UPBEAT";
            } else {
                return "DOWNBEAT";
            }
        });
};

const createSequenceIterator = function* (sequence) {
    let currentBeatIndex = 0;
    const lastBeatIndex = sequence.length - 1;

    while (true) {
        yield sequence[currentBeatIndex];
        currentBeatIndex++;
        if (currentBeatIndex > lastBeatIndex) {
            currentBeatIndex = 0;
        }
    }
};
