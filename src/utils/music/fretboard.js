import { Fretboard } from '@moonwave99/fretboard.js';
import { NOTENAME, DEGREENAME, NOTESLENGTH } from './notes';

export const FretboardPanelTypes = {
  chord: 0,
  scale: 1
};
export const getNextFretboardPanelType = (type) =>
  (type + 1) % Object.keys(FretboardPanelTypes).length;

export const FretboardTextTypes = {
  tone: 0,
  degree: 1
};
export const getNextFretboardTextType = (type) =>
  (type + 1) % Object.keys(FretboardTextTypes).length;

// first pos in 6th string
// 6th:8 5th:3 ..2th:1, 1th:8
const degreeDotData = [8, 1, 5, 10, 3, 8];

export const DEFAULT_FRET_LIMIT = 14;
export const DEFAULT_OPTIONS = {
  dotText: ({ note }) => note,
  fretCount: DEFAULT_FRET_LIMIT,
  dotSize: 27,
  dotTextSize: 15,
  root: 'C'
};

export const DEFAULT_TUNING = ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'];

function makeDotArray(string, fret, note) {
  return { string, fret, note };
}

export function GetToneName(degree, isSharp) {
  return NOTENAME(degree, isSharp);
}

// return degree from root
export function GetDegreeNameFromRoot(root, target) {
  return DEGREENAME[target - root];
}

const LEN = 12;
// export const NOTESLENGTH = 12  :degree
// return makeDotArrays
export function GetToneDotData(texttype, root, degree, fretlimit = 14, isSharp = false) {
  let res = degreeDotData.map((x) => (x + (degree % NOTESLENGTH)) % LEN);
  const note = GetNoteText(root, degree, isSharp, texttype);
  res = res.map((x, i) => makeDotArray(i + 1, x, note));
  const octave = res
    .filter((x) => x.fret <= fretlimit - LEN)
    .map((x) => makeDotArray(x.string, x.fret + LEN, x.note));
  return res.concat(octave);
}

// switch fretboard text
export function GetNoteText(root, degree, isSharp, texttype) {
  switch (texttype) {
    case FretboardTextTypes.tone:
      return GetToneName(degree, isSharp);
    case FretboardTextTypes.degree:
      return GetDegreeNameFromRoot(root, degree);
    default:
      return GetToneName(degree, isSharp);
  }
}
