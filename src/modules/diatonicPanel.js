export const PanelTypes = {
  diatonic: 0,
  c5th: 1,
  chord: 2,
  fretboard: 3
};

export const ChordPanelTypes = {
  guitar: 0,
  score: 1
};

export const FretboardPanelTypes = {
  chord: 0,
  scale: 1
};

const initState = {
  panelType: PanelTypes.diatonic,
  dChord: 0,
  key: 0
};

// increment chord panel type 0 -> 1->2->0
const getNextChordPanelType = (type) => (type + 1) % Object.keys(ChordPanelTypes).length;

const getNextFretboardPanelType = (type) => (type + 1) % Object.keys(FretboardPanelTypes).length;
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
export const addChordPanel = (key, chord) => ({
  type: 'ADD_CHORD_PANEL',
  panelType: PanelTypes.chord,
  chordPanelType: ChordPanelTypes.guitar,
  key,
  chord
});
// add after the specified index
export const addChordPanelById = (key, chord, index, color) => ({
  type: 'INSERT_CHORD_PANEL',
  index: index + 1,
  panelType: PanelTypes.chord,
  chordPanelType: ChordPanelTypes.guitar,
  key,
  chord,
  color
});

export const addFretboardPanel = (fpanelType, key, chord, scale) => ({
  type: 'ADD_FRETBOARD_PANEL',
  panelType: PanelTypes.fretboard,
  fpanelType,
  key,
  chord,
  scale
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
// FIXME: add scale
export const changeFretboard = (index, fPanelType, key, chord, scale) => ({
  type: 'CHANGE_FRETBOARD',
  index,
  fPanelType,
  key,
  chord,
  scale
});
export const changeFretboardPanelType = (index) => ({
  type: 'CHANGE_FRETBOARD_PANEL_TYPE',
  index
});

export const removePanel = (index) => ({
  type: 'REMOVE_PANEL',
  index
});

export const removeAllPanel = () => ({
  type: 'REMOVE_All_PANEL'
});

// action creator

export const panels = (state = [initState], action) => {
  switch (action.type) {
    case 'ADD_DIATONIC_PANEL':
      return [
        ...state,
        {
          panelType: action.panelType,
          dChord: action.dChord,
          key: action.key
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
        ...state,
        {
          panelType: action.panelType,
          chordPanelType: action.chordPanelType,
          key: action.key,
          chord: action.chord,
          color: 'allBlack'
        }
      ];
    case 'INSERT_CHORD_PANEL':
      return [
        ...state.slice(0, action.index),
        {
          panelType: action.panelType,
          chordPanelType: action.chordPanelType,
          key: action.key,
          chord: action.chord,
          color: action.color
        },
        ...state.slice(action.index)
      ];
    case 'ADD_FRETBOARD_PANEL':
      return [
        ...state,
        {
          panelType: action.panelType,
          fretboardPanelType: action.fpanelType,
          key: action.key,
          chord: action.chord,
          scale: action.scale
        }
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
    case 'CHANGE_FRETBOARD':
      return [
        ...state.slice(0, action.index),
        {
          ...state[action.index],
          fretboardPanelType: action.fPanelType,
          key: action.key,
          chord: action.chord,
          scale: action.scale
        },
        ...state.slice(action.index + 1)
      ];
    case 'CHANGE_FRETBOARD_PANEL_TYPE':
      return [
        ...state.slice(0, action.index),
        {
          ...state[action.index],
          fretboardPanelType: getNextFretboardPanelType(state[action.index].fretboardPanelType)
        },
        ...state.slice(action.index + 1)
      ];
    case 'REMOVE_PANEL':
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
    case 'REMOVE_All_PANEL':
      return [];
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
  changeFretboard: (index, fPanelType, key, chord, scale) =>
    dispatch(changeFretboard(index, fPanelType, key, chord, scale)),
  changeFretboardPanelType: (index) => dispatch(changeFretboardPanelType(index)),
  removePanel: (id) => dispatch(removePanel(id)),
  removeAllPanel: () => dispatch(removeAllPanel()),
  addChordPanelById: (key, chord, id, color) => dispatch(addChordPanelById(key, chord, id, color))
});
