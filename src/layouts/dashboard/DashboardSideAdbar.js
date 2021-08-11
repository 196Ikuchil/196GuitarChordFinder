import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Drawer } from '@material-ui/core';
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
        test ad
      </Drawer>
    </MHidden>
  </RootStyle>
);
