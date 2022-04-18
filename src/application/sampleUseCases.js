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

const subscribeToUpbeatSample = (updateCb, isNeededInitialData) =>
    upbeatSample.subscribe(updateCb, isNeededInitialData);

const subscribeToDownbeatSample = (updateCb, isNeededInitialData) =>
    downbeatSample.subscribe(updateCb, isNeededInitialData);

export {
    setUpbeatSample,
    setDownbeatSample,
    subscribeToUpbeatSample,
    subscribeToDownbeatSample,
};
