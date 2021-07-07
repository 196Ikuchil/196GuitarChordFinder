import { combineReducers } from 'redux';

// ACTION

let nextTodoId = 0;
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  // eslint-disable-next-line no-plusplus
  id: nextTodoId++,
  text
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
});

// action creator

export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

// stateに追加
export default combineReducers({ todos });

// component
// https://github.com/reduxjs/redux/blob/master/examples/todos/src/containers/VisibleTodoList.js
const getVisibleTodos = (todos) => todos;

// switch (filter) {
//   case VisibilityFilters.SHOW_ALL:
//     return todos;
//   case VisibilityFilters.SHOW_COMPLETED:
//     return todos.filter((t) => t.completed);
//   case VisibilityFilters.SHOW_ACTIVE:
//     return todos.filter((t) => !t.completed);
//   default:
//     throw new Error(`Unknown filter: ${filter}`);
// }

export const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos)
});

export const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id))
});
