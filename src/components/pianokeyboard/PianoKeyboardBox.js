import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import { styled } from '@material-ui/core/styles';
import { Grid, Box } from '@material-ui/core';
import DimensionsProvider from './DimensionsProvider';
import 'react-piano/dist/styles.css';

const Styleddiv = styled('div')(({ theme }) => ({
  marginBottom: '1000%'
}));

const noteRange = {
  first: MidiNumbers.fromNote('c3'),
  last: MidiNumbers.fromNote('f4')
};

export default function PianoKeyboard() {
  function ResponsivePiano(props) {
    return (
      <Piano
        noteRange={noteRange}
        width={200}
        playNote={() => {}}
        stopNote={() => {}}
        disabled
        {...props}
      />
    );
  }

  return (
    <Box>
      <ResponsivePiano />
    </Box>
  );
}
