import PropTypes from 'prop-types';
// material
import { Box } from '@material-ui/core';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  return (
    <Box
      component="img"
      src={`${process.env.PUBLIC_URL}/static/logo.svg`}
      sx={{ width: 40, height: 40, ...sx }}
    />
  );
}
