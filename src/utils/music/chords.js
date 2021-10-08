/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
// const M = [0, 4, 7];
// const m = [0, 3, 7];
// const M7 = [0, 4, 7, 11];
// const _7 = [0, 4, 7, 10];
// const m7 = [0, 3, 7, 10];
// const b5 = [0, 4, 6];
// const mb5 = [0, 3, 6, 10];
import * as chordsData from './ChordData';

function chordInfo(chordname, chordnotes, gchords) {
  return { chordname, chordnotes, gchords };
}

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

function b9(base) {
  return base.map((x, i) => ( i === 13 ? 1 : x))
}

function _9(base) {
  return base.map((x, i) => ( i === 14 ? 1 : x))
}

function s9(base) {
  return base.map((x, i) => ( i === 15 ? 1 : x))
}

function _11(base) {
  return base.map((x, i) => ( i === 17 ? 1 : x))
}

function s11(base) {
  return base.map((x, i) => ( i === 18 ? 1 : x))
}

function b13(base) {
  return base.map((x, i) => ( i === 20 ? 1 : x))
}

function _13(base) {
  return base.map((x, i) => ( i === 21 ? 1 : x))
}

function sus4(base) {
  return base.map((x, i) => {
    if ( i === 3 || i === 4)
      return 0;
    if ( i === 5)
      return 1;
    return x;
  })
}

const CHORDS = [
  chordInfo('M',baseMajor, chordsData.gM),
  chordInfo('m', baseMinor, chordsData.gm),
  chordInfo('M7',M7(baseMajor), chordsData.gM7),
  chordInfo('7', _7(baseMajor), chordsData.g7), // 7
  chordInfo('m7', _7(baseMinor), chordsData.gm7), // m7
  chordInfo('(-5)', b5(baseMajor), chordsData.gb5), // (-5)
  chordInfo('m(-5)',b5(baseMinor), chordsData.gmb5), // m(-5)
  chordInfo('m7(-5)',b5(_7(baseMinor)), chordsData.gm7b5), // mM7(-5)
  chordInfo('mM7', M7(baseMinor), chordsData.gmM7),// mM7
  chordInfo('aug', aug(), chordsData.gaug),
  chordInfo('augM7', M7(aug()), chordsData.gaugM7), // augM7
  chordInfo('aug7', _7(aug()), chordsData.gaug7), // aug7
  chordInfo('dim', baseDim, chordsData.gdim),
  chordInfo('dim7', d7(baseDim), chordsData.gdim7), // dim7
  chordInfo('6', _6(baseMajor), chordsData.g6), // 6
  chordInfo('m6', _6(baseMinor), chordsData.gm6), // m6
  chordInfo('M7(9)',_9(M7(baseMajor)), chordsData.gM79), // M7 9
  chordInfo('6(9)', _9(_6(baseMajor)), chordsData.g69), // 69
  chordInfo('m69',_9(_6(baseMinor)), chordsData.gm69), // m69
  chordInfo('7♭9',b9(_7(baseMajor)), chordsData.g7b9), // 7b9
  chordInfo('7(9)',_9(_7(baseMajor)), chordsData.g79), // 79
  chordInfo('7#9',s9(_7(baseMajor)), chordsData.g7s9), // 7#9
  chordInfo('7#11',s11(_7(baseMajor)), chordsData.g7s11), // 7#11
  chordInfo('7♭13', b13(_7(baseMajor)), chordsData.g7b13), // 7b13
  chordInfo('7 13', _13(_7(baseMajor)), chordsData.g713), // 7 13
  chordInfo('7 ♭9 13', _13(b9(_7(baseMajor))), chordsData.g7b913), // 7 b9 13
  chordInfo('7 9 13', _13(_9(_7(baseMajor))), chordsData.g7913), // 7 9 13
  chordInfo('m7 9', _9(_7(baseMinor)), chordsData.gm79), // m7 9
  chordInfo('m7 9 11', _11(_9(_7(baseMinor))), chordsData.gm7911), // m7 9 11
  chordInfo('sus4',sus4(baseMajor), chordsData.gsus4), // sus4
  chordInfo('7sus4',_7(sus4(baseMajor)), chordsData.g7sus4), // 7sus4
  chordInfo('add9', _9(baseMajor), chordsData.gadd9), // add9
  chordInfo('madd9',_9(baseMinor), chordsData.gmadd9), // madd9
  chordInfo('sus4(9)',_9(sus4(baseMajor)), chordsData.gsus49), // gsus49
  chordInfo('aug(9)',_9(aug(baseMajor)), chordsData.gaug9), // aug(9)
  chordInfo('7sus4(9)',_9(_7(sus4(baseMajor))),chordsData.g7sus49), // 7sus49
  chordInfo('7aug(9)',_9(_7(aug())), chordsData.g7aug9), // 7aug9
  chordInfo('mM79', _9(M7(baseMinor)), chordsData.gmM79),// mM79
  chordInfo('m7 9(-5)', _9(_7(b5(baseMinor))), chordsData.gm79b5), // m79(-5)
  chordInfo('add11', _11(baseMajor), chordsData.gadd11), // add11
  chordInfo('madd11', _11(baseMinor), chordsData.gmadd11), // madd11
  chordInfo('m7(11)',_11(_7(baseMinor)), chordsData.gm711), // m7 11
  chordInfo('m7(-5)11',_11(_7(b5(baseMinor))), chordsData.gm7b511), // m7(-5)11
  chordInfo('add#11', s11(baseMajor), chordsData.gadds11), // adds11
  chordInfo('M7(#11)',s11(M7(baseMajor)), chordsData.gM7s11), // M7 #11
  chordInfo('M7(13)',_13(M7(baseMajor)), chordsData.gM713), // M7 13
];

export const CHORDS_LENGTH = CHORDS.length
export const CHORDNAME = (n) => CHORDS[n].chordname
export const CHORDNOTES = (chord) => CHORDS[chord].chordnotes

export const getChordsData = (key, chord) => CHORDS[chord].gchords[key]
export const getSelectedChordData = (key, chord, num) => CHORDS[chord].gchords[key][num]
