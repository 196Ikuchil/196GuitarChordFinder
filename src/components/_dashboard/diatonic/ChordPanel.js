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
import { ChordPanelSelector } from './ChordPanelSelector';

function ChordPanel({ panel, changeChordPanelKey, changeChordPanelChord, changeChordPanelType }) {
  function renderChord() {
    if (panel.chordPanelType === ChordPanelTypes.guitar) {
      return <GuitarChordBox panel={panel} />;
    }
    if (panel.chordPanelType === ChordPanelTypes.score) {
      return <PianoScoreBox panel={panel} />;
    }
    return <div>something wrong</div>;
  }

  return (
    <div>
      <ChordPanelSelector
        panel={panel}
        changeKey={(id, key) => changeChordPanelKey(id, key)}
        changeChord={(id, chord) => changeChordPanelChord(id, chord)}
      />
      <Grid container>
        <Grid item xs={12}>
          <Box sx={{ p: 3, pb: 0, pt: 0 }}>
            <Button onClick={() => changeChordPanelType(panel.id)}>{renderChord()}</Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

ChordPanel.propTypes = {
  panel: PropTypes.shape({
    id: PropTypes.number.isRequired,
    chordPanelType: PropTypes.number.isRequired,
    key: PropTypes.number.isRequired,
    chord: PropTypes.number.isRequired
  }).isRequired,
  changeChordPanelKey: PropTypes.func.isRequired,
  changeChordPanelChord: PropTypes.func.isRequired,
  changeChordPanelType: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ChordPanel);
