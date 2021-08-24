import MessageEventController from "../../../controller/MessageEventController";

export default function useMessageOrchestration(element = window) {

    const welcomeMessageEventController = new MessageEventController(element,
        "welcome-message");
    const timeMessageEventController = new MessageEventController(element,
        "time-message");

    const subscribePublishWelcomeMessage = (onPublishWelcomeMessage) =>
        welcomeMessageEventController.subscribe(onPublishWelcomeMessage);

    const subscribePublishTimeMessage = (onPublishTimeMessage) =>
        timeMessageEventController.subscribe(onPublishTimeMessage);

    const unsubscribePublishWelcomeMessage = (onPublishWelcomeMessage) =>
        welcomeMessageEventController.unsubscribe(onPublishWelcomeMessage);

    const unsubscribePublishTimeMessage = (onPublishTimeMessage) =>
        timeMessageEventController.unsubscribe(onPublishTimeMessage);

    const dispatchWelcomeMessage = (welcomeMessage) =>
        welcomeMessageEventController.publish(welcomeMessage);

    const dispatchTimeMessage = (timeMessage) =>
        timeMessageEventController.publish(timeMessage);

    return ({subscribePublishWelcomeMessage, subscribePublishTimeMessage,
    unsubscribePublishWelcomeMessage, unsubscribePublishTimeMessage, dispatchWelcomeMessage,
    dispatchTimeMessage})
}
