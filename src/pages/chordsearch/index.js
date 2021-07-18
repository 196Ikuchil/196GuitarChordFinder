import { Box, Container, Typography } from '@material-ui/core';
import Page from '../../components/Page';
import ChordSearchBox from './ChordSearchBox';
import SharpToggleButton from '../../components/SharpToggle';

export default function ChordSearch() {
  return (
    <Page title="Dashboard | Diatonic">
      <Container maxWidth="xl">
        <Box display="flex" pb={3} bgcolor="background.paper">
          <Box sx={{ pt: 1 }} flexGrow={1}>
            <Typography variant="h4">chord search</Typography>
          </Box>
          <Box>
            <SharpToggleButton />
          </Box>
        </Box>
        <Box sx={{ pb: 2 }}>
          <ChordSearchBox />
        </Box>
      </Container>
    </Page>
  );
}
