class EventEmitter {
    constructor() {
        this.events = {};
    }

    addEventListener(event, listener) {
        if (typeof this.events[event] !== 'object') {
            this.events[event] = [];
        }
        this.events[event].push(listener);
        return listener;
    }

    removeListener(event, listener) {
        if (typeof this.events[event] === 'object') {
            const idx = this.events[event].indexOf(listener);
            if (idx > -1) {
                this.events[event].splice(idx, 1);
            }
            if (this.events[event].length === 0) {
                delete this.events[event];
            }
        }
    }

    emit(event, ...args) {
        console.log("Event emitted");
        if (typeof this.events[event] === 'object') {
            this.events[event].forEach((listener) => {
                try {
                    listener.apply(this, args);
                } catch (e) {
                    console.log('EventEmitter Error', e);
                }
            });
        }
    }
}

const events = new EventEmitter();
export default events;
