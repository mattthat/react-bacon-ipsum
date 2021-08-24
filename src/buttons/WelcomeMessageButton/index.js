import Button from "@material-ui/core/Button";
import BaconIpsumAxiosService from "../../services/Axios/BaconIpsumAxiosService";
import useMessageOrchestration from "../../orchestrators/Message/useMessageOrchestration/";
import WelcomeMessage from "../../models/WelcomeMessage";

export default function WelcomeMessageButton() {
    const { dispatchWelcomeMessage } = useMessageOrchestration(window.opener);

    const onClick = () =>
        new BaconIpsumAxiosService()
            .getBaconIpSum()
            .then(response => dispatchWelcomeMessage(
                new WelcomeMessage(response.data[0], false)))
            .catch(error => dispatchWelcomeMessage(
                new WelcomeMessage(error.toString(),true)));

    return (<Button color="primary" onClick={onClick.bind(this)}>Welcome</Button>)
}
