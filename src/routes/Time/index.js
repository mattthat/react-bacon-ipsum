import TimeContainer from "./TimeContainer";
import TimeMessageSpan from "./TimeMessageSpan";
import TimeMessageProvider from "./TimeMessageProvider";

export function Time() {
    return (
        <TimeMessageProvider>
            <TimeContainer>
                <TimeMessageSpan />
            </TimeContainer>
        </TimeMessageProvider>
    )
}
