import { NOTENAME, GetDiatonicNotes, DIATONIC_NUMNAME } from './notes';
import { CHORDNAME, CHORDNOTES } from './chords';

// ex GetChordScale(0,4) => "Cm7"
export function GetChordName(root, chord, sharp) {
  return NOTENAME(root, sharp) + CHORDNAME(chord);
}

// ex ["C", "Dm", "Em" ...]
export function GetDiatonicChordNames(diatonicnum, key, sharp) {
  const d = GetDiatonicNotes(diatonicnum, key);
  return d.map((x) => GetChordName(x[0], x[1], sharp));
}

export function GetDiatonicNumName(diatonicnum) {
  return DIATONIC_NUMNAME[diatonicnum];
}

export { GetChordNotes } from './chords';

export {
  GetDiatonicNotes,
  NOTESLENGTH,
  GetScaleNotes,
  GetScaleKeys,
  GetScaleLabels,
  SCALENOTES_LENGTH
} from './notes';

export {
  GetToneDotData,
  GetToneName,
  GetDegreeNameFromRoot,
  getNextFretboardPanelType,
  getNextFretboardTextType,
  FretboardTextTypes,
  FretboardPanelTypes,
  getNotesNumKeyChordScale,
  getNotesNumfrombinaryArray,
  getBinArrayKeyChordScale
} from './fretboard';

export { scaletableTypes, maketableData } from './scaletable';
