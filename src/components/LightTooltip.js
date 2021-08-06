import { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Tooltip from '@material-ui/core/Tooltip';
import { Fade, Button } from '@material-ui/core';

const StyledLightTooltip = withStyles((theme) => ({
  arrow: {
    color: theme.palette.info.lighter
  },
  tooltip: {
    padding: 10,
    backgroundColor: theme.palette.info.lighter,
    color: 'rgba(30, 40, 40, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 14,
    maxWidth: '22em',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '10em'
    }
  }
}))(Tooltip);

export const LightTooltip = (props) => {
  const [open, setOpen] = useState(true);
  const test = () => {
    setOpen(false);
  };

  return (
    <StyledLightTooltip
      arrow
      open={Boolean(props.condition) && open}
      title={
        <>
          <center>
            {props.text}
            <br />
            <Button onClick={() => setOpen(false)}>OK</Button>
          </center>
        </>
      }
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 900 }}
      {...props}
    >
      {props.children}
    </StyledLightTooltip>
  );
};

LightTooltip.defaultProps = {
  condition: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};
