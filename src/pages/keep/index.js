// material
import { Box, Container, Typography } from '@material-ui/core';
// components
import Page from '../../components/Page';
import SharpToggleButton from '../../components/SharpToggle';
import KeepBox from './KeepBox';

// ----------------------------------------------------------------------

export default function Keep() {
  return (
    <Page title="Dashboard | Keep">
      <Container maxWidth="xl">
        <Box display="flex" pb={1} bgcolor="background.paper">
          <Box sx={{ pt: 1 }} flexGrow={1}>
            <Typography variant="h4">ki-pu</Typography>
          </Box>
          <Box sx={{ pb: 1 }}>
            <SharpToggleButton />
          </Box>
        </Box>
        <KeepBox />
      </Container>
    </Page>
  );
}
