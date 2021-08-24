import MessageContext from "./MessageContext"
import { useState } from "react";
import TimeMessage from "../../models/TimeMessage";
import WelcomeMessage from "../../models/WelcomeMessage";

export default function MessageProvider({ children }) {

    const [message, setMessage] = useState({timeMessage: new TimeMessage(),
        welcomeMessage: new WelcomeMessage()});

    return <MessageContext.Provider value={[message, setMessage]}>{children}</MessageContext.Provider>
}
