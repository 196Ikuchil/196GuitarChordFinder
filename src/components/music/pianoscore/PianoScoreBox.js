// material
import { Box, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { PianoScore, getScoreNotes } from '../../pianoscore';
import { GetChordNotes } from '../../../utils/music';

// ----------------------------------------------------------------------

function convertChordNumToPianoScore(key, chord, isSharp) {
  return getScoreNotes(GetChordNotes(key, chord), isSharp);
}

export default function PianoScoreBox({ panel, isSharp }) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box sx={{ p: 0, pb: 1, pl: 0 }}>
          <PianoScore
            abcNotation={`X:1\n[${convertChordNumToPianoScore(panel.key, panel.chord, isSharp)}]`}
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
