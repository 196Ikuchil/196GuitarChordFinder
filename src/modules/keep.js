export const addChordKeep = (key, chord, chordNum) => ({
  type: 'ADD_CHORD_KEEP',
  key,
  chord,
  chordNum
});

export const removeChordKeep = (index) => ({
  type: 'REMOVE_CHORD_KEEP',
  index
});

export const chordkeeps = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CHORD_KEEP':
      return [
        ...state,
        {
          key: action.key,
          chord: action.chord,
          chordNum: action.chordNum
        }
      ];
    case 'REMOVE_CHORD_KEEP':
      return state.filter((x, i) => i !== action.index);
    default:
      return state;
  }
};

// ======================
const initializeState = {
  pickupkey: 0,
  pickupchord: 0,
  pickupchordNum: 0
};

export const changeKeepPickupChord = (key, chord, chordNum) => ({
  type: 'CHANGE_KEEP_PICKUP_CHORD',
  pickupkey: key,
  pickupchord: chord,
  pickupchordNum: chordNum
});

export const keepchordpickup = (state = initializeState, action) => {
  switch (action.type) {
    case 'CHANGE_KEEP_PICKUP_CHORD':
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
  chordkeeps: state.chordkeeps,
  keepchordpickup: state.keepchordpickup
});

export const mapDispatchToProps = (dispatch) => ({
  addChordKeep: (key, chord, chordNum) => dispatch(addChordKeep(key, chord, chordNum)),
  removeChordKeep: (index) => dispatch(removeChordKeep(index)),
  changeKeepPickupChord: (key, chord, chordNum) =>
    dispatch(changeKeepPickupChord(key, chord, chordNum))
});
