import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// material
import { Grid, Card, CardContent, IconButton } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { mapStateToProps, mapDispatchToProps, PanelTypes } from '../../modules/diatonicPanel';
import {
  DiatonicPanel,
  C5thPanel,
  ChordPanel,
  RedirectToChordSearchButton,
  FretBoardPanel
} from '../../components/_dashboard/diatonic';

function BasePanels({ panels, removePanel, changeDiatonic, changeDiatonicKey }) {
  function switchRenderPanel(panel, index) {
    if (panel.panelType === PanelTypes.diatonic) {
      return (
        <Grid key={index} item xs={12}>
          <Card>
            <IconButton onClick={() => removePanel(index)}>
              <ClearIcon />
            </IconButton>
            <DiatonicPanel
              panel={panel}
              index={index}
              onRemoveClick={() => removePanel(index)}
              onChangeDiatonic={(dChord) => changeDiatonic(index, dChord)}
              onChangeKey={(key) => changeDiatonicKey(index, key)}
            />
          </Card>
        </Grid>
      );
    }
    if (panel.panelType === PanelTypes.c5th) {
      return (
        <Grid key={index} item xs={12} sm={8}>
          <Card>
            <IconButton onClick={() => removePanel(index)}>
              <ClearIcon />
            </IconButton>
            <C5thPanel />
          </Card>
        </Grid>
      );
    }
    if (panel.panelType === PanelTypes.chord) {
      return (
        <Grid key={index} item xs={6} sm={3} md={2}>
          <Card>
            <Grid container>
              <Grid item xs={3} sm={4}>
                <IconButton onClick={() => removePanel(index)}>
                  <ClearIcon />
                </IconButton>
              </Grid>
              <Grid item xs={8} sm={7}>
                <RedirectToChordSearchButton panel={panel} />
              </Grid>
            </Grid>
            <ChordPanel panel={panel} index={index} />
          </Card>
        </Grid>
      );
    }
    if (panel.panelType === PanelTypes.fretboard) {
      return (
        <Grid key={index} item xs={12}>
          <Card>
            <IconButton onClick={() => removePanel(index)}>
              <ClearIcon />
            </IconButton>
            <FretBoardPanel panel={panel} index={index} />
          </Card>
        </Grid>
      );
    }
    return <div>empty</div>;
  }

  return (
    <Grid container spacing={0.5}>
      {panels.map((panel, i) => switchRenderPanel(panel, i))}
    </Grid>
  );
}

BasePanels.propTypes = {
  panels: PropTypes.arrayOf(
    PropTypes.shape({
      panelType: PropTypes.number.isRequired,
      dChord: PropTypes.number, // need on panel type ==0
      key: PropTypes.number, // need on panel type ==0
      chordPanelType: PropTypes.number, // need on panel type == 2
      fretboardPanelType: PropTypes.number, // for fretboard panel
      chord: PropTypes.number, // need on panel type == 2
      color: PropTypes.string,
      scale: PropTypes.string,
      fdisplay: PropTypes.number
    }).isRequired
  ).isRequired,
  removePanel: PropTypes.func.isRequired,
  changeDiatonic: PropTypes.func.isRequired,
  changeDiatonicKey: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(BasePanels);
