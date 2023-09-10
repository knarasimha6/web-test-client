import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FWA_AddressQualification from '../FWAAddressQualification';
import CreditCheckRequest from '../CreditCheckRequest';
import InitiateFWAOrder from '../InitiateFWAOrder';
import SaveFWADevice from '../SavaFWADevice';
import GetPlanRequest from '../GetPlanRequest';
import SavePlanRequest from '../SavePlanRequest';
import FWARefreshCreditCheck from '../FWARefreshCreditCheck';
import ValidateFWAOrder from '../ValidateFWAOrder';
import SubmitFWAOrder from '../SubmitFWAOrder';

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
    return ['FWA Address Qualification', 'Fixed Wireless Map', 'Initiate FWA Order',
    'Save FWA Order','Get Plan Request','Save Plan Request','FWA Refresh Credit Check','Validate FWA Order','Submit FWA Order'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return <FWA_AddressQualification/>;
        case 1:
            return <CreditCheckRequest />;
        case 2:
            return <InitiateFWAOrder />;
            case 3:
            return <SaveFWADevice />;;
            case 4:
            return <GetPlanRequest />;
            case 5:
            return <SavePlanRequest/>;
            case 6:
            return <FWARefreshCreditCheck/>;
            case 7:
            return <ValidateFWAOrder />;
            case 8:
            return <SubmitFWAOrder />;
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
                
            </div>
            <div className='container'>
                    {activeStep === steps.length ? (
                        <div>
                            <Typography className={classes.instructions}>All steps completed</Typography>
                            <Button onClick={handleReset}>Reset</Button>
                        </div>
                    ) : (
                        <div className='py-3'>
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
        </>
    );
}