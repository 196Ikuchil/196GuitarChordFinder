import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// material
import { Grid, Card, IconButton } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { mapStateToProps, mapDispatchToProps, PanelTypes } from '../../modules/diatonicPanel';
import {
  DiatonicPanel,
  C5thPanel,
  ChordPanel,
  RedirectToChordSearchButton
} from '../../components/_dashboard/diatonic';

function BasePanels({ panels, removePanel, changeDiatonic, changeDiatonicKey }) {
  function switchRenderPanel(panel) {
    if (panel.panelType === PanelTypes.diatonic) {
      return (
        <Grid key={panel.id} item xs={12}>
          <Card>
            <IconButton onClick={() => removePanel(panel.id)}>
              <ClearIcon />
            </IconButton>
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
            <IconButton onClick={() => removePanel(panel.id)}>
              <ClearIcon />
            </IconButton>
            <C5thPanel />
          </Card>
        </Grid>
      );
    }
    if (panel.panelType === PanelTypes.chord) {
      return (
        <Grid key={panel.id} item xs={6} sm={3} md={2}>
          <Card>
            <Grid container>
              <Grid item xs={3} sm={6}>
                <IconButton onClick={() => removePanel(panel.id)}>
                  <ClearIcon />
                </IconButton>
              </Grid>
              <Grid item xs={7} sm={6}>
                <RedirectToChordSearchButton panel={panel} />
              </Grid>
            </Grid>
            <ChordPanel panel={panel} />
          </Card>
        </Grid>
      );
    }
    return <div>empty</div>;
  }

  return (
    <Grid container spacing={0.5}>
      {panels.map((panel) => switchRenderPanel(panel))}
    </Grid>
  );
}

BasePanels.propTypes = {
  panels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      panelType: PropTypes.number.isRequired,
      dChord: PropTypes.number, // need on panel type ==0
      key: PropTypes.number, // need on panel type ==0
      chordPanelType: PropTypes.number, // need on panel type == 2
      chord: PropTypes.number // need on panel type == 2
    }).isRequired
  ).isRequired,
  removePanel: PropTypes.func.isRequired,
  changeDiatonic: PropTypes.func.isRequired,
  changeDiatonicKey: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(BasePanels);
