import React from 'react';
import { Grid, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import {
  StyleFormControl,
  FretboardPanelBaseSelector
} from '../fretboard/FretboardPanelBaseSelector';

export function FretboardPanelSelector({
  panel,
  index,
  changeFretboard,
  changeFretboardPanelType,
  changeFretboardTextType,
  isSharp
}) {
  const handleChangeFretboardTextType = (event) => {
    changeFretboardTextType(index);
  };

  return (
    <Grid container>
      <Grid item sm={2} md={1} pt={1} pl={2} pr={0}>
        <StyleFormControl>
          <Button color="primary" variant="outlined" onClick={handleChangeFretboardTextType}>
            <MusicNoteIcon />
          </Button>
        </StyleFormControl>
      </Grid>
      <Grid item sm={10} md={11} pt={1} pl={1}>
        <FretboardPanelBaseSelector
          panel={panel}
          index={index}
          changeFretboard={changeFretboard}
          changeFretboardPanelType={changeFretboardPanelType}
          isSharp={isSharp}
        />
      </Grid>
    </Grid>
  );
}

FretboardPanelSelector.propTypes = {
  panel: PropTypes.shape({
    fretboardPanelType: PropTypes.number.isRequired,
    chord: PropTypes.number.isRequired,
    key: PropTypes.number.isRequired,
    scale: PropTypes.string,
    texttype: PropTypes.number
  }).isRequired,
  index: PropTypes.number,
  changeFretboard: PropTypes.func.isRequired,
  changeFretboardPanelType: PropTypes.func.isRequired,
  changeFretboardTextType: PropTypes.func.isRequired,
  isSharp: PropTypes.bool
};
