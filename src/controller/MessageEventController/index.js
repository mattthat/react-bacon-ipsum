
export default class MessageEventController {

    constructor(element = window, eventName = "message") {
        this.element = element;
        this.eventName = eventName;
    }

    subscribe(onPublish) {
        this.element.addEventListener(this.eventName,
            onPublish.bind(this))
    }

    unsubscribe(onPublish) {
        this.element.removeEventListener(this.eventName,
            onPublish.bind(this))
    }

    publish(message) {
        this.element.dispatchEvent(
            new CustomEvent(this.eventName, { detail: message }))
    }
}
