import { GetScaleKeys, scaletableTypes, getNextFretboardPanelType } from '../utils/music';

const initialState = {
  key: 0,
  chord: 0,
  scale: GetScaleKeys()[0],
  scaletabletype: scaletableTypes.chord
};

export const changeScaletable = (index, scaletabletype, key, chord, scale) => ({
  type: 'CHANGE_SCALETABLE',
  index,
  scaletabletype,
  key,
  chord,
  scale
});

export const changeScaletablePanelType = (index) => ({
  type: 'CHANGE_SCALETABLE_PANEL_TYPE',
  index
});

export const scaletable = (state = [initialState], action) => {
  switch (action.type) {
    case 'CHANGE_SCALETABLE':
      return [
        ...state.slice(0, action.index),
        {
          ...state[action.index],
          scaletabletype: action.scaletabletype,
          key: action.key,
          chord: action.chord,
          scale: action.scale
        },
        ...state.slice(action.index + 1)
      ];
    case 'CHANGE_SCALETABLE_PANEL_TYPE':
      return [
        ...state.slice(0, action.index),
        {
          ...state[action.index],
          scaletabletype: getNextFretboardPanelType(state[action.index].scaletabletype)
        },
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
};

export const mapStateToProps = (state) => ({
  scaletable: state.scaletable
});

export const mapDispatchToProps = (dispatch) => ({
  changeScaletable: (index, key, chord, scale, scaletabletype) =>
    dispatch(changeScaletable(index, key, chord, scale, scaletabletype)),
  changeScaletablePanelType: (index) => dispatch(changeScaletablePanelType(index))
});
