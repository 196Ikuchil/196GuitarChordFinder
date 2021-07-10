import React from 'react';
import { Grid } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { DIATONICS, GetDiatonicName, NOTESLENGTH, NOTENAME } from '../../../utils/music/notes';

const StyleFormControl = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: '90%'
}));

export default function KeySelector() {
  const [num, setNum, num2] = React.useState('');

  const handleChange = (event) => {
    setNum(event.target.value);
  };
  const handleChanga2 = (event) => {
    setNum(event.target.value);
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
        {NOTENAME(i)}
      </MenuItem>
    );
  }

  return (
    <Grid container>
      <Grid item xs={6} sm={4}>
        <StyleFormControl variant="outlined">
          <InputLabel id="diatonic">Diatonic</InputLabel>
          <Select labelId="ditatonic-selector" onChange={handleChange} value={num} label="diatonic">
            {dComp}
          </Select>
        </StyleFormControl>
      </Grid>
      <Grid item xs={6} sm={4}>
        <StyleFormControl variant="outlined">
          <InputLabel id="key">key</InputLabel>
          <Select labelId="key-selector" onChange={handleChanga2} value={num2} label="key">
            {kComp}
          </Select>
        </StyleFormControl>
      </Grid>
    </Grid>
  );
}
