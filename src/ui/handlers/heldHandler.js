export const heldHandler = () => {
    let timeout;
    let interval;
    const delayBeforeFirstCbMs = 400;

    const clearTimers = () => {
        clearTimeout(timeout);
        clearInterval(interval);
    };

    return (event, cb, delayBetweenCb) => {
        cb();
        timeout = setTimeout(() => {
            interval = setInterval(() => {
                cb();
            }, delayBetweenCb);
        }, delayBeforeFirstCbMs);

        event.target.addEventListener("mouseup", () => clearTimers());
        event.target.addEventListener("mouseleave", () => clearTimers());

        event.target.removeEventListener("mouseup", () => clearTimers());
        event.target.removeEventListener("mouseleave", () => clearTimers());
    }
}