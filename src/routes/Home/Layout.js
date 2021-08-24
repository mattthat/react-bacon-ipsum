import Typography from "@material-ui/core/Typography";
import { useMessage } from "../../providers/Message";

export default function Layout() {

    const [messageContext, setMessageContext] = useMessage();

    return (
        <div>
            <span>
                <Typography variant="h2" component="h2">{messageContext.timeMessage.time}</Typography>
                <Typography variant="h2" component="h2">{messageContext.welcomeMessage.content}</Typography>
            </span>
        </div>
    )
}
