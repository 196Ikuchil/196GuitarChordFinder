import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import { ChordBox } from '../../vexchords';

const chord = {
  chord: [-1, 0, 1, 2, 3, -2], // 1st to 6th string, -1 = mute
  position: 0,
  barres: [{ fromString: 6, toString: 1, fret: 0 }]
};

export default function GuitarChordBox({ panel }) {
  return <ChordBox chord={chord} />;
}

GuitarChordBox.propTypes = {
  panel: PropTypes.shape({
    key: PropTypes.number.isRequired,
    chord: PropTypes.number.isRequired
  }).isRequired
};
