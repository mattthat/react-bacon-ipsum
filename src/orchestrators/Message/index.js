import {useEffect, useState} from "react";
import {useEffectAllDepsChange} from "../../hooks/useEffectAllDeps";
import { useMessage } from "../../providers/Message";
import useMessageOrchestration from "./useMessageOrchestration"
import WelcomeMessage from "../../models/WelcomeMessage";
import TimeMessage from "../../models/TimeMessage";

export default function MessageOrchestrator({ children }) {

    const [messageContext, setMessageContext ] = useMessage();
    const [timeMessage, setTimeMessage] = useState(new TimeMessage());
    const [welcomeMessage, setWelcomeMessage] = useState(new WelcomeMessage());
    const { subscribePublishTimeMessage, unsubscribePublishTimeMessage,
        subscribePublishWelcomeMessage, unsubscribePublishWelcomeMessage } = useMessageOrchestration(window);

    const onPublishWelcomeMessage = (welcomeMessageEvent) => setWelcomeMessage(welcomeMessageEvent.detail);

    const onPublishTimeMessage = (timeMessageEvent) => setTimeMessage(timeMessageEvent.detail);

    useEffect( () => {
        subscribePublishWelcomeMessage(onPublishWelcomeMessage.bind(this));
        subscribePublishTimeMessage(onPublishTimeMessage.bind(this));
        return () => {
            unsubscribePublishWelcomeMessage(onPublishWelcomeMessage.bind(this));
            unsubscribePublishTimeMessage(onPublishTimeMessage.bind(this));
        };
    }, [])

    useEffectAllDepsChange(() => {
        setMessageContext({
            welcomeMessage: welcomeMessage,
            timeMessage: timeMessage
        })
    }, [timeMessage.time, welcomeMessage.content])

    return ( <div>{children}</div> )
}
