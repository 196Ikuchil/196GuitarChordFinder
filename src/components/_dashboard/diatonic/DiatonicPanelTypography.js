import React from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none'
  },
  paper: {
    padding: theme.spacing(1)
  }
}));

const DiatonicPanelTypography = ({ chordname, popovername, isOpen }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  return (
    <div>
      <Typography>{chordname}</Typography>
    </div>
  );
};

DiatonicPanelTypography.propTypes = {
  chordname: PropTypes.string.isRequired,
  popovername: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default DiatonicPanelTypography;
