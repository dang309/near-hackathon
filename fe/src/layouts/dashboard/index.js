import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import Scrollbar from 'src/components/Scrollbar';
import DashboardNavbar from './DashboardNavbar';
//

// ----------------------------------------------------------------------

const RootStyle = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100%',
  padding: 4,

  height: '100%',
});

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  return (
    <RootStyle className="dashboard">
      <DashboardNavbar />
      <Box
        sx={{
          height: '100%',
          width: '100%',

          display: 'flex',
          alignItems: 'center',
        }}
        pb={8}
      >
        <Scrollbar>
          <Outlet />
        </Scrollbar>
      </Box>
    </RootStyle>
  );
}
