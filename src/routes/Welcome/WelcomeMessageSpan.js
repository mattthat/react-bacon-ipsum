import "@fontsource/roboto";
import Typography from "@material-ui/core/Typography";
import { useWelcomeMessage } from "./WelcomeMessageProvider";
import "./Welcome.css";

export default function WelcomeMessageSpan() {

    const [welcomeMessageContext] = useWelcomeMessage();

    return (
        <span className={ welcomeMessageContext.error ? "WelcomeMessageSpanError" : "" }>
            <Typography variant="h2" component="h2">{welcomeMessageContext.content}</Typography>
        </span>
    )
}
