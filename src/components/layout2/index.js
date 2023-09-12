import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FWA_AddressQualification from '../startOrder/FWAAddressQualification';
import CreditCheckRequest from '../startOrder/CreditCheckRequest';
import InitiateFWAOrder from '../startOrder/InitiateFWAOrder';
import SaveFWADevice from '../startOrder/SavaFWADevice';
import GetPlanRequest from '../startOrder/GetPlanRequest';
import SavePlanRequest from '../startOrder/SavePlanRequest';
import FWARefreshCreditCheck from '../startOrder/FWARefreshCreditCheck';
import ValidateFWAOrder from '../startOrder/ValidateFWAOrder';
import SubmitFWAOrder from '../startOrder/SubmitFWAOrder';

import SubmitRemarks from '../postOrder/submitRemarks';
import GenerateReceipts from '../postOrder/generateReceipts';
import GenerateFWAConfirmation from '../postOrder/generateFWAConfirmation';
import GetFWAAppointment from '../postOrder/getFWAAppoinment';
import ValidateFWACustomer from '../postOrder/validateFWACustomer';
import GenerateFWANexBillSummary from '../postOrder/generateFWANextBillSummary';
import GenerateUrlRequest from '../postOrder/generateUrlRequest';

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
    return ['Submit Remarks', 'Generate Order Receipts', 'Generate FWA Confirmation',
        'Get FWA Appointments', 'Validate FWA Customer Pin', 'Generate FWA Next Bill Summary', 'Generate Url Request'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return <SubmitRemarks />;
        case 1:
            return <GenerateReceipts />;
        case 2:
            return <GenerateFWAConfirmation />;
        case 3:
            return <GetFWAAppointment />;;
        case 4:
            return <ValidateFWACustomer />;
        case 5:
            return <GenerateFWANexBillSummary />;
        case 6:
            return <GenerateUrlRequest />;

        default:
            return 'Unknown stepIndex';
    }
}

export default function LayOutTwo() {
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
                <Typography variant='h5' style={{ color: "#2196f3" }}>Post Order</Typography>
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
           <br/>
            <div class="card">
                <div class="card-body">
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
                </div>
            </div>
            </div>
        </>
    );
}