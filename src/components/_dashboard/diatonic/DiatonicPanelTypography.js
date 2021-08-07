import React from 'react';
import { Typography, Popper } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  popper: {
    pointerEvents: 'none',
    zIndex: 1000,
    backgroundColor: theme.palette.grey[300],
    padding: theme.spacing(0.5),
    borderRadius: 10
  }
}));

const DiatonicPanelTypography = ({ chordname, popovername, isOpen }) => {
  const classes = useStyles();
  const typoRef = React.useRef();

  return (
    <div>
      <Typography ref={typoRef}>{chordname}</Typography>
      <Popper
        id="mouse-over-popover"
        className={classes.popper}
        open={isOpen}
        anchorEl={typoRef.current}
        anchororigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformorigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <Typography>{popovername}</Typography>
      </Popper>
    </div>
  );
};

DiatonicPanelTypography.propTypes = {
  chordname: PropTypes.string.isRequired,
  popovername: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default DiatonicPanelTypography;
