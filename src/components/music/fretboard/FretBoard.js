import { Box, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Fretboard } from '../../fretboard';

export default function FretBoardBox({ dots, isSharp }) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box sx={{ p: 0, pb: 1, pl: 0 }}>
          <Fretboard props={{ degreeNums: [0, 2] }} />
        </Box>
      </Grid>
    </Grid>
  );
}

FretBoardBox.propTypes = {
  dots: PropTypes.object,
  isSharp: PropTypes.bool
};
