import { Box, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Fretboard } from '../../fretboard';

export default function FretBoardBox({ degreeNums, isSharp = false }) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box sx={{ p: 0, pb: 1, pl: 0 }}>
          <Fretboard props={{ degreeNums, isSharp }} />
        </Box>
      </Grid>
    </Grid>
  );
}

FretBoardBox.propTypes = {
  degreeNums: PropTypes.array,
  isSharp: PropTypes.bool
};
