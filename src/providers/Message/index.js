import { useContext } from "react"
import MessageContext from "./MessageContext"
export { default } from "./MessageProvider"

export function useMessage() {
    return useContext(MessageContext)
}
