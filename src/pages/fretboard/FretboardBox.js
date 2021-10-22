import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, Card, Button, IconButton } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import ClearIcon from '@material-ui/icons/Clear';
import { LightTooltip } from '../../components/LightTooltip';
import { mapStateToProps, mapDispatchToProps } from '../../modules/fretboard';
import { FretBoardPanel } from '../../components/_dashboard/fretboard';

function FretboardBox({ fretboards, isSharp, addFretboardPanel, removePanel }) {
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
          <Grid key={i} item xs={12}>
            <Card>
              <IconButton onClick={() => removePanel(i)}>
                <ClearIcon />
              </IconButton>
              <FretBoardPanel fboard={fboard} index={i} />
            </Card>
          </Grid>
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
  fretboards: PropTypes.arrayOf(
    PropTypes.shape({
      fretboardPanelType: PropTypes.number.isRequired,
      key: PropTypes.number.isRequired,
      chord: PropTypes.number.isRequired,
      scale: PropTypes.string.isRequired,
      texttype: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  isSharp: PropTypes.bool.isRequired,
  addFretboardPanel: PropTypes.func.isRequired,
  removePanel: PropTypes.func.isRequired
};
export default connect(
  (state) => ({
    isSharp: state.isSharp.isSharp,
    fretboards: state.fretboards
  }),
  mapDispatchToProps
)(FretboardBox);