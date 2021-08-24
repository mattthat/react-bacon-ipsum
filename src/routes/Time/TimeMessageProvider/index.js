import { useContext } from "react"
import TimeMessageContext from "./TimeMessageContext"
export { default } from "./TimeMessageProvider.js"

export function useTimeMessage() {
    return useContext(TimeMessageContext)
}
