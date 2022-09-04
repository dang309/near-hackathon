import { memo, useState } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Container, Box, Stack, Button } from '@mui/material';
// components
import NavSectionHorizontal from '../../components/nav-section/index';
//
import navConfig from './NavConfig';
import PickAndDropModal from '../../sections/@dashboard/user/PickAndDropModal';

// ----------------------------------------------------------------------

const RootStyle = styled(Box)(({ theme }) => ({
  transition: theme.transitions.create('top', {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  width: '100%',
  padding: theme.spacing(1, 0),
  boxShadow: theme.customShadows.z8,
  backgroundColor: theme.palette.background.default,

  display: 'flex',
  justifyContent: 'space-between',
}));

// ----------------------------------------------------------------------

function NavbarHorizontal() {
  const [pnd, setPnD] = useState({
    open: false,
    type: '',
  });
  return (
    <RootStyle>
      <Container maxWidth={false}>
        <NavSectionHorizontal navConfig={navConfig} />
      </Container>

      <Stack direction="row" spacing={2}>
        <Button
          size="small"
          variant="contained"
          onClick={() =>
            setPnD({
              open: true,
              type: 'driver',
            })
          }
        >
          Become a driver
        </Button>

        <Button
          size="small"
          variant="contained"
          onClick={() =>
            setPnD({
              open: true,
              type: 'passenger',
            })
          }
        >
          Book a trip
        </Button>

        <Button
          size="small"
          variant="contained"
          onClick={() =>
            setPnD({
              open: true,
              type: 'passenger',
            })
          }
          color="error"
        >
          Sign out haidang309.testnet
        </Button>
      </Stack>

      <PickAndDropModal pnd={pnd} setPnD={setPnD} />
    </RootStyle>
  );
}

export default memo(NavbarHorizontal);
