import React from 'react';

import PropTypes from 'prop-types';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const PickAndDropModal = (props) => {
  const { pnd, setPnD } = props;

  const handleClose = () => {
    setPnD((prev) => ({
      ...prev,
      open: false,
    }));
  };

  return (
    <Dialog open={pnd.open} onClose={handleClose}>
      <DialogTitle>{"Use Google's location service?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Let Google help apps determine location. This means sending anonymous location data to Google, even when no
          apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Hủy</Button>
        <Button variant="contained" onClick={handleClose}>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

PickAndDropModal.propTypes = {
  pnd: PropTypes.object,
  setPnD: PropTypes.func,
};

export default PickAndDropModal;
