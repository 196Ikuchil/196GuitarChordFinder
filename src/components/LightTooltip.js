import { withStyles } from '@material-ui/styles';
import Tooltip from '@material-ui/core/Tooltip';
import { Fade } from '@material-ui/core';

const StyledLightTooltip = withStyles((theme) => ({
  arrow: {
    color: theme.palette.info.lighter
  },
  tooltip: {
    backgroundColor: theme.palette.info.lighter,
    color: 'rgba(30, 40, 40, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 16
  }
}))(Tooltip);

export const LightTooltip = (props) => (
  <StyledLightTooltip
    arrow
    title={props.text}
    TransitionComponent={Fade}
    TransitionProps={{ timeout: 900 }}
    {...props}
  >
    {props.children}
  </StyledLightTooltip>
);
