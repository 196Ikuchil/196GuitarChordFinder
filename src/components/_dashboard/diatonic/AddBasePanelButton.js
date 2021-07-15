import React from 'react';
import { Menu, MenuItem } from '@material-ui/core';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { styled } from '@material-ui/core/styles';
import {
  addDiatonicPanel,
  mapStateToProps,
  addC5thPanel,
  addChordPanel
} from '../../../modules/diatonicPanel';

const StyledIconButton = styled(IconButton)(() => ({
  padding: 0
}));

const AddBasePanelButton = ({ panels, dispatch }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

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
    dispatch(addChordPanel(0, 0, panels));
    handleClose();
  };

  return (
    <div>
      <StyledIconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <AddIcon />
        New..
      </StyledIconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={onClickDiatonic}>ダイアトニック</MenuItem>
        <MenuItem onClick={onClickC5th}>五度圏表</MenuItem>
        <MenuItem onClick={onClickChord}>簡易コードパネル</MenuItem>
      </Menu>
    </div>
  );
};

export default connect(mapStateToProps)(AddBasePanelButton);
