import { Box, Container, Typography } from '@material-ui/core';
import Page from '../../components/Page';
import ChordSearchBox from './ChordSearchBox';
import SharpToggleButton from '../../components/SharpToggle';

export default function ChordSearch() {
  return (
    <Page title="Dashboard | Diatonic">
      <Container maxWidth="xl">
        <Box sx={{ pb: 2 }}>
          <Typography variant="h4">chord search</Typography>
          <SharpToggleButton />
        </Box>
        <Box sx={{ pb: 2 }}>
          <ChordSearchBox />
        </Box>
      </Container>
    </Page>
  );
}
