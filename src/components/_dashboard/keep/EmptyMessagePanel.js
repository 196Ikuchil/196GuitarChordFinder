import { Grid, Card, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function EmptyMessagePanel() {
  const { t } = useTranslation();

  return (
    <Card>
      <Grid container padding={1}>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <center>
            <Typography>{t('keep.empty.msg')}</Typography>
          </center>
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <Grid container padding={1}>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Button
            variant="outlined"
            style={{ margin: 'auto', display: 'flex' }}
            component={Link}
            to="/chordsearch"
          >
            {t('keep.empty.button')}
          </Button>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </Card>
  );
}
