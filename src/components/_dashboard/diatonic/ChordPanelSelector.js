import React from 'react';
import { Grid } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { NOTESLENGTH, NOTENAME } from '../../../utils/music/notes';
import { CHORDNAME } from '../../../utils/music/chords';

const StyleFormControl = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: '90%',
  transform: `scale(0.8)`
}));

export function ChordPanelSelector({ panel, changeKey, changeChord }) {
  const handleChangeChord = (event) => {
    changeChord(panel.id, event.target.value);
  };
  const handleChangaKey = (event) => {
    changeKey(panel.id, event.target.value);
  };

  const dComp = [];
  for (let i = 0; i < Object.keys(CHORDNAME).length; i += 1) {
    dComp.push(
      <MenuItem key={i} value={i}>
        {CHORDNAME[i]}
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
      <Grid item xs={5} sm={3}>
        <StyleFormControl size="small">
          <InputLabel id="key">key</InputLabel>
          <Select labelId="key-selector" onChange={handleChangaKey} value={panel.key} label="key">
            {kComp}
          </Select>
        </StyleFormControl>
      </Grid>
      <Grid item xs={6} sm={4}>
        <StyleFormControl variant="outlined" size="small">
          <InputLabel id="chord">Diatonic</InputLabel>
          <Select
            labelId="chord-selector"
            onChange={handleChangeChord}
            value={panel.chord}
            label="chord"
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
    id: PropTypes.number.isRequired,
    chordPanelType: PropTypes.number.isRequired,
    chord: PropTypes.number.isRequired,
    key: PropTypes.number.isRequired
  }).isRequired,
  changeKey: PropTypes.func.isRequired,
  changeChord: PropTypes.func.isRequired
};
