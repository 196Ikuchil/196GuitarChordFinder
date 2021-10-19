import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Menu, MenuItem, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { LightTooltip } from '../../LightTooltip';
import {
  addDiatonicPanel,
  mapStateToProps,
  addC5thPanel,
  addChordPanel,
  addFretboardPanel,
  FretboardPanelTypes
} from '../../../modules/diatonicPanel';

const AddBasePanelButton = ({ panels, dispatch }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { t } = useTranslation();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickDiatonic = () => {
    dispatch(addDiatonicPanel(0, 0, panels));
    handleClose();
  };

  const onClickC5th = () => {
    dispatch(addC5thPanel(panels));
    handleClose();
  };

  const onClickChord = () => {
    dispatch(addChordPanel(0, 0));
    handleClose();
  };

  const onClickFretboard = () => {
    dispatch(addFretboardPanel(FretboardPanelTypes.chord, 0, 0, 0));
    handleClose();
  };

  return (
    <div>
      <LightTooltip
        condition={panels.length < 2 ? 1 : 0}
        text={t('scrapbook.tips.addbutton')}
        placement="left-start"
      >
        <Button size="large" variant="contained" color="primary" onClick={handleClick}>
          {t('scrapbook.button.add')}
        </Button>
      </LightTooltip>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={onClickDiatonic}>{t('scrapbook.select.diatonic')}</MenuItem>
        <MenuItem onClick={onClickC5th}>{t('scrapbook.select.c5th')}</MenuItem>
        <MenuItem onClick={onClickChord}>{t('scrapbook.select.chord')}</MenuItem>
        <MenuItem onClick={onClickFretboard}>{t('scrapbook.select.fretboard')}</MenuItem>
      </Menu>
    </div>
  );
};

AddBasePanelButton.propTypes = {
  panels: PropTypes.arrayOf(
    PropTypes.shape({
      panelType: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
};

export default connect(mapStateToProps)(AddBasePanelButton);
