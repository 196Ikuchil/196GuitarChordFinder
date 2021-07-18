// material
import { Box, Container, Typography } from '@material-ui/core';
// components
import Page from '../../components/Page';
import { AddBasePanelButton } from '../../components/_dashboard/diatonic';
import BasePanels from './BasePanels';
import SharpToggleButton from '../../components/SharpToggle';

// ----------------------------------------------------------------------

export default function Diatonic() {
  return (
    <Page title="Dashboard | Diatonic">
      <Container maxWidth="xl">
        <Box display="flex" pb={1} bgcolor="background.paper">
          <Box sx={{ pt: 1 }} flexGrow={1}>
            <Typography variant="h4">スクラップブック</Typography>
          </Box>
          <Box sx={{ pb: 1 }}>
            <SharpToggleButton />
          </Box>
        </Box>
        <Box sx={{ pb: 1 }}>
          <AddBasePanelButton />
        </Box>
        <BasePanels />
      </Container>
    </Page>
  );
}
