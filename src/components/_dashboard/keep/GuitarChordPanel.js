import { Grid, Card, Button, Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import { GuitarChordBox } from '../../music/guitarchord';
import { ChordData } from '../../music/guitarchord/ChordData';

export function GuitarChordPanel({ info, changePickupChord }) {
  return (
    <Grid container>
      <Grid item xs={6} sm={3} md={2}>
        <Card>
          <Button
            style={{ margin: 'auto', display: 'flex' }}
            onClick={() => changePickupChord(info.key, info.chord, info.chordNum)}
          >
            <GuitarChordBox panel={{ key: info.key, chord: info.chord, chordNum: info.chordNum }} />
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
}

GuitarChordPanel.propTypes = {
  info: PropTypes.shape({
    key: PropTypes.number.isRequired,
    chord: PropTypes.number.isRequired,
    chordNum: PropTypes.number.isRequired
  }),
  changePickupChord: PropTypes.func.isRequired
};
