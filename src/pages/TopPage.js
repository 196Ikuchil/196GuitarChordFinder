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
          <Typography variant="h3">{t('toppage.chordsearch.title')}</Typography>
          <Typography>{t('toppage.chordsearch.description')}</Typography>
          <Typography>image here</Typography>
          <Typography variant="h3">{t('toppage.keep.title')}</Typography>
          <Typography>{t('toppage.keep.description')}</Typography>
          <Typography>image here</Typography>
          <Typography variant="h3">{t('toppage.scrapbook.title')}</Typography>
          <Typography>{t('toppage.scrapbook.description')}</Typography>
          <Typography>image here</Typography>
        </Box>
        <Box>
          <Typography variant="body2">{t('toppage.warning')}</Typography>
        </Box>
        <br />
        <Box>
          <Typography variant="caption">{t('toppage.contactus.to')}</Typography>
          <br />
          <Typography variant="caption">{t('toppage.contactus.description')}</Typography>
        </Box>
      </Container>
    </Page>
  );
}

export default withTranslation()(TopPage);
