import { NOTENAME, GetDiatonicNotes } from './notes';
import { CHORDNAME, CHORDNOTES } from './chords';

// ex GetChordScale(0,4) => "Cm7"
export function GetChordName(root, chord) {
  return NOTENAME(root) + CHORDNAME[chord];
}

// ex GetChordScale
export function GetChordNotes(root, chord) {
  // push some 0 to heaad(for key change)
  return [...Array(root)].map(() => 0).concat(CHORDNOTES(chord));
}

// ex ["C", "Dm", "Em" ...]
export function GetDiatonicChordNames(diatonicnum, key) {
  const d = GetDiatonicNotes(diatonicnum, key);
  return d.map((x) => GetChordName(x[0], x[1]));
}
