const initialState = {
  id: 0, // dummy
  key: 0,
  chord: 0
};

export const changeSearchKey = (id, key) => ({
  type: 'CHANGE_SEARCH_KEY',
  key
});

export const changeSearchChord = (id, chord) => ({
  type: 'CHANGE_SEARCH_CHORD',
  chord
});

export const searchInfo = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_KEY':
      return { ...state, key: action.key };
    case 'CHANGE_SEARCH_CHORD':
      return { ...state, chord: action.chord };
    default:
      return state;
  }
};

export const mapStateToProps = (state) => ({
  searchInfo: state.searchInfo
});

export const mapDispatchToProps = (dispatch) => ({
  changeSearchKey: (id, key) => dispatch(changeSearchKey(id, key)),
  changeSearchChord: (id, chord) => dispatch(changeSearchChord(id, chord))
});
