import PropTypes from 'prop-types';
import { styled } from '@material-ui/core/styles';
import { Chord } from './react-vexchords';

const StyledDiv = styled('div')({
  transform: 'rotate(-90deg)'
});

export default function ChordBox({ chord }) {
  // input : array [1st to 6th string], -1 = mute
  function convertToVexChordStyle() {
    return {
      ...chord,
      // eslint-disable-next-line no-nested-ternary
      chord: chord.chord
        .filter((x) => x !== -2)
        .map((x, i) => (x === -1 ? [i + 1, 'x'] : [i + 1, x])),
      barres: chord.barres[0].fret === 0 ? {} : chord.barres
    };
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

  const Gm = {
    ...Fm,
    // optional: position marker
    position: 3, // start render at fret 3

    // optional: barres for barre chords
    barres: [{ fromString: 6, toString: 1, fret: 1 }]

    // optional: tuning keys
    // tuning: ["E", "A", "D", "G", "B", "E"]
  };
  const config = { showTuning: false };

  return (
    <center>
      <StyledDiv className="App">
        <Chord chordBoxParams={config} {...convertToVexChordStyle()} />
      </StyledDiv>
    </center>
  );
}

ChordBox.propTypes = {
  chord: PropTypes.shape({
    chord: PropTypes.arrayOf(
      PropTypes.number.isRequired,
      PropTypes.number.isRequired,
      PropTypes.number.isRequired,
      PropTypes.number.isRequired,
      PropTypes.number.isRequired,
      PropTypes.number.isRequired
    ).isRequired,
    position: PropTypes.number.isRequired,
    barres: PropTypes.arrayOf(
      PropTypes.shape({
        fromString: PropTypes.number.isRequired,
        toString: PropTypes.number.isRequired,
        fret: PropTypes.number.isRequired
      })
    )
  })
};
