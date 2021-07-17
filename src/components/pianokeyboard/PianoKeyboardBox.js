import { Keyboard, MidiNumbers } from 'react-piano';
import { styled } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import DimensionsProvider from './DimensionsProvider';
import 'react-piano/dist/styles.css';

const Styleddiv = styled('div')(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  padding: 4
}));

const keyNum = 12 * 2;

// eslint-disable-next-line prettier/prettier
const keyboardNotes = ['c3', 'c#3', 'd3', 'd#3', 'e3', 'f3', 'f#3', 'g3', 'g#3', 'a3', 'a#3', 'b3',
  // eslint-disable-next-line prettier/prettier
                       'c4', 'c#4', 'd4', 'd#4', 'e4', 'f4', 'f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4',
  // eslint-disable-next-line prettier/prettier
                       'c5', 'c#5', 'd5', 'd#5', 'e5', 'f5', 'f#5', 'g5', 'g#5', 'a5', 'a#5', 'b5'];

export default function PianoKeyboard({ notes }) {
  function getActiveMidiNumbers() {
    return notes
      .map((x, i) => {
        if (x === 1) {
          return MidiNumbers.fromNote(keyboardNotes[i]);
        }
        return null;
      })
      .filter((x) => x);
  }

  function noteRange() {
    console.log(notes);
    const i = notes.indexOf(1);
    return {
      first: MidiNumbers.fromNote(keyboardNotes[i]),
      last: MidiNumbers.fromNote(keyboardNotes[i + keyNum])
    };
  }

  return (
    <DimensionsProvider>
      {({ containerWidth, containerHeight }) => (
        <Styleddiv>
          <Keyboard
            noteRange={noteRange()}
            width={containerWidth * 0.95}
            onPlayNoteInput={() => {}}
            onStopNoteInput={() => {}}
            renderNoteLabel={() => {}}
            keyWidthToHeight={0.3}
            useTouchEvents={false}
            disabled={false}
            {...{ activeNotes: getActiveMidiNumbers() }} // {...{ activeNotes: [MidiNumbers.fromNote('db3')] }}
          />
        </Styleddiv>
      )}
    </DimensionsProvider>
  );
}

PianoKeyboard.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.number) // ex.) [1,0,0,1,0,0,1,0.....]
};
