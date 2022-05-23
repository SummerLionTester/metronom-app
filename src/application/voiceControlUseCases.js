export const VoiceControl = class {
    constructor(speechRecognition, commandExecuter) {
        this.speechRecognition = speechRecognition;
        this.commandExecutor = commandExecuter;
        this.speechRecognition.subscribe(
            "RECOGNIZED_TEXT",
            this.commandExecutor.execute.bind(this.commandExecutor)
        );
        this.commandExecutor.setDisableVoiceControlFn(
            this.speechRecognition.turnOff.bind(this.speechRecognition)
        );
    }

    toggle() { 
        this.speechRecognition.toggle();
    } 

    subscribe(to, cb) { 
        if (to === "STATE") { 
            this.speechRecognition.subscribe("STATE", cb);
        }
    }
};