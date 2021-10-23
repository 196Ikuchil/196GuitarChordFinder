import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { StyleFormControl } from './FretboardPanelBaseSelector';

export function PickupButton({ pickupcaletable, _key, chord, scale, scaletabletype }) {
  function hanldepickupClick(event) {
    pickupcaletable(0, scaletabletype, _key, chord, scale);
  }

  return (
    <StyleFormControl>
      <Button color="primary" variant="outlined" onClick={hanldepickupClick}>
        <ArrowUpwardIcon />
        pickup
      </Button>
    </StyleFormControl>
  );
}

PickupButton.propTypes = {
  pickupcaletable: PropTypes.func.isRequired,
  _key: PropTypes.number.isRequired,
  chord: PropTypes.number.isRequired,
  scale: PropTypes.string.isRequired,
  scaletabletype: PropTypes.number.isRequired
};
