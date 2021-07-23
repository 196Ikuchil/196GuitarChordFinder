// material
import { Box, Container, Typography } from '@material-ui/core';
// components
import { withTranslation } from 'react-i18next';
import Page from '../../components/Page';
import SharpToggleButton from '../../components/SharpToggle';
import KeepBox from './KeepBox';

// ----------------------------------------------------------------------

function Keep({ t }) {
  return (
    <Page title="Dashboard | Keep">
      <Container maxWidth="xl">
        <Box display="flex" pb={1} bgcolor="background.paper">
          <Box sx={{ pt: 1 }} flexGrow={1}>
            <Typography variant="h4">{t('keep.title')}</Typography>
          </Box>
          <Box sx={{ pb: 1 }}>
            <SharpToggleButton />
          </Box>
        </Box>
        <KeepBox />
      </Container>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5419824973394132"
        crossOrigin="anonymous"
      />
    </Page>
  );
}

export default withTranslation()(Keep);
