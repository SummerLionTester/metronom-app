import { Observer } from "../../lib/Observer";

export const BrowserSpeechRecognition = class {
    #speechRecognitionList;
    #grammar;
    #recognizedTextObserver;

    constructor() {
        this.recognition = new (window.SpeechRecognition ||
            window.webkitSpeechRecognition)();
        this.#speechRecognitionList = new (window.SpeechGrammarList ||
            window.webkitSpeechGrammarList)();
        this.#grammar = "#JSGF V1.0;";
        this.#speechRecognitionList.addFromString(this.#grammar, 1);
        this.recognition.grammars = this.#speechRecognitionList;
        this.recognition.lang = "en-US";
        this.recognition.continuous = false;
        this.recognition.interimResults = false;
        this.isListens = false;
        this.#recognizedTextObserver = new Observer();
        this.stateObserver = new Observer();

        this.recognition.addEventListener("end", () => {
            if (this.isListens) {
                this.turnOn();
            }
        });

        this.recognition.addEventListener("result", (e) => {
            const last = e.results.length - 1;
            const recognizedSpeechText = e.results[last][0].transcript;
            this.#recognizedTextObserver.notifyAllWith(recognizedSpeechText);
        });
    }

    turnOn() {
        this.isListens = true;
        this.recognition.start();
        this.stateObserver.notifyAllWith(this.isListens);
    }

    turnOff() {
        this.isListens = false;
        this.recognition.abort();
        this.stateObserver.notifyAllWith(this.isListens);
    }

    toggle() {
        this.isListens ? this.turnOff() : this.turnOn();
    }

    subscribe(type, cb) {
        if (type === "RECOGNIZED_TEXT") {
            this.#recognizedTextObserver.subscribe(cb);
        } else if (type === "STATE") {
            this.stateObserver.subscribe(cb);
        }
    }
};