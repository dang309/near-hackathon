import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Avatar, Checkbox, TableRow, TableCell, Typography, MenuItem, Rating } from '@mui/material';
// components
import Label from '../../../components/Label';
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

UserTableRow.propTypes = {
  row: PropTypes.object,
  selected: PropTypes.bool,
  onEditRow: PropTypes.func,
  onSelectRow: PropTypes.func,
  onDeleteRow: PropTypes.func,
};

export default function UserTableRow({ row, selected }) {
  const theme = useTheme();

  const { id, from, to, driver, passenger, cost, status, rate, datetime } = row;

  const [openMenu, setOpenMenuActions] = useState(null);

  const handleOpenMenu = (event) => {
    setOpenMenuActions(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenuActions(null);
  };

  return (
    <TableRow hover selected={selected}>
      <TableCell>{id}</TableCell>

      <TableCell>{from}</TableCell>

      <TableCell align="left">{to}</TableCell>

      <TableCell>{driver}</TableCell>

      <TableCell>{passenger}</TableCell>

      <TableCell>{cost}</TableCell>

      <TableCell align="left">
        <Label variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'} sx={{ textTransform: 'capitalize' }}>
          {status}
        </Label>
      </TableCell>

      <TableCell>
        <Rating value={parseInt(rate, 10)} readOnly />
      </TableCell>

      <TableCell>{datetime.toString()}</TableCell>
    </TableRow>
  );
}
