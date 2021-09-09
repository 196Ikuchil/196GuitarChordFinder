import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import { ChordBox } from '../../vexchords';
import { getSelectedChordData } from '../../../utils/music/chords';

// F#m
const chord = {
  chord: [-2, 100, 100, 4, 4, -2, 1] // [0..5] 1st to 6th string, -x = barres, 100=nothing, mute='x' , [6]=position
};

function getSelectedChord(key, chord, chordNum) {
  return { chord: getSelectedChordData(key, chord, chordNum).slice() };
}
const C = {
  chord: [
    [2, 1, '1'],
    [3, 2, '2'],
    [5, 3, '3'],
    [6, 'x']
  ]
};

const Fm = {
  // array of [string, fret, label (optional)]
  chord: [
    [1, 1],
    [2, 1],
    [3, 1],
    [4, 3],
    [5, 3],
    [6, 'x']
  ],

  // optional: position marker
  // position: 5, // start render at fret 5

  // optional: barres for barre chords
  barres: [{ fromString: 6, toString: 1, fret: 1 }]

  // optional: tuning keys
  // tuning: ["E", "A", "D", "G", "B", "E"]
};
// TODO: isSharp
export default function GuitarChordBox({ panel }) {
  return <ChordBox chord={{ ...getSelectedChord(panel.key, panel.chord, panel.chordNum) }} />;
}

GuitarChordBox.propTypes = {
  panel: PropTypes.shape({
    key: PropTypes.number.isRequired,
    chord: PropTypes.number.isRequired,
    chordNum: PropTypes.number.isRequired
  }).isRequired
};
