// material
import { Box, Container, Typography } from '@material-ui/core';
// components
import Page from '../../components/Page';
import { AddBasePanelButton } from '../../components/_dashboard/diatonic';
import BasePanels from './BasePanels';

// ----------------------------------------------------------------------

export default function Diatonic() {
  return (
    <Page title="Dashboard | Diatonic">
      <Container maxWidth="xl">
        <Box sx={{ pb: 2 }}>
          <Typography variant="h4">スクラップボード</Typography>
        </Box>
        <Box sx={{ pb: 2 }}>
          <AddBasePanelButton />
        </Box>
        <BasePanels />
      </Container>
    </Page>
  );
}
