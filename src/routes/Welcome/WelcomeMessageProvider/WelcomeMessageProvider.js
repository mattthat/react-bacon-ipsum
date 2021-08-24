import WelcomeMessageContext from "./WelcomeMessageContext"
import { useState } from "react";
import BaconIpsumAxiosService from "../../../services/Axios/BaconIpsumAxiosService";
import WelcomeMessage from "../../../models/WelcomeMessage";

export default function WelcomeMessageProvider({ children }) {

    const [welcomeMessage, setWelcomeMessage] = useState({ content: "", error: false })

    const collectWelcomeMessage = () => new BaconIpsumAxiosService()
        .getBaconIpSum()
        .then(response =>
            setWelcomeMessage(new WelcomeMessage(response.data[0], false)))
        .catch(error =>
            setWelcomeMessage(new WelcomeMessage(error.toString(), true)))

    return <WelcomeMessageContext.Provider value={[welcomeMessage, collectWelcomeMessage]}>{children}</WelcomeMessageContext.Provider>
}
