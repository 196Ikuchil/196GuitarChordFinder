const initialState = {
  id: 0, // dummy
  key: 0,
  chord: 0,
  pickupkey: 0,
  pickupchord: 0,
  pickupchordNum: 0
};

export const changeSearchKey = (id, key) => ({
  type: 'CHANGE_SEARCH_KEY',
  key
});

export const changeSearchChord = (id, chord) => ({
  type: 'CHANGE_SEARCH_CHORD',
  chord
});

export const changePickupChord = (key, chord, chordNum) => ({
  type: 'CHANGE_PICKUP_CHORD',
  pickupkey: key,
  pickupchord: chord,
  pickupchordNum: chordNum
});

export const searchInfo = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_KEY':
      return { ...state, key: action.key };
    case 'CHANGE_SEARCH_CHORD':
      return { ...state, chord: action.chord };
    case 'CHANGE_PICKUP_CHORD':
      return {
        ...state,
        pickupkey: action.pickupkey,
        pickupchord: action.pickupchord,
        pickupchordNum: action.pickupchordNum
      };
    default:
      return state;
  }
};

export const mapStateToProps = (state) => ({
  searchInfo: state.searchInfo
});

export const mapDispatchToProps = (dispatch) => ({
  changeSearchKey: (id, key) => dispatch(changeSearchKey(id, key)),
  changeSearchChord: (id, chord) => dispatch(changeSearchChord(id, chord)),
  changePickupChord: (key, chord, chordNum) => dispatch(changePickupChord(key, chord, chordNum))
});
