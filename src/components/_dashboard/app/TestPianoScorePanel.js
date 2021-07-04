// material
import { Card, CardHeader, Box } from '@material-ui/core';
import { PianoScore } from '../../pianoscore';

// ----------------------------------------------------------------------

export default function TestPianoScorePanel() {
  return (
    <Card>
      <CardHeader title="Website Visits" subheader="(+43%) than last year" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <PianoScore
          abcNotation={'X:1\nK:G\n|:[Bb]abc'}
          parserParams={{}}
          engraverParams={{ responsive: 'resize' }} // ここ消すと大きくなる（大きさ固定）
          renderParams={{ viewportHorizontal: true }}
        />
      </Box>
    </Card>
  );
}
