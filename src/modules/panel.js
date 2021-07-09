import { combineReducers } from 'redux';

// ACTION

export const addPanel = (isminor, key, panels) => ({
  type: 'ADD_PANEL',
  // eslint-disable-next-line no-plusplus
  id: getTailIndex(panels) + 1,
  m: isminor,
  key
});

export const removePanel = (id) => ({
  type: 'REMOVE_PANEL',
  id
});

// action creator

export const panels = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PANEL':
      return [
        ...state,
        {
          id: action.id,
          m: action.m,
          key: action.key
        }
      ];
    case 'REMOVE_PANEL':
      return state.filter((panel) => panel.id !== action.id);
    default:
      return state;
  }
};

// stateに追加
export default combineReducers({ panels });

export const getTailIndex = (panels) => (panels.length !== 0 ? panels.slice(-1)[0].id : 0);

// component
export const mapStateToProps = (state) => ({
  panels: state.panels
});

export const mapDispatchToProps = (dispatch) => ({
  removePanel: (id) => dispatch(removePanel(id))
});
