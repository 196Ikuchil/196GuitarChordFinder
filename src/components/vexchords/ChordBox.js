import PropTypes from 'prop-types';
import { styled } from '@material-ui/core/styles';
import { Chord } from './react-vexchords';

const StyledDiv = styled('div')({
  transform: 'rotate(-90deg)'
});

function CHORD(chord, position, barres) {
  return { chord, position, barres };
}
function BARRES(fromString, toString, fret) {
  return [{ fromString, toString, fret }];
}

export default function ChordBox({ chord }) {
  // input : array [1st to 6th string], -1 = mute
  function convertToVexChordStyle() {
    console.log(chord);
    console.log('aaa');
    const result = [];
    const fromto = [];
    let fret = 0;
    const position = chord.chord.slice(-1)[0];
    chord.chord.forEach((e, i) => {
      if (i === 6) {
        return;
      }
      if (e < 0) {
        fromto.push(i + 1);
        fret = -1 * e;
      } else {
        result.push([i + 1, e]);
      }
    });
    return CHORD(result, position, BARRES(fromto[1], fromto[0], fret));
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
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // 1st string
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // 6th string
      PropTypes.number.isRequired // position
    ).isRequired
  })
};
