import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../../modules/panel';

const AddBasePanelButton = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <input ref={(node) => (input = node)} />
        <button type="submit">testbutton</button>
      </form>
    </div>
  );
};

export default connect()(AddBasePanelButton);
