import { Box, Container, Typography } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import Page from '../../components/Page';
import ChordSearchBox from './ChordSearchBox';
import SharpToggleButton from '../../components/SharpToggle';

function ChordSearch({ t }) {
  return (
    <Page title="Dashboard | Diatonic">
      <Container maxWidth="xl">
        <Box display="flex" pb={3} bgcolor="background.paper">
          <Box sx={{ pt: 1 }} flexGrow={1}>
            <Typography variant="h4">{t('chordsearch')}</Typography>
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

export default withTranslation()(ChordSearch);
