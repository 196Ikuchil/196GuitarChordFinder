const sharp = false;
export const NOTESLENGTH = 12;
export const NOTENAME = (number) => {
  number %= 12;
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
    case DIATONICS.melodic:
    default:
      d = [];
  }
  return d.map((x) => [x[0] + key, x[1]]);
}
