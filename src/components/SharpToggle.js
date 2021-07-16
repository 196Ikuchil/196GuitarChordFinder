import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  mapStateToProps as mapSharpState,
  mapDispatchToProps as mapSharpDispatch
} from '../modules/Sharp';

function SharpToggleButton({ isSharp, SetIsSharp }) {
  function handleSharp(e, v) {
    if (v !== null) {
      SetIsSharp(v);
    }
  }

  return (
    <Grid>
      <Grid item sm={12} md={6}>
        <div>
          <ToggleButtonGroup value={isSharp} exclusive onChange={handleSharp} aria-label="sharp">
            <ToggleButton value aria-label="true_">
              #
            </ToggleButton>
            <ToggleButton value={false} aria-label="false_">
              ♭
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </Grid>
    </Grid>
  );
}

SharpToggleButton.propTypes = {
  isSharp: PropTypes.bool.isRequired,
  SetIsSharp: PropTypes.func.isRequired
};

export default connect(mapSharpState, mapSharpDispatch)(SharpToggleButton);
