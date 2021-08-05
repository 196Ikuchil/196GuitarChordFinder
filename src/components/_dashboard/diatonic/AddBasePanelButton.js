import React from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, MenuItem, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import {
  addDiatonicPanel,
  mapStateToProps,
  addC5thPanel,
  addChordPanel
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

  return (
    <div>
      <Button size="large" variant="contained" color="primary" onClick={handleClick}>
        {/* <AddIcon /> */}
        {t('scrapbook.button.add')}
      </Button>
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
      </Menu>
    </div>
  );
};

export default connect(mapStateToProps)(AddBasePanelButton);
