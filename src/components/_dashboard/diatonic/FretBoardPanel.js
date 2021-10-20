import { connect } from 'react-redux';
import { Grid, Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import { FretBoardBox } from '../../music/fretboard';
import { mapStateToProps as getIsSharp } from '../../../modules/Sharp';
import { mapDispatchToProps } from '../../../modules/diatonicPanel';
import { GetChordNotes, NOTESLENGTH } from '../../../utils/music';
import { FretboardPanelSelector } from './FretboardPanelSelector';

function FretBoardPanel({ panel, index, changeFretboard, changeFretboardPanelType, isSharp }) {
  function getDotsFromKeyChord(key, chord) {
    return GetChordNotes(key, chord)
      .map((x, i) => (x === 1 ? i % NOTESLENGTH : null))
      .filter(Number.isFinite); // remove null
  }

  return (
    <div className="fretboard">
      <Grid container>
        <Grid item xs={12}>
          <FretboardPanelSelector
            panel={panel}
            index={index}
            changeFretboard={changeFretboard}
            changeFretboardPanelType={changeFretboardPanelType}
            isSharp={isSharp}
          />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ p: 1, pb: 0, pt: 0 }}>
            <FretBoardBox
              degreeNums={getDotsFromKeyChord(panel.key, panel.chord)}
              isSharp={isSharp}
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

FretBoardPanel.propTypes = {
  panel: PropTypes.shape({
    fretboardPanelType: PropTypes.number.isRequired,
    key: PropTypes.number.isRequired,
    chord: PropTypes.number.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,
  changeFretboard: PropTypes.func,
  changeFretboardPanelType: PropTypes.func,
  isSharp: PropTypes.bool
};

export default connect(getIsSharp, mapDispatchToProps)(FretBoardPanel);
