// material
import { Box, Container, Typography } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
// components
import Page from '../../components/Page';
import { AddBasePanelButton, RemoveAllButton } from '../../components/_dashboard/diatonic';
import BasePanels from './BasePanels';
import SharpToggleButton from '../../components/SharpToggle';

// ----------------------------------------------------------------------

function Diatonic({ t }) {
  return (
    <Page title="Dashboard | Diatonic">
      <Container maxWidth="xl">
        <Box display="flex" pb={1} bgcolor="background.paper">
          <Box sx={{ pt: 1 }} flexGrow={1}>
            <Typography variant="h4">{t('scrapbook.title')}</Typography>
          </Box>
          <Box sx={{ pb: 1 }}>
            <SharpToggleButton />
          </Box>
        </Box>
        <Box display="flex" sx={{ pb: 1 }}>
          <Box sx={{ pt: 1 }} flexGrow={1}>
            <RemoveAllButton />
          </Box>
          <Box sx={{ pb: 1 }}>
            <AddBasePanelButton />
          </Box>
        </Box>
        <BasePanels />
      </Container>
    </Page>
  );
}

export default withTranslation()(Diatonic);
