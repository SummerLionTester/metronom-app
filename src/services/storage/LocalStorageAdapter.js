export const LocalStorageAdapter = class {
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    get(key) {
        return JSON.parse(localStorage.getItem(key));
    }
};
