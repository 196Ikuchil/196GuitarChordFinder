import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// material
import { Grid } from '@material-ui/core';
import { mapStateToProps, mapDispatchToProps, changeKey } from '../../modules/diatonicPanel';
import { DiatonicPanel } from '../../components/_dashboard/diatonic';

function BasePanels({ panels, removePanel, changeDiatonic, changeKey }) {
  return (
    <Grid container spacing={8}>
      {panels.map((panel) => (
        <Grid key={panel.id} item xs={12}>
          <DiatonicPanel
            panel={panel}
            onRemoveClick={() => removePanel(panel.id)}
            onChangeDiatonic={(dChord) => changeDiatonic(panel.id, dChord)}
            onChangeKey={(key) => changeKey(panel.id, key)}
          />
        </Grid>
      ))}
    </Grid>
  );
}

BasePanels.propTypes = {
  panels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      dChord: PropTypes.number.isRequired,
      key: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  removePanel: PropTypes.func.isRequired,
  changeDiatonic: PropTypes.func.isRequired,
  changeKey: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(BasePanels);
