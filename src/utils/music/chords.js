/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
// const M = [0, 4, 7];
// const m = [0, 3, 7];
// const M7 = [0, 4, 7, 11];
// const _7 = [0, 4, 7, 10];
// const m7 = [0, 3, 7, 10];
// const b5 = [0, 4, 6];
// const mb5 = [0, 3, 6, 10];

const baseMajor = [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const baseMinor = [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const baseDim = [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function M7(base) {
  return base.map((x, i) => (i === 11 ? 1 : x));
}

function _7(base) {
  return base.map((x, i) => (i === 10 ? 1 : x));
}

// 減7 diminished seventh
function d7(base) {
  return base.map((x, i) => (i === 9 ? 1 : x));
}

// ex b5(baseMajor)->C(♭5), b5(m7())->Cm7(♭5)
// base[7] = 0;
// base[6] = 1;
function b5(base) {
  // eslint-disable-next-line no-nested-ternary
  return base.map((x, i) => (i === 6 ? 1 : i === 7 ? 0 : x));
}

function aug() {
  // eslint-disable-next-line no-nested-ternary
  return baseMajor.map((x, i) => (i === 7 ? 0 : i === 8 ? 1 : x));
}

function _6(base) {
  return base.map((x, i) => (i === 9 ? 1 : x))
}

function _9(base) {
  return base.map((x, i) => ( i === 14 ? 1 : x))
}

const CHORDS = [
  ['M',baseMajor],
  ['m', baseMinor],
  ['M7',M7(baseMajor)],
  ['7', _7(baseMajor)], // 7
  ['m7', _7(baseMinor)], // m7
  ['(-5)', b5(baseMajor)], // (-5)
  ['m(-5)',b5(baseMinor)], // m(-5)
  ['m7(-5)',b5(_7(baseMinor))], // mM7
  ['mM7', M7(baseMinor)],// mM7
  ['aug', aug()],
  ['augM7', M7(aug())], // augM7
  ['aug7', _7(aug())], // aug7
  ['dim', baseDim],
  ['dim7', d7(baseDim)], // dim7
  ['6', _6(baseMajor)], // 6
  ['m6', _6(baseMinor)], // m6
  ['M79',_9(M7(baseMajor))] // M7 9
];

export const CHORDS_LENGTH = CHORDS.length
export const CHORDNAME = (n) => CHORDS[n][0]
export const CHORDNOTES = (chord) => CHORDS[chord][1]
