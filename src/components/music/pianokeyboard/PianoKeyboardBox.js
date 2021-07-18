import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import { PianoKeyboard } from '../../pianokeyboard';

export default function PianoKeyboardBox({ notes }) {
  return (
    <Box>
      <PianoKeyboard notes={notes} />
    </Box>
  );
}

PianoKeyboardBox.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.number) // ex.) [1,0,0,1,0,0,1,0.....]
};
