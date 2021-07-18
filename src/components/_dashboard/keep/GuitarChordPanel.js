import { Grid, Card, Button, Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import { GuitarChordBox } from '../../music/guitarchord';
import { ChordData } from '../../music/guitarchord/ChordData';

export function GuitarChordPanel({ info, changePickupChord, removeChordKeep }) {
  return (
    <Card>
      <Button onClick={() => removeChordKeep()}>X</Button>
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
