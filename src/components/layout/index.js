import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['PWA Address Qualification', 'Fixed Wireless Map', 'FWA Credit Check','Initiate FWA Order',
    'Save FWA Order','Get Plan Request','Save Plan Request','Validate FWA Order','Submit FWA Order'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return 'PWA Address Qualification';
        case 1:
            return 'Fixed Wireless Map';
        case 2:
            return 'FWA Credit Check';
            case 3:
            return 'Initiate FWA Order';
            case 4:
            return 'Save FWA Order';
            case 5:
            return 'Get Plan Request';
            case 6:
            return 'Save Plan Request';
            case 7:
            return 'Validate FWA Order';
            case 8:
            return 'Submit FWA Order';
        default:
            return 'Unknown stepIndex';
    }
}

export default function LayOut() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <>
            <div className='container py-3'>
                <div class="card">
                    <div class="card-body">
                        <div className='row'>
                            <div className='col-md-3'>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Client Name</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Client Id</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Application Id</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Test</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.root}>

                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div style={{display:'flex',justifyContent:"center"}}>
                    {activeStep === steps.length ? (
                        <div>
                            <Typography className={classes.instructions}>All steps completed</Typography>
                            <Button onClick={handleReset}>Reset</Button>
                        </div>
                    ) : (
                        <div>
                            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.backButton}
                                >
                                    Back
                                </Button>
                                <Button variant="contained" color="primary" onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}