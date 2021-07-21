// material
import { Box, Container, Typography } from '@material-ui/core';
// components
import { useTranslation, withTranslation } from 'react-i18next';
import Page from '../components/Page';

// ----------------------------------------------------------------------

function TopPage({ t, i18n }) {
  return (
    <Page title="TopPage">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
          <div>{t('sidebar.keep.title')}</div>
        </Box>
      </Container>
    </Page>
  );
}

export default withTranslation()(TopPage);
