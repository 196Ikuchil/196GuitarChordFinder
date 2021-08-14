import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Drawer } from '@material-ui/core';
import { MHidden } from '../../components/@material-extend';

export const DRAWER_RIGHT_WIDTH = 160;

const RootStyle = styled('div')(({ theme }) => ({
  zIndex: 1099,
  [theme.breakpoints.up('md')]: {
    flexShrink: 0
  }
}));

export const DashboardSideAdbar = () => (
  <RootStyle>
    <MHidden width="mdDown">
      <Drawer
        open
        anchor="right"
        variant="persistent"
        PaperProps={{
          sx: {
            width: DRAWER_RIGHT_WIDTH,
            bgcolor: 'background.default',
            paddingTop: { xs: 8, lg: 12 }
          }
        }}
      >
        <iframe
          title="amazon-asso-rightbar"
          src="https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=14&l=ur1&category=music&f=ifr&linkID=fee99c70766f50028fd3be746f1476d5&t=196guitarchord-22&tracking_id=196guitarchord-22"
          width="160"
          height="600"
          scrolling="no"
          border="0"
          marginWidth="0"
          style={{ border: 'none' }}
          frameBorder="0"
        />
      </Drawer>
    </MHidden>
  </RootStyle>
);
