import { GetScaleKeys, scaletableTypes } from '../utils/music';

const initialState = {
  key: 0,
  chord: 0,
  scale: GetScaleKeys()[0],
  scaletabletype: scaletableTypes.chord
};

export const changeScaletable = (index, key, chord, scale, scaletabletype) => ({
  type: 'CHANGE_SCALETABLE',
  index,
  key,
  chord,
  scale,
  scaletabletype
});

export const scaletable = (state = [initialState], action) => {
  switch (action.type) {
    case 'CHANGE_SCALETABLE':
      return [
        ...state.slice(0, action.index),
        {
          ...state[action.index],
          key: action.key,
          chord: action.chord,
          scale: action.scale,
          scaletabletype: action.scaletabletype
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
    dispatch(changeScaletable(index, key, chord, scale, scaletabletype))
});
