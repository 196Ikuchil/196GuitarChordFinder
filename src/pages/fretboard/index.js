import { Box, Container, Typography } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import Page from '../../components/Page';
import SharpToggleButton from '../../components/SharpToggle';
import FretboardBox from './FretboardBox';

function Fretboard({ t }) {
  return (
    <Page title="Fretboard">
      <Container maxWidth="xl">
        <Box display="flex" pb={3} bgcolor="background.paper">
          <Box sx={{ pt: 1 }} flexGrow={1}>
            <Typography variant="h4">{t('fretboard.title')}</Typography>
          </Box>
          <Box>
            <SharpToggleButton />
          </Box>
        </Box>
        <Box sx={{ pb: 2 }}>
          <FretboardBox />
        </Box>
      </Container>
    </Page>
  );
}

export default withTranslation()(Fretboard);
