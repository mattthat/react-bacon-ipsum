import Button from "@material-ui/core/Button";
import useMessageOrchestration from "../../orchestrators/Message/useMessageOrchestration";
import TimeMessage from "../../models/TimeMessage";

export default function TimeMessageButton() {
    const { dispatchTimeMessage } = useMessageOrchestration(window.opener);

    const onClick = () => dispatchTimeMessage(new TimeMessage(new Date().toString()));

    return (<Button color="primary" onClick={onClick.bind(this)}>Time</Button>)
}
