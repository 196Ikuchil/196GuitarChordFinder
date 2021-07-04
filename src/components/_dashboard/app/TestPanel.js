// material
import { Card, CardHeader, Box } from '@material-ui/core';

// ----------------------------------------------------------------------

export default function TestPanel() {
  return (
    <Card>
      <CardHeader title="Website Visits" subheader="(+43%) than last year" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <div>パネルのテストです</div>
      </Box>
    </Card>
  );
}
