import { Grid, Card, Button, IconButton, Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import ClearIcon from '@material-ui/icons/Clear';
import { GuitarChordBox } from '../../music/guitarchord';
import { ChordData } from '../../music/guitarchord/ChordData';

export function GuitarChordPanel({ info, changePickupChord, removeChordKeep }) {
  return (
    <Card>
      <IconButton onClick={() => removeChordKeep()}>
        <ClearIcon />
      </IconButton>
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
  removeChordKeep: PropTypes.func.isRequired
};
