// material
import { Box, Grid } from '@material-ui/core';
import { PianoScore } from '../../pianoscore';

// ----------------------------------------------------------------------

export default function PianoScoreBox({ panel }) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box sx={{ p: 0, pb: 1 }}>
          <PianoScore
            abcNotation={'X:1\n[Bb]'}
            parserParams={{}}
            engraverParams={{}} // ここ消すと大きくなる（大きさ固定）
            renderParams={{ viewportHorizontal: false }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
