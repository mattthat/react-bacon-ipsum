import Button from "@material-ui/core/Button";
import Layout from "./Layout";
import MessageProvider from "../../providers/Message";
import MessageOrchestrator from "../../orchestrators/Message";

export function Home() {

    const onClick = () => window.open("/another-window", "another-window", "height=600, width=800");

    return (
        <>
            <Button color="primary" onClick={onClick.bind(this)}>Another window</Button>
            <br />
            <br />
            <MessageProvider>
                <MessageOrchestrator />
                <Layout />
            </MessageProvider>
        </>
    )
}
