import { useContext } from "react"
import WelcomeMessageContext from "./WelcomeMessageContext"
export { default } from "./WelcomeMessageProvider"

export function useWelcomeMessage() {
    return useContext(WelcomeMessageContext)
}
