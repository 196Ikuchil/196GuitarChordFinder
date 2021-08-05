// material
import { Box, Container, Typography, Button } from '@material-ui/core';
// components
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Page from '../components/Page';
import { PageCard } from '../components/_dashboard/top';

// ----------------------------------------------------------------------

function TopPage({ t }) {
  return (
    <Page title="TopPage">
      <Container maxWidth="xl">
        <Box>
          <center>
            <img src={`${process.env.PUBLIC_URL}/static/icon.png`} alt="Logo" />
          </center>
          <center>
            <Typography variant="h2">{t('toppage.sitename')}</Typography>
          </center>
        </Box>
        <Box sx={{ p: 3 }}>
          <center>
            <PageCard
              img={`${process.env.PUBLIC_URL}/static/images/top/finder.png`}
              pagename={t('toppage.chordsearch.title')}
              description={t('toppage.chordsearch.description')}
              path="/chordsearch"
            />
          </center>
        </Box>
        <Box sx={{ p: 3 }}>
          <center>
            <PageCard
              img={`${process.env.PUBLIC_URL}/static/images/top/keep.png`}
              pagename={t('toppage.keep.title')}
              description={t('toppage.keep.description')}
              path="/keep"
            />
          </center>
        </Box>
        <Box sx={{ p: 3 }}>
          <center>
            <PageCard
              img={`${process.env.PUBLIC_URL}/static/images/top/scrapbook.png`}
              pagename={t('toppage.scrapbook.title')}
              description={t('toppage.scrapbook.description')}
              path="/scrapbook"
            />
          </center>
        </Box>
        <Box>
          <Typography variant="body2">{t('toppage.warning')}</Typography>
        </Box>
        <br />
        <Box>
          <center>
            <Typography variant="caption">{t('toppage.contactus.description')}</Typography>
            <br />
            <Typography variant="caption">{t('toppage.contactus.to')}</Typography>
            <br />
            <br />
            <Button variant="secondary" component={Link} to="/policy">
              {t('toppage.policy')}
            </Button>
          </center>
        </Box>
      </Container>
    </Page>
  );
}

export default withTranslation()(TopPage);
