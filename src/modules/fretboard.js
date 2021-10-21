import {
  FretboardTextTypes,
  FretboardPanelTypes,
  getNextFretboardPanelType,
  getNextFretboardTextType
} from '../utils/music';

const fretboardsinitialState = {
  paneltype: FretboardPanelTypes.chord,
  key: 0,
  chord: 0,
  scale: 0,
  texttype: FretboardTextTypes.tone
};

export const addFretboardPanel = () => ({
  type: 'ADD_FRETBOARD_PANEL_ONFBOARD'
});

export const changeFretboard = (index, panelType, key, chord, scale) => ({
  type: 'CHANGE_FRETBOARD_ONFBOARD',
  index,
  panelType,
  key,
  chord,
  scale
});

export const removePanel = (index) => ({
  type: 'REMOVE_PANEL_ONFBOARD',
  index
});

export const changeFretboardPanelType = (index) => ({
  type: 'CHANGE_FRETBOARD_PANEL_TYPE_ONFBOARD',
  index
});
export const changeFretboardTextType = (index) => ({
  type: 'CHANGE_FRETBOARD_TEXT_TYPE_ONFBOARD',
  index
});

export const fretboards = (state = [fretboardsinitialState], action) => {
  switch (action.type) {
    case 'ADD_FRETBOARD_PANEL_ONFBOARD':
      return [
        ...state,
        {
          paneltype: action.fpanelType,
          key: 0,
          chord: 0,
          scale: 0,
          texttype: FretboardTextTypes.tone
        }
      ];
    case 'CHANGE_FRETBOARD_ONFBOARD':
      return [
        ...state.slice(0, action.index),
        {
          ...state[action.index],
          paneltype: action.paneltype,
          key: action.key,
          chord: action.chord,
          scale: action.scale
        },
        ...state.slice(action.index + 1)
      ];
    case 'CHANGE_FRETBOARD_PANEL_TYPE_ONFBOARD':
      return [
        ...state.slice(0, action.index),
        {
          ...state[action.index],
          paneltype: getNextFretboardPanelType(state[action.index].paneltype)
        },
        ...state.slice(action.index + 1)
      ];
    case 'CHANGE_FRETBOARD_TEXT_TYPE_ONFBOARD':
      return [
        ...state.slice(0, action.index),
        {
          ...state[action.index],
          texttype: getNextFretboardTextType(state[action.index].texttype)
        },
        ...state.slice(action.index + 1)
      ];
    case 'REMOVE_PANEL_ONFBOARD':
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
    default:
      return state;
  }
};

export const mapStateToProps = (state) => ({
  fretboards: state.fretboards
});

export const mapDispatchToProps = (dispatch) => ({
  addFretboardPanel: () => dispatch(addFretboardPanel()),
  changeFretboard: (index, fPanelType, key, chord, scale) =>
    dispatch(changeFretboard(index, fPanelType, key, chord, scale)),
  changeFretboardPanelType: (index) => dispatch(changeFretboardPanelType(index)),
  changeFretboardTextType: (index) => dispatch(changeFretboardTextType(index)),
  removePanel: (id) => dispatch(removePanel(id))
});
