import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import { ChordBox } from '../../vexchords';
import { ChordData } from './ChordData';

// F#m
const chord = {
  chord: [-2, 100, 100, 4, 4, -2, 1] // [0..5] 1st to 6th string, -x = barres, null=nothing, mute='x' , [6]=position
};

function getMainChord(key, chord) {
  return { chord: ChordData[key][chord][0].slice() };
}

export default function GuitarChordBox({ panel }) {
  return <ChordBox chord={getMainChord(panel.key, panel.chord)} />;
}

GuitarChordBox.propTypes = {
  panel: PropTypes.shape({
    key: PropTypes.number.isRequired,
    chord: PropTypes.number.isRequired
  }).isRequired
};
