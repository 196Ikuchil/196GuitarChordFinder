import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// material
import { Grid } from '@material-ui/core';
import { mapStateToProps, mapDispatchToProps } from '../../modules/panel';
import { TestPanel } from '../../components/_dashboard/app';

function BasePanels({ todos, toggleTodo }) {
  return (
    <Grid container spacing={3}>
      {todos.map((todo) => (
        <Grid key={todo.id} item xs={12} sm={6} md={12}>
          <TestPanel />
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
