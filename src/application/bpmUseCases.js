import { createBpm } from "../domain/bpm/createBpm";
import { PROPS } from "../PROPS";

const bpm = createBpm(PROPS.BPM.INITIAL_VALUE, PROPS.BPM.RANGE);

const setBpm = (value) => bpm.setValue(value);

const increaseBpm = (step) => bpm.increaseValueBy(step);

const decreaseBpm = (step) => bpm.decreaseValueBy(step);

const subscribeToBpm = (updateCb) => bpm.subscribe(updateCb);

export { setBpm, increaseBpm, decreaseBpm, subscribeToBpm };
