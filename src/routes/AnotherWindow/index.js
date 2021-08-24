import { makeStyles } from '@material-ui/core/styles';
import WelcomeMessageButton from "../../buttons/WelcomeMessageButton";
import TimeMessageButton from "../../buttons/TimeMessageButton";

export function AnotherWindow() {

    const classes = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }))();

    return (
        <div>
            <span className={classes.root}>
                <WelcomeMessageButton />
                <TimeMessageButton />
            </span>
        </div>
    )
}
