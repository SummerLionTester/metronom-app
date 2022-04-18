import { createDuration } from "../domain/duration/createDuration";
import { PROPS } from "../PROPS";

const duration = createDuration(
    PROPS.DURATION.INITIAL_VALUE,
    PROPS.DURATION.AVAILABLE
);

const setDuration = (value) => duration.setValue(value);

const subscribeToDuration = (updateCb, isNeededInitialData) =>
    duration.subscribe(updateCb, isNeededInitialData);

export { setDuration, subscribeToDuration };
