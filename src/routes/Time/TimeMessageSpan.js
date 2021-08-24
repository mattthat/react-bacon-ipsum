import "@fontsource/roboto";
import Typography from "@material-ui/core/Typography";
import { useTimeMessage } from "./TimeMessageProvider";

export default function TimeMessageSpan() {

    const [timeMessageContext, collectTimeMessage] = useTimeMessage();

    return (
        <span>
            <Typography variant="h2" component="h2">{timeMessageContext.time}</Typography>
        </span>
    )
}
