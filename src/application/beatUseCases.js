import { createBeat } from "../domain/beat/createBeat";
import { PROPS } from "../PROPS";

const beat = createBeat(PROPS.BEAT.INITIAL_VALUE, PROPS.BEAT.RANGE);

const setBeat = (value) => beat.setValue(value);

const increaseBeat = (step) => beat.increaseValueBy(step);

const decreaseBeat = (step) => beat.decreaseValueBy(step);

const subscribeToBeat = (updateCb) => beat.subscribe(updateCb);

export { setBeat, increaseBeat, decreaseBeat, subscribeToBeat };
