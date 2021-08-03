/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { connect } from 'react-redux';
import { Grid, Box, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { GuitarChordBox } from '../../music/guitarchord';
import { PianoScoreBox } from '../../music/pianoscore';
import {
  mapStateToProps,
  mapDispatchToProps,
  ChordPanelTypes
} from '../../../modules/diatonicPanel';
import { mapStateToProps as getIsSharp } from '../../../modules/Sharp';
import { ChordPanelSelector } from './ChordPanelSelector';

function ChordPanel({
  panel,
  index,
  changeChordPanelKey,
  changeChordPanelChord,
  changeChordPanelType,
  isSharp
}) {
  function renderChord() {
    if (panel.chordPanelType === ChordPanelTypes.guitar) {
      return <GuitarChordBox panel={Object.assign(panel, { chordNum: 0 })} />;
    }
    if (panel.chordPanelType === ChordPanelTypes.score) {
      return <PianoScoreBox panel={panel} isSharp={isSharp} />;
    }
    return <div>something wrong</div>;
  }

  return (
    <div>
      <ChordPanelSelector
        panel={panel}
        index={index}
        changeKey={(id, key) => changeChordPanelKey(id, key)}
        changeChord={(id, chord) => changeChordPanelChord(id, chord)}
        isSharp={isSharp}
      />
      <Grid container>
        <Grid item xs={12}>
          <Box sx={{ p: 1, pb: 0, pt: 0 }}>
            <Button sx={{ pl: 3 }} onClick={() => changeChordPanelType(index)}>
              {renderChord()}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

ChordPanel.propTypes = {
  panel: PropTypes.shape({
    chordPanelType: PropTypes.number.isRequired,
    key: PropTypes.number.isRequired,
    chord: PropTypes.number.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,
  changeChordPanelKey: PropTypes.func.isRequired,
  changeChordPanelChord: PropTypes.func.isRequired,
  changeChordPanelType: PropTypes.func.isRequired,
  isSharp: PropTypes.bool
};

export default connect(getIsSharp, mapDispatchToProps)(ChordPanel);
