import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, Card, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { LightTooltip } from '../../components/LightTooltip';
import { mapStateToProps, mapDispatchToProps } from '../../modules/fretboard';

function FretboardBox({
  fretboards,
  isSharp,
  addFretboardPanel,
  changeFretboard,
  changeFretboardPanelType,
  changeFretboardTextType,
  removePanel
}) {
  const { t } = useTranslation();
  function handleAddClick(event) {
    addFretboardPanel();
  }

  return (
    <Grid container spacing={0.5}>
      <Grid item xs={12}>
        <Card>
          <Grid item xs={12}>
            <div>test</div>
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={12}>
        {fretboards.map((fboard, i) => (
          <div>i</div>
        ))}
      </Grid>
      <Grid item xs={12}>
        <LightTooltip
          condition={fretboards.length < 2 ? 1 : 0}
          text={t('fretboard.tips.addbutton')}
          placement="right-start"
        >
          <Button size="large" variant="contained" color="primary" onClick={handleAddClick}>
            {t('fretboard.button.add')}
          </Button>
        </LightTooltip>
      </Grid>
    </Grid>
  );
}

FretboardBox.propTypes = {
  fretboards: PropTypes.shape({
    paneltype: PropTypes.number.isRequired,
    key: PropTypes.number.isRequired,
    chord: PropTypes.number.isRequired,
    scale: PropTypes.number.isRequired,
    texttype: PropTypes.number.isRequired
  }).isRequired,
  isSharp: PropTypes.bool.isRequired,
  addFretboardPanel: PropTypes.func.isRequired,
  changeFretboard: PropTypes.func.isRequired,
  changeFretboardPanelType: PropTypes.func.isRequired,
  changeFretboardTextType: PropTypes.func.isRequired,
  removePanel: PropTypes.func.isRequired
};
export default connect(
  (state) => ({
    isSharp: state.isSharp.isSharp,
    fretboards: state.fretboards
  }),
  mapDispatchToProps
)(FretboardBox);
