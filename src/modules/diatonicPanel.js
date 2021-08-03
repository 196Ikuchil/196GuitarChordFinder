export const PanelTypes = {
  diatonic: 0,
  c5th: 1,
  chord: 2
};

export const ChordPanelTypes = {
  guitar: 0,
  score: 1
};

// increment chord panel type 0 -> 1->2->0
const getNextChordPanelType = (type) => (type + 1) % Object.keys(ChordPanelTypes).length;
// ACTION
// add to tail
export const addDiatonicPanel = (dChord, key, panels) => ({
  type: 'ADD_DIATONIC_PANEL',
  panelType: PanelTypes.diatonic,
  dChord,
  key
});
// add to tail
export const addC5thPanel = (panels) => ({
  type: 'ADD_C5th_PANEL',
  panelType: PanelTypes.c5th
});
// add to tail
export const addChordPanel = (key, chord, panels) => ({
  type: 'ADD_CHORD_PANEL',
  panelType: PanelTypes.chord,
  chordPanelType: ChordPanelTypes.guitar,
  key,
  chord
});
// add after the specified index
export const addChordPanelById = (key, chord, index) => ({
  type: 'ADD_CHORD_PANEL',
  index: index + 1,
  panelType: PanelTypes.chord,
  chordPanelType: ChordPanelTypes.guitar,
  key,
  chord
});

export const changeChordPanelType = (index) => ({
  type: 'CHANGE_CHORD_PANEL_TYPE',
  index
});

export const changeChordPanelKey = (index, key) => ({
  type: 'CHANGE_CHORD_PANEL_KEY',
  index,
  key
});

export const changeChordPanelChord = (index, chord) => ({
  type: 'CHANGE_CHORD_PANEL_CHORD',
  index,
  chord
});

export const changeDiatonic = (index, dChord) => ({
  type: 'CHANGE_DIATONIC',
  index,
  dChord
});

export const changeDiatonicKey = (index, key) => ({
  type: 'CHANGE_DIATONIC_KEY',
  index,
  key
});

export const removePanel = (index) => ({
  type: 'REMOVE_PANEL',
  index
});

// action creator

export const panels = (state = [], action) => {
  switch (action.type) {
    case 'ADD_DIATONIC_PANEL':
      return [
        ...state,
        {
          panelType: action.panelType,
          dChord: action.dChord,
          key: action.key,
          sharp: action.sharp
        }
      ];
    case 'ADD_C5th_PANEL':
      return [
        ...state,
        {
          panelType: action.panelType
        }
      ];
    case 'ADD_CHORD_PANEL':
      return [
        ...state.slice(0, action.index),
        {
          panelType: action.panelType,
          chordPanelType: action.chordPanelType,
          key: action.key,
          chord: action.chord
        },
        ...state.slice(action.index)
      ];
    case 'CHANGE_CHORD_PANEL_TYPE':
      return [
        ...state.slice(0, action.index),
        {
          ...state[action.index],
          chordPanelType: getNextChordPanelType(state[action.index].chordPanelType)
        },
        ...state.slice(action.index + 1)
      ];
    case 'CHANGE_CHORD_PANEL_KEY':
      return [
        ...state.slice(0, action.index),
        { ...state[action.index], key: action.key },
        ...state.slice(action.index + 1)
      ];
    case 'CHANGE_CHORD_PANEL_CHORD':
      return [
        ...state.slice(0, action.index),
        { ...state[action.index], chord: action.chord },
        ...state.slice(action.index + 1)
      ];
    case 'CHANGE_DIATONIC':
      return [
        ...state.slice(0, action.index),
        { ...state[action.index], dChord: action.dChord },
        ...state.slice(action.index + 1)
      ];
    case 'CHANGE_DIATONIC_KEY':
      return [
        ...state.slice(0, action.index),
        { ...state[action.index], key: action.key },
        ...state.slice(action.index + 1)
      ];
    case 'REMOVE_PANEL':
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
    default:
      return state;
  }
};

// component
export const mapStateToProps = (state) => ({
  panels: state.panels
});

export const mapDispatchToProps = (dispatch) => ({
  changeDiatonic: (id, dChord) => dispatch(changeDiatonic(id, dChord)),
  changeDiatonicKey: (id, key) => dispatch(changeDiatonicKey(id, key)),
  changeChordPanelType: (id) => dispatch(changeChordPanelType(id)),
  changeChordPanelKey: (id, key) => dispatch(changeChordPanelKey(id, key)),
  changeChordPanelChord: (id, chord) => dispatch(changeChordPanelChord(id, chord)),
  removePanel: (id) => dispatch(removePanel(id)),
  addChordPanelById: (key, chord, id) => dispatch(addChordPanelById(key, chord, id))
});
