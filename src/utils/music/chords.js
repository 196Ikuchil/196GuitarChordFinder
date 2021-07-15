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

function M7() {
  return baseMajor.map((x, i) => (i === 11 ? 1 : x));
}

function _7() {
  return baseMajor.map((x, i) => (i === 10 ? 1 : x));
}

function m7() {
  return baseMinor.map((x, i) => (i === 10 ? 1 : x));
}

// ex b5(baseMajor)->C(♭5), b5(m7())->Cm7(♭5)
// base[7] = 0;
// base[6] = 1;
function b5(base) {
  // eslint-disable-next-line no-nested-ternary
  return base.map((x, i) => (i === 6 ? 1 : i === 7 ? 0 : x));
}

export const CHORDNAME = ['M', 'm', 'M7', '7', 'm7', '(-5)', 'm(-5)', 'm7(-5)'];

export const CHORDNOTES = (chord) => {
  switch (chord) {
    case 0:
      return baseMajor;
    case 1:
      return baseMinor;
    case 2:
      return M7();
    case 3:
      return _7();
    case 4:
      return m7();
    case 5:
      return b5(baseMajor);
    case 6:
      return b5(baseMinor);
    case 7:
      return b5(m7());
    default:
      return -1;
  }
};
