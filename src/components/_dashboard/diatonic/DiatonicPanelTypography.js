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
    padding: theme.spacing(0.5),
    backgroundColor: theme.palette.grey[400]
  }
}));

const DiatonicPanelTypography = ({ chordname, popovername, isOpen }) => {
  const classes = useStyles();
  const typoRef = React.useRef();

  return (
    <div>
      <Typography ref={typoRef}>{chordname}</Typography>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper
        }}
        open={isOpen}
        anchorEl={typoRef.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        disableRestoreFocus
      >
        <Typography>{popovername}</Typography>
      </Popover>
    </div>
  );
};

DiatonicPanelTypography.propTypes = {
  chordname: PropTypes.string.isRequired,
  popovername: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default DiatonicPanelTypography;
