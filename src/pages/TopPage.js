// material
import { Box, Container, Typography } from '@material-ui/core';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

export default function TopPage() {
  return (
    <Page title="TopPage">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
      </Container>
    </Page>
  );
}
