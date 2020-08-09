import React from 'react'
import './question.scss'
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import info from '../Input'
const useQontoStepIconStyles = makeStyles({
    root: {
        color: '#eaeaf0',
        display: 'flex',
        height: 22,
        alignItems: 'center',
        backgroundColor: '#023891',
    },
    active: {
        color: '#784af4',
    },
    circle: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
    completed: {
        color: '#784af4',
        zIndex: 1,
        fontSize: 18,
    },
});

function QontoStepIcon(props) {
    const classes = useQontoStepIconStyles();
    const { active, completed } = props;

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
            })}
        >
            {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
        </div>
    );
}

QontoStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
            backgroundImage:
                'linear-gradient( to right,rgb(240,138,93) 0%,rgb(184,59,94) 100%)',
                boxShadow: '0 0px 9px 6px rgba(184, 59, 94, 0.56)',

                
        },
    },
    completed: {
        '& $line': {
            backgroundImage:
                'linear-gradient( to right,rgb(240,138,93) 0%,rgb(184,59,94) 100%)',
                boxShadow: '0 0px 9px 6px rgba(184, 59, 94, 0.56)',

                
        },
    },
    line: {
        height: 10,
        border: 0,
        borderRadius: 50,
        
    },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundImage:
            'linear-gradient( to right,rgb(240,138,93) 0%,rgb(184,59,94) 100%)',
        boxShadow: '0 0px 2px 6px rgba(184, 59, 94, 0.56)',
    },
    completed: {
        backgroundImage:
            'linear-gradient( to right,rgb(240,138,93) 0%,rgb(184,59,94) 100%)',
    },
});

function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
        1: '',
        2: '',
        3: '',
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',

    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    let steps = info.Qs.length;

    var numberArray = [];

    for (var i = 1; i <= steps; i++) {
        numberArray.push('');
    }

    return numberArray;
}





function Questions() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };



    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div>
            <video autoPlay className="bg-video blur" loop>
                <source src={info.background} type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
            </video>

            <div className="stepper-div">
                <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                    {steps.map((label) => (
                        <Step key={Math.random()}>
                            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </div>

            {activeStep === steps.length ? (
                <div className="finished">
                    <h1> با تشکر از وقتی که صرف پاسخگویی به سوالات کردید</h1>
                    <Button onClick={handleReset} className={classes.button}>
                        شروع دوباره
            </Button>
                </div>
            )
                :
                (
                    <div className="Qs-on">
                        <h1>
                            {info.Qs[activeStep]}
                        </h1>

                        <div>

                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                className={classes.button}
                            >
                                بله عالی
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                className={classes.button}
                            >
                                متوسط
                            </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    className={classes.button}
                                >
                                    خیر اصلا
                            </Button>

                        </div>
                    </div>
                )}
        </div>
    )
}

export default Questions
