import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import { styled } from '@material-ui/core/styles';
import { Grid, Box } from '@material-ui/core';
import Dimensions from 'react-dimensions';
import DimensionsProvider from './DimensionsProvider';
import 'react-piano/dist/styles.css';

const Styleddiv = styled('div')(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  padding: 4
}));

const noteRange = {
  first: MidiNumbers.fromNote('c3'),
  last: MidiNumbers.fromNote('b4')
};

export default function PianoKeyboard(props) {
  return (
    <DimensionsProvider>
      {({ containerWidth, containerHeight }) => (
        <Styleddiv>
          <Piano
            noteRange={noteRange}
            width={containerWidth * 0.95}
            playNote={() => {}}
            stopNote={() => {}}
            disabled
            {...props}
          />
        </Styleddiv>
      )}
    </DimensionsProvider>
  );
}
