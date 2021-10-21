import { Box, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Fretboard } from '../../fretboard';
import { DEFAULT_OPTIONS } from '../../../utils/music/fretboard';

export default function FretBoardBox({ degreeNums, isSharp = false, display }) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box sx={{ p: 0, pb: 1, pl: 0 }}>
          {/* <Fretboard props={{ degreeNums, isSharp, options: test(display) }} /> */}
          <Fretboard props={{ degreeNums, isSharp, display }} />
        </Box>
      </Grid>
    </Grid>
  );
}

// function test(d) {
//   return { ...DEFAULT_OPTIONS, fretCount: 20 };
// }

FretBoardBox.propTypes = {
  degreeNums: PropTypes.array,
  isSharp: PropTypes.bool,
  display: PropTypes.number
};
