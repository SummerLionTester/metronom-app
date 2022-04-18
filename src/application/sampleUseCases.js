import { createSample } from "../domain/sample/createSample";
import { PROPS } from "../PROPS";

const upbeatSample = createSample(
    PROPS.SAMPLE.INITIAL_VALUE,
    PROPS.SAMPLE.AVAILABLE
);

const downbeatSample = createSample(
    PROPS.SAMPLE.INITIAL_VALUE,
    PROPS.SAMPLE.AVAILABLE
);

const setUpbeatSample = (value) => upbeatSample.setValue(value);

const setDownbeatSample = (value) => downbeatSample.setValue(value);

const subscribeToUpbeatSample = (updateCb) => upbeatSample.subscribe(updateCb);

const subscribeToDownbeatSample = (updateCb) =>
    downbeatSample.subscribe(updateCb);

export {
    setUpbeatSample,
    setDownbeatSample,
    subscribeToUpbeatSample,
    subscribeToDownbeatSample,
};
