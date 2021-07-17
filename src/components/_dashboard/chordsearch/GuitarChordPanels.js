import { Grid, Card, Button } from '@material-ui/core';
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
        <Grid item key={i} xs={6} sm={2}>
          <Card>
            <Button onClick={() => changePickupChord(info.key, info.chord, i)}>pickup</Button>
            <ChordBox chord={{ ...{ chord: c } }} />
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
