import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// material
import { Grid } from '@material-ui/core';
import { mapStateToProps, mapDispatchToProps } from '../../modules/panel';
import { DiatonicPanel } from '../../components/_dashboard/diatonic';

function BasePanels({ panels, removePanel }) {
  return (
    <Grid container spacing={8}>
      {panels.map((panel) => (
        <Grid key={panel.id} item xs={12}>
          <DiatonicPanel onClick={() => removePanel(panel.id)} />
        </Grid>
      ))}
    </Grid>
  );
}

BasePanels.propTypes = {
  panels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  removePanel: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(BasePanels);
