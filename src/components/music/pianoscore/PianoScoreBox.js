// material
import { Box, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { PianoScore, getScoreNotes } from '../../pianoscore';
import { GetChordNotes } from '../../../utils/music';

// ----------------------------------------------------------------------

function convertChordNumToPianoScore(key, chord) {
  console.log(getScoreNotes(GetChordNotes(key, chord)));
  return getScoreNotes(GetChordNotes(key, chord));
}

export default function PianoScoreBox({ panel }) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box sx={{ p: 0, pb: 1 }}>
          <PianoScore
            abcNotation={`X:1\n[${convertChordNumToPianoScore(panel.key, panel.chord)}]`}
            parserParams={{}}
            engraverParams={{}} // ここ消すと大きくなる（大きさ固定）
            renderParams={{ viewportHorizontal: false }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

PianoScoreBox.propTypes = {
  panel: PropTypes.shape({
    id: PropTypes.number.isRequired,
    key: PropTypes.number.isRequired,
    chord: PropTypes.number.isRequired
  }).isRequired
};
