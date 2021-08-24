import { useEffect } from "react"
import { useWelcomeMessage } from "./WelcomeMessageProvider";

export default function WelcomeContainer({ children }) {

    const [welcomeMessageContext, collectWelcomeMessage ] = useWelcomeMessage();

    useEffect(collectWelcomeMessage, []);

    return (<div>{children}</div>)

}
