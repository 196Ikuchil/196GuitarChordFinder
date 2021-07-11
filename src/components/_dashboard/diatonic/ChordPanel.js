import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { mapStateToProps, mapDispatchToProps } from '../../../modules/diatonicPanel';
import { ChordPanelSelector } from './ChordPanelSelector';

function ChordPanel({ panel, changeChordPanelType, changeChordPanelKey, changeChordPanelChord }) {
  return (
    <div>
      <ChordPanelSelector
        panel={panel}
        changeKey={(id, key) => changeChordPanelKey(id, key)}
        changeChord={(id, chord) => changeChordPanelChord(id, chord)}
      />
      <Grid container>
        <Grid item xs={12} sm={8} md={8}>
          <div>testssssM/</div>
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
  changeChordPanelType: PropTypes.func.isRequired,
  changeChordPanelKey: PropTypes.func.isRequired,
  changeChordPanelChord: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ChordPanel);
