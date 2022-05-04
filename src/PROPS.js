export const PROPS = {
    BEAT: {
        INITIAL_VALUE: 4,
        RANGE: { from: 1, to: 16 },
    },
    BPM: {
        INITIAL_VALUE: 120,
        RANGE: { from: 20, to: 240 },
    },
    DURATION: {
        INITIAL_VALUE: 4,
        AVAILABLE: [1, 2, 4, 8, 16],
    },
    SAMPLE: {
        AVAILABLE: ["claves", "drumstick", "bongo", "woodblock"],
        UPBEAT_INITIAL_VALUE: "claves",
        DOWNBEAT_INITIAL_VALUE: "drumstick",
    }
};


