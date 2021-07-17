export const NOTESLENGTH = 12;
export const NOTENAME = (number, sharp = false) => {
  number %= NOTESLENGTH;
  switch (number) {
    case 0:
      return 'C';
    case 1:
      return sharp ? 'C#' : 'D♭';
    case 2:
      return 'D';
    case 3:
      return sharp ? 'D#' : 'E♭';
    case 4:
      return 'E';
    case 5:
      return 'F';
    case 6:
      return sharp ? 'F#' : 'G♭';
    case 7:
      return 'G';
    case 8:
      return sharp ? 'G#' : 'A♭';
    case 9:
      return 'A';
    case 10:
      return sharp ? 'A#' : 'B♭';
    case 11:
      return 'B';
    default:
      console.log(`${number}error`);
      return 'err';
  }
};

// ex [["C", M7],["D","m7"]...]
const Diatonic7thMajor = [
  [0, 2],
  [2, 4],
  [4, 4],
  [5, 2],
  [7, 3],
  [9, 4],
  [11, 7]
];

// [['c','m7]..]
const Diatonic7thNaturalMinor = [
  [0, 4],
  [2, 7],
  [3, 2],
  [5, 4],
  [7, 4],
  [8, 2],
  [10, 3]
];

const Diatonic7thHarmonicMinor = [
  [0, 8], // mM7
  [2, 7], // m7-5
  [3, 10], // augM7
  [5, 4], // m7
  [7, 3], // 7
  [8, 2], // M7
  [11, 13] // dim7
];

const Diatonic7thMelodicMinor = [
  [0, 8], // mM7
  [2, 4], // m7
  [3, 10], // augM7
  [5, 3], // 7
  [7, 3], // 7
  [9, 7], // m7-5
  [11, 7] // m7-5
];

export const DIATONICS = {
  major: 0,
  minor: 1,
  harmonic: 2,
  melodic: 3
};

export function GetDiatonicName(num) {
  switch (num) {
    case DIATONICS.major:
      return 'major';
    case DIATONICS.minor:
      return 'minor';
    case DIATONICS.harmonic:
      return 'harmonic_m';
    case DIATONICS.melodic:
      return 'melodic_m';
    default:
      return 'error';
  }
}

export function GetDiatonicNotes(num, key) {
  let d;
  switch (num) {
    case DIATONICS.major:
      d = Diatonic7thMajor;
      break;
    case DIATONICS.minor:
      d = Diatonic7thNaturalMinor;
      break;
    case DIATONICS.harmonic:
      d = Diatonic7thHarmonicMinor;
      break;
    case DIATONICS.melodic:
      d = Diatonic7thMelodicMinor;
      break;
    default:
      d = [];
  }
  return d.map((x) => [(x[0] + key) % NOTESLENGTH, x[1]]);
}
