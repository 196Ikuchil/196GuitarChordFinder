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

export const addDiatonicPanel = (dChord, key, panels) => ({
  type: 'ADD_DIATONIC_PANEL',
  // eslint-disable-next-line no-plusplus
  id: getTailIndex(panels) + 1,
  panelType: PanelTypes.diatonic,
  dChord,
  key
});

export const addC5thPanel = (panels) => ({
  type: 'ADD_C5th_PANEL',
  // eslint-disable-next-line no-plusplus
  id: getTailIndex(panels) + 1,
  panelType: PanelTypes.c5th
});

export const addChordPanel = (key, chord, panels) => ({
  type: 'ADD_CHORD_PANEL',
  // eslint-disable-next-line no-plusplus
  id: getTailIndex(panels) + 1, // default panels tail, neigbor of target panel
  panelType: PanelTypes.chord,
  chordPanelType: ChordPanelTypes.guitar,
  key,
  chord
});

export const addChordPanelById = (key, chord, id) => ({
  type: 'ADD_CHORD_PANEL',
  id: id + 1,
  panelType: PanelTypes.chord,
  chordPanelType: ChordPanelTypes.guitar,
  key,
  chord
});

export const changeChordPanelType = (id) => ({
  type: 'CHANGE_CHORD_PANEL_TYPE',
  id
});

export const changeChordPanelKey = (id, key) => ({
  type: 'CHANGE_CHORD_PANEL_KEY',
  id,
  key
});

export const changeChordPanelChord = (id, chord) => ({
  type: 'CHANGE_CHORD_PANEL_CHORD',
  id,
  chord
});

export const changeDiatonic = (id, dChord) => ({
  type: 'CHANGE_DIATONIC',
  id,
  dChord
});

export const changeDiatonicKey = (id, key) => ({
  type: 'CHANGE_DIATONIC_KEY',
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
          key: action.key,
          sharp: action.sharp
        }
      ];
    case 'ADD_C5th_PANEL':
      return [
        ...state,
        {
          id: action.id,
          panelType: action.panelType
        }
      ];
    case 'ADD_CHORD_PANEL':
      console.log(...state.slice(action.id).map((x) => Object.assign(x, { id: x.id + 1 })));
      return [
        ...state.slice(0, action.id),
        {
          id: action.id,
          panelType: action.panelType,
          chordPanelType: action.chordPanelType,
          key: action.key,
          chord: action.chord
        },
        ...state.slice(action.id)
      ];
    case 'CHANGE_CHORD_PANEL_TYPE':
      return [
        ...state.slice(0, action.id),
        {
          ...state[action.id],
          chordPanelType: getNextChordPanelType(state[action.id].chordPanelType)
        },
        ...state.slice(action.id + 1)
      ];
    case 'CHANGE_CHORD_PANEL_KEY':
      return [
        ...state.slice(0, action.id),
        { ...state[action.id], key: action.key },
        ...state.slice(action.id + 1)
      ];
    case 'CHANGE_CHORD_PANEL_CHORD':
      return [
        ...state.slice(0, action.id),
        { ...state[action.id], chord: action.chord },
        ...state.slice(action.id + 1)
      ];
    case 'CHANGE_DIATONIC':
      return [
        ...state.slice(0, action.id),
        { ...state[action.id], dChord: action.dChord },
        ...state.slice(action.id + 1)
      ];
    case 'CHANGE_DIATONIC_KEY':
      return [
        ...state.slice(0, action.id),
        { ...state[action.id], key: action.key },
        ...state.slice(action.id + 1)
      ];
    case 'REMOVE_PANEL':
      return [
        ...state.slice(0, action.id),
        ...state.slice(action.id + 1).map((i) => Object.assign(i, { id: i.id - 1 }))
      ];
    default:
      return state;
  }
};

const getTailIndex = (panels) => (panels.length !== 0 ? panels.slice(-1)[0].id : -1);

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
