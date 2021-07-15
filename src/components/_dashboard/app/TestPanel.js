// material
import { Card, CardHeader, Box } from '@material-ui/core';
import { GetDiatonicChordNames } from '../../../utils/music';

// ----------------------------------------------------------------------

export default function TestPanel() {
  return (
    <Card>
      <CardHeader title="Website Visits" subheader="(+43%) than last year" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        {GetDiatonicChordNames(0, 0)}
        {GetDiatonicChordNames(1, 1)}
      </Box>
    </Card>
  );
}
