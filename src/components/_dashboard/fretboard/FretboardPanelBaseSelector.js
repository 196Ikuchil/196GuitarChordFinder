import { Grid, Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { CHORDNAME, CHORDS_LENGTH } from '../../../utils/music/chords';
import { FretboardPanelTypes } from '../../../utils/music';
import { NOTESLENGTH, NOTENAME, SCALENOTES, GetScaleKeys } from '../../../utils/music/notes';

export const StyleFormControl = styled(FormControl)(({ theme }) => ({
  minWidth: '70%',
  transform: `scale(0.8)`
}));

export function FretboardPanelBaseSelector({
  panel,
  index,
  changeFretboard,
  changeFretboardPanelType,
  isSharp
}) {
  const handleChangeFretboardKey = (event) => {
    changeFretboard(index, panel.fretboardPanelType, event.target.value, panel.chord, panel.scale);
  };
  const handleChangeFretboardChord = (event) => {
    changeFretboard(index, panel.fretboardPanelType, panel.key, event.target.value, panel.scale);
  };
  const handleChangeFretboardScale = (event) => {
    changeFretboard(index, panel.fretboardPanelType, panel.key, panel.chord, event.target.value);
  };
  const handleChangeFretboardType = () => {
    changeFretboardPanelType(index);
  };

  function Render() {
    switch (panel.fretboardPanelType) {
      case FretboardPanelTypes.chord:
        return RenerChordType();
      case FretboardPanelTypes.scale:
        return RenderScaleType();
      default:
        return RenerChordType();
    }
  }

  function RenerChordType() {
    return (
      <div>
        <StyleFormControl variant="outlined">
          <InputLabel id="chord">chord</InputLabel>
          <Select
            labelId="chord-selector"
            onChange={handleChangeFretboardChord}
            value={panel.chord}
            label="chord"
            size="large"
          >
            {dComp}
          </Select>
        </StyleFormControl>
      </div>
    );
  }

  function RenderScaleType() {
    return (
      <div>
        <StyleFormControl variant="outlined">
          <InputLabel id="textswitch">scale</InputLabel>
          <Select
            labelId="scale-selector"
            onChange={handleChangeFretboardScale}
            value={panel.scale}
            label="scale"
            size="large"
          >
            {sComp}
          </Select>
        </StyleFormControl>
      </div>
    );
  }

  const dComp = [];
  for (let i = 0; i < CHORDS_LENGTH; i += 1) {
    dComp.push(
      <MenuItem key={i} value={i}>
        {CHORDNAME(i)}
      </MenuItem>
    );
  }

  const kComp = [];
  for (let i = 0; i < NOTESLENGTH; i += 1) {
    kComp.push(
      <MenuItem key={i} value={i}>
        {NOTENAME(i, isSharp)}
      </MenuItem>
    );
  }

  const sComp = [];
  GetScaleKeys().map((k) =>
    sComp.push(
      <MenuItem key={k} value={k}>
        {SCALENOTES[k].label}
      </MenuItem>
    )
  );

  return (
    <Grid container>
      <Grid item sm={1} md={1} pt={0} pl={0}>
        <StyleFormControl>
          <Button
            color="primary"
            variant="outlined"
            label="switch chord&scale"
            onClick={handleChangeFretboardType}
          >
            <ChangeCircleIcon />
          </Button>
        </StyleFormControl>
      </Grid>
      <Grid item sm={5} md={5}>
        <StyleFormControl style={{ minWidth: '100%' }}>
          <InputLabel id="key">key</InputLabel>
          <Select
            labelId="key-selector"
            onChange={handleChangeFretboardKey}
            value={panel.key}
            label="key"
            size="large"
          >
            {kComp}
          </Select>
        </StyleFormControl>
      </Grid>
      <Grid item sm={6} md={6}>
        {Render()}
      </Grid>
    </Grid>
  );
}

FretboardPanelBaseSelector.propTypes = {
  panel: PropTypes.shape({
    fretboardPanelType: PropTypes.number.isRequired,
    chord: PropTypes.number.isRequired,
    key: PropTypes.number.isRequired,
    scale: PropTypes.string
  }).isRequired,
  index: PropTypes.number,
  changeFretboard: PropTypes.func.isRequired,
  changeFretboardPanelType: PropTypes.func.isRequired,
  isSharp: PropTypes.bool
};
