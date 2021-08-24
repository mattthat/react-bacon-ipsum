import TimeMessageContext from "./TimeMessageContext"
import { useState } from "react";
import TimeMessage from "../../../models/TimeMessage";

export default function TimeMessageProvider({ children }) {

    const [timeMessage, setTimeMessage] = useState({});

    const collectTimeMessage = () => setTimeMessage(new TimeMessage(new Date().toString()))

    return <TimeMessageContext.Provider value={[timeMessage, collectTimeMessage]}>{children}</TimeMessageContext.Provider>
}
