import React from 'react';
import { Grid } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { NOTESLENGTH, NOTENAME } from '../../../utils/music/notes';
import { CHORDNAME, CHORDS_LENGTH } from '../../../utils/music/chords';

const StyleFormControl = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: '90%',
  transform: `scale(0.8)`
}));

export function ChordPanelSelector({ panel, index, changeKey, changeChord, isSharp }) {
  const handleChangeChord = (event) => {
    changeChord(index, event.target.value);
  };
  const handleChangaKey = (event) => {
    changeKey(index, event.target.value);
  };

  const dComp = [];
  for (let i = 0; i < CHORDS_LENGTH; i += 1) {
    dComp.push(
      <MenuItem key={i} value={i}>
        {CHORDNAME(i)}
      </MenuItem>
    );
  }

  const kComp = [];
  for (let i = 0; i < NOTESLENGTH; i += 1) {
    kComp.push(
      <MenuItem key={i} value={i}>
        {NOTENAME(i, isSharp)}
      </MenuItem>
    );
  }

  return (
    <Grid container>
      <Grid item xs={5} sm={5} md={5}>
        <StyleFormControl size="small">
          <InputLabel id="key">key</InputLabel>
          <Select
            labelId="key-selector"
            onChange={handleChangaKey}
            value={panel.key}
            label="key"
            size="large"
          >
            {kComp}
          </Select>
        </StyleFormControl>
      </Grid>
      <Grid item xs={6} sm={7} md={7}>
        <StyleFormControl variant="outlined" size="small">
          <InputLabel id="chord">chord</InputLabel>
          <Select
            labelId="chord-selector"
            onChange={handleChangeChord}
            value={panel.chord}
            label="chord"
            size="large"
          >
            {dComp}
          </Select>
        </StyleFormControl>
      </Grid>
    </Grid>
  );
}

ChordPanelSelector.propTypes = {
  panel: PropTypes.shape({
    chord: PropTypes.number.isRequired,
    key: PropTypes.number.isRequired
  }).isRequired,
  index: PropTypes.number,
  changeKey: PropTypes.func.isRequired,
  changeChord: PropTypes.func.isRequired,
  isSharp: PropTypes.bool
};
