// material
import { Box, Container, Typography } from '@material-ui/core';
// components
import { withTranslation } from 'react-i18next';
import Page from '../components/Page';

// ----------------------------------------------------------------------

function TopPage({ t }) {
  return (
    <Page title="TopPage">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">{t('toppage.hello')}</Typography>
          <div>{t('toppage.chordsearch.title')}</div>
          <div>{t('toppage.chordsearch.description')}</div>
          <div>image here</div>
          <div>{t('toppage.keep.title')}</div>
          <div>{t('toppage.keep.description')}</div>
          <div>image here</div>
          <div>{t('toppage.scrapbook.title')}</div>
          <div>{t('toppage.scrapbook.description')}</div>
          <div>image here</div>
        </Box>
        <Box>
          <div>{t('toppage.contactus.to')}</div>
          <div>{t('toppage.contactus.description')}</div>
        </Box>
      </Container>
    </Page>
  );
}

export default withTranslation()(TopPage);
