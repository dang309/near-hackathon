import React, { useState } from 'react';

import PropTypes from 'prop-types';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { Box, Stack, TextField, Typography } from '@mui/material';

import CustomStepper from '../../../components/CustomStepper';

const PickAndDropModal = (props) => {
  const { pnd, setPnD } = props;

  const [activeStep, setActiveStep] = useState(0);

  const handleClose = () => {
    setPnD((prev) => ({
      ...prev,
      open: false,
    }));
  };

  const renderDialogByType = () => {
    let title, content, steps;
    switch (pnd.type) {
      case 'driver':
        title = 'Driver';
        steps = [
          {
            id: 1,
            label: 'Basic information',
            content: (
              <Stack direction="column" spacing={2}>
                <TextField label="Phone number" />
                <TextField label="Nationality ID" />
              </Stack>
            ),
          },
          {
            id: 2,
            label: 'Location',
            content: (
              <Stack direction="column" alignItems="center" spacing={2}>
                <Typography>You're at ...</Typography>
                <Button variant="contained">Turn on your location</Button>
              </Stack>
            ),
          },
        ];
        content = <CustomStepper steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} setPnD={setPnD} />;
        break;
      case 'passenger':
        title = 'Passenger';
        steps = [
          {
            id: 1,
            label: 'Basic information',
            content: (
              <Stack direction="column" spacing={2}>
                <TextField label="Phone number" />
                <TextField label="Nationality ID" />
              </Stack>
            ),
          },
          {
            id: 2,
            label: 'Location',
            content: (
              <Stack direction="column" alignItems="center" spacing={2}>
                <Typography>You're at ...</Typography>
                <Button variant="contained">Turn on your location</Button>
              </Stack>
            ),
          },
        ];
        content = <CustomStepper steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} setPnD={setPnD} />;

        break;
      default:
        return <div />;
    }
    return (
      <>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{content}</DialogContent>
      </>
    );
  };

  return (
    <Dialog open={pnd.open} onClose={handleClose} maxWidth="sm" fullWidth>
      {renderDialogByType()}
      <DialogActions>
        <Button onClick={handleClose}>Hủy</Button>
      </DialogActions>
    </Dialog>
  );
};

PickAndDropModal.propTypes = {
  pnd: PropTypes.object,
  setPnD: PropTypes.func,
};

export default PickAndDropModal;
