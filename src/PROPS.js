export const PROPS = {
    BEAT: {
        INITIAL_VALUE: 1,
        RANGE: { from: 1, to: 12 }
    },
    BPM: {
        INITIAL_VALUE: 20,
        RANGE: { from: 20, to: 240 },
    },
    DURATION: {
        INITIAL_VALUE: 4,
        AVAILABLE: [1, 2, 4, 8, 16],
    },
    SAMPLE: {
        INITIAL_VALUE: "claves",
        AVAILABLE: ["claves", "drumstick", "bongo", "woodblock"]
    }
};


