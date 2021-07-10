import { combineReducers } from 'redux';

export const PanelTypes = {
  diatonic: 0,
  c5th: 1,
  chord: 2
};

// ACTION

export const addDiatonicPanel = (dChord, key, panels) => ({
  type: 'ADD_DIATONIC_PANEL',
  // eslint-disable-next-line no-plusplus
  id: getTailIndex(panels) + 1,
  panelType: PanelTypes.diatonic,
  dChord,
  key
});

export const changeDiatonic = (id, dChord) => ({
  type: 'CHANGE_DIATONIC',
  id,
  dChord
});

export const changeKey = (id, key) => ({
  type: 'CHANGE_KEY',
  id,
  key
});

export const removePanel = (id) => ({
  type: 'REMOVE_PANEL',
  id
});

// action creator

export const panels = (state = [], action) => {
  switch (action.type) {
    case 'ADD_DIATONIC_PANEL':
      return [
        ...state,
        {
          id: action.id,
          panelType: action.panelType,
          dChord: action.dChord,
          key: action.key
        }
      ];
    case 'CHANGE_DIATONIC':
      return [
        ...state.slice(0, action.id),
        { ...state[action.id], dChord: action.dChord },
        ...state.slice(action.id + 1)
      ];
    case 'CHANGE_KEY':
      return [
        ...state.slice(0, action.id),
        { ...state[action.id], key: action.key },
        ...state.slice(action.id + 1)
      ];
    case 'REMOVE_PANEL':
      return state.filter((panel) => panel.id !== action.id);
    default:
      return state;
  }
};

// stateに追加
export default combineReducers({ panels });

const getTailIndex = (panels) => (panels.length !== 0 ? panels.slice(-1)[0].id : -1);

// component
export const mapStateToProps = (state) => ({
  panels: state.panels
});

export const mapDispatchToProps = (dispatch) => ({
  changeDiatonic: (id, dChord) => dispatch(changeDiatonic(id, dChord)),
  changeKey: (id, key) => dispatch(changeKey(id, key)),
  removePanel: (id) => dispatch(removePanel(id))
});
