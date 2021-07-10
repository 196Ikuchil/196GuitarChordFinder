import React from 'react';
import { connect } from 'react-redux';
import { addDiatonicPanel, mapStateToProps, PanelTypes } from '../../../modules/diatonicPanel';

const AddBasePanelButton = ({ panels, dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addDiatonicPanel(0, 0, panels));
          input.value = '';
        }}
      >
        <input ref={(node) => (input = node)} />
        <button type="submit">testbutton</button>
      </form>
    </div>
  );
};

export default connect(mapStateToProps)(AddBasePanelButton);
