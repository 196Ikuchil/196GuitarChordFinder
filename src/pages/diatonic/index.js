// material
import { Box, Container, Typography } from '@material-ui/core';
// components
import Page from '../../components/Page';
import { AddBasePanelButton } from '../../components/_dashboard/app';
import BasePanels from './BasePanels';

// ----------------------------------------------------------------------

export default function Diatonic() {
  return (
    <Page title="Dashboard | Diatonic">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Box sx={{ pb: 12 }}>
          <AddBasePanelButton />
        </Box>
        <BasePanels />
      </Container>
    </Page>
  );
}
