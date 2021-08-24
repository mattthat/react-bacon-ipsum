import { useEffect } from "react"
import { useTimeMessage } from "./TimeMessageProvider";

export default function TimeContainer({ children }) {

    const [timeMessageContext, collectTimeMessage ] = useTimeMessage();

    useEffect(collectTimeMessage, []);

    return (<div>{children}</div>)

}
