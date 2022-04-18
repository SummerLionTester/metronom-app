export const loadAudioAsBuffersMap = (samples, audioContext) => {
    const buffersMap = new Map();
    const decodedAudio = samples.map((sample) =>
        decodeSample(loadAudio(sample, "wav"), audioContext)
    );

    return new Promise((resolve) => {
        Promise.all(decodedAudio)
            .then((decodedSamples) => {
                decodedSamples.forEach(({ name, decodedData }) =>
                    buffersMap.set(name, decodedData)
                );
            })
            .then(() => resolve(buffersMap));
    });
};

const loadAudio = (name, audioDigitalFormat) => {
    const path = `./audio/${name}.${audioDigitalFormat}`;
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", path);
        xhr.responseType = "arraybuffer";
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve({ name: name, data: xhr.response });
            } else {
                reject(xhr.status);
            }
        };
        xhr.send();
    });
};

const decodeSample = (loadedSamples, audioContext) => {
    return new Promise((resolve) => {
        loadedSamples.then((sample) =>
            audioContext.decodeAudioData(sample.data, (decodedData) => {
                resolve({
                    name: sample.name,
                    decodedData: decodedData,
                });
            })
        );
    });
};
