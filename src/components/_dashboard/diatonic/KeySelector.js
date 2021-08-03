import React from 'react';
import { Grid } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';

import { DIATONICS, GetDiatonicName, NOTESLENGTH, NOTENAME } from '../../../utils/music/notes';

const StyleFormControl = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: '90%'
}));

export default function KeySelector({ panel, changeDiatonic, changeKey, isSharp }) {
  const handleChangeDiatonic = (event) => {
    changeDiatonic(event.target.value);
  };
  const handleChangaKey = (event) => {
    changeKey(event.target.value);
  };

  const dComp = [];
  for (let i = 0; i < Object.keys(DIATONICS).length; i += 1) {
    dComp.push(
      <MenuItem key={i} value={i}>
        {GetDiatonicName(i)}
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
      <Grid item xs={6} sm={6}>
        <StyleFormControl variant="outlined">
          <InputLabel id="diatonic">Diatonic</InputLabel>
          <Select
            labelId="ditatonic-selector"
            onChange={handleChangeDiatonic}
            value={panel.dChord}
            label="diatonic"
          >
            {dComp}
          </Select>
        </StyleFormControl>
      </Grid>
      <Grid item xs={6} sm={6}>
        <StyleFormControl variant="outlined">
          <InputLabel id="key">key</InputLabel>
          <Select labelId="key-selector" onChange={handleChangaKey} value={panel.key} label="key">
            {kComp}
          </Select>
        </StyleFormControl>
      </Grid>
    </Grid>
  );
}

KeySelector.propTypes = {
  panel: PropTypes.shape({
    dChord: PropTypes.number.isRequired,
    key: PropTypes.number.isRequired
  }).isRequired,
  changeDiatonic: PropTypes.func.isRequired,
  changeKey: PropTypes.func.isRequired,
  isSharp: PropTypes.bool.isRequired
};
