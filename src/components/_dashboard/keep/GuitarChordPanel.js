import { Grid, Card, Button, IconButton, Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import ClearIcon from '@material-ui/icons/Clear';
import { GuitarChordBox } from '../../music/guitarchord';
import { ChordLabel } from '../../ChordLabel';

export function GuitarChordPanel({ info, changePickupChord, removeChordKeep, isSharp }) {
  return (
    <Card>
      <Grid container>
        <Grid item xs={3}>
          <IconButton onClick={() => removeChordKeep()}>
            <ClearIcon />
          </IconButton>
        </Grid>
        <Grid item xs={8} display={{ paddingTop: 10 }}>
          <center>
            <ChordLabel k={info.key} chord={info.chord} isSharp={isSharp} variant="subtitle1" />
          </center>
        </Grid>
      </Grid>
      <Button
        style={{ margin: 'auto', display: 'flex' }}
        onClick={() => changePickupChord(info.key, info.chord, info.chordNum)}
      >
        <GuitarChordBox panel={{ key: info.key, chord: info.chord, chordNum: info.chordNum }} />
      </Button>
    </Card>
  );
}

GuitarChordPanel.propTypes = {
  info: PropTypes.shape({
    key: PropTypes.number.isRequired,
    chord: PropTypes.number.isRequired,
    chordNum: PropTypes.number.isRequired
  }),
  changePickupChord: PropTypes.func.isRequired,
  removeChordKeep: PropTypes.func.isRequired,
  isSharp: PropTypes.bool.isRequired
};
