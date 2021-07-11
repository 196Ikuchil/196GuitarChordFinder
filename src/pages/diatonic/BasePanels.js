import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// material
import { Grid, Card, Button } from '@material-ui/core';
import { mapStateToProps, mapDispatchToProps, PanelTypes } from '../../modules/diatonicPanel';
import { DiatonicPanel, C5thPanel } from '../../components/_dashboard/diatonic';

function BasePanels({ panels, removePanel, changeDiatonic, changeDiatonicKey }) {
  function switchRenderPanel(panel) {
    if (panel.panelType === PanelTypes.diatonic) {
      return (
        <Grid key={panel.id} item xs={12}>
          <Card>
            <Button onClick={() => removePanel(panel.id)}>remove</Button>
            <DiatonicPanel
              panel={panel}
              onRemoveClick={() => removePanel(panel.id)}
              onChangeDiatonic={(dChord) => changeDiatonic(panel.id, dChord)}
              onChangeKey={(key) => changeDiatonicKey(panel.id, key)}
            />
          </Card>
        </Grid>
      );
    }
    if (panel.panelType === PanelTypes.c5th) {
      return (
        <Grid key={panel.id} item xs={12} sm={8}>
          <Card>
            <Button onClick={() => removePanel(panel.id)}>remove</Button>
            <C5thPanel />
          </Card>
        </Grid>
      );
    }
    if (panel.panelType === PanelTypes.chord) {
      return (
        <Grid key={panel.id} item xs={6}>
          <Card>
            <Button onClick={() => removePanel(panel.id)}>remove</Button>
            <div>chord test card</div>
          </Card>
        </Grid>
      );
    }
    return <div>empty</div>;
  }

  return (
    <Grid container spacing={8}>
      {panels.map((panel) => switchRenderPanel(panel))}
    </Grid>
  );
}

BasePanels.propTypes = {
  panels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      panelType: PropTypes.number.isRequired,
      dChord: PropTypes.number, // need on id ==0
      key: PropTypes.number // need on id ==0
    }).isRequired
  ).isRequired,
  removePanel: PropTypes.func.isRequired,
  changeDiatonic: PropTypes.func.isRequired,
  changeDiatonicKey: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(BasePanels);
