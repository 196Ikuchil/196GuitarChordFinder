import React from 'react';
import { Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { CHORDNAME } from '../utils/music/chords';
import { NOTENAME } from '../utils/music/notes';

export const ChordLabel = ({ k, chord, isSharp, variant }) => (
  <Box>
    <center>
      <Typography variant={variant}>{`${NOTENAME(k, isSharp)} ${CHORDNAME[chord]}`}</Typography>
    </center>
  </Box>
);

ChordLabel.propTypes = {
  k: PropTypes.number.isRequired,
  chord: PropTypes.number.isRequired,
  isSharp: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};
