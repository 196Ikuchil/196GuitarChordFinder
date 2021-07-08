import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// material
import { Grid } from '@material-ui/core';
import { mapStateToProps, mapDispatchToProps } from '../../modules/panel';
import { DiatonicPanel } from '../../components/_dashboard/diatonic';

function BasePanels({ todos, toggleTodo }) {
  return (
    <Grid container spacing={8}>
      {todos.map((todo) => (
        <Grid key={todo.id} item xs={12}>
          <DiatonicPanel />
        </Grid>
      ))}
    </Grid>
  );
}

BasePanels.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(BasePanels);
