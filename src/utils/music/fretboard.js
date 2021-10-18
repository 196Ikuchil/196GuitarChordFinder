import { Fretboard } from '@moonwave99/fretboard.js';
import { NOTENAME } from './notes';

// first pos in 6th string
// 6th:8 5th:3 ..2th:1, 1th:8
const degreeDotData = [8, 1, 5, 10, 3, 8];

function makeDotArray(string, fret, note) {
  return { string, fret, note };
}

const LEN = 12;
// export const NOTESLENGTH = 12  :degree
export function GetDegreeDotData(degree, fretlimit = 14, isSharp = false) {
  let res = degreeDotData.map((x) => (x + degree) % LEN);
  const note = NOTENAME(degree, isSharp);
  res = res.map((x, i) => makeDotArray(i + 1, x, note));
  const octave = res
    .filter((x) => x.fret <= fretlimit - LEN)
    .map((x) => makeDotArray(x.string, x.fret + LEN, x.note));
  return res.concat(octave);
}
