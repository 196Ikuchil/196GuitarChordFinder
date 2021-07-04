// material
import { Card, CardHeader, Box } from '@material-ui/core';
import { ChordBox } from '../../vexchords';

// ----------------------------------------------------------------------

export default function TestPanel() {
  return (
    <Card>
      <CardHeader title="Website Visits" subheader="(+43%) than last year" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ChordBox />
      </Box>
    </Card>
  );
}
