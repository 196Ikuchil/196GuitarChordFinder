import { Grid, Card, Button, Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import { ChordBox } from '../../vexchords';
import { ChordData } from '../../music/guitarchord/ChordData';

export function GuitarChordPanels({ info, changePickupChord }) {
  function getChords(key, chord) {
    return ChordData[info.key][info.chord];
  }

  return (
    <Grid container>
      {getChords(info.key, info.chord).map((c, i) => (
        <Grid item key={i} xs={6} sm={3} md={2}>
          <Card>
            <Button
              style={{ margin: 'auto', display: 'flex' }}
              onClick={() => changePickupChord(info.key, info.chord, i)}
            >
              <ChordBox chord={{ ...{ chord: c } }} />
            </Button>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

GuitarChordPanels.propTypes = {
  info: PropTypes.shape({
    key: PropTypes.number.isRequired,
    chord: PropTypes.number.isRequired
  }),
  changePickupChord: PropTypes.func.isRequired
};
