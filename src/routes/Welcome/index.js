import WelcomeContainer from "./WelcomeContainer";
import WelcomeMessageSpan from "./WelcomeMessageSpan";
import WelcomeMessageProvider from "./WelcomeMessageProvider";

export function Welcome() {
    return (
        <WelcomeMessageProvider>
            <WelcomeContainer>
                <WelcomeMessageSpan />
            </WelcomeContainer>
        </WelcomeMessageProvider>
    )
}
