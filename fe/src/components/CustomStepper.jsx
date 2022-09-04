import React, { Fragment } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function HorizontalLinearStepper(props) {
  const { steps, activeStep, setActiveStep, setPnD } = props;

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      setPnD((prev) => ({
        ...prev,
        open: false,
      }));
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((step) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={step.id} {...stepProps}>
              <StepLabel {...labelProps}>{step.label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep !== steps.length && (
        <Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>{steps[activeStep].content}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />

            <Button onClick={handleNext}>{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button>
          </Box>
        </Fragment>
      )}
    </Box>
  );
}
