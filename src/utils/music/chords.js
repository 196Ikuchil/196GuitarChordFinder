// const M = [0, 4, 7];
// const m = [0, 3, 7];
// const M7 = [0, 4, 7, 11];
// const _7 = [0, 4, 7, 10];
// const m7 = [0, 3, 7, 10];
// const b5 = [0, 4, 6];
// const mb5 = [0, 3, 6, 10];

const baseMajor = [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const baseMinor = [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function M7() {
  const b = baseMajor;
  b[11] = 1;
  return b;
}

function _7() {
  const b = baseMajor;
  b[10] = 1;
  return b;
}

function m7() {
  const b = baseMinor;
  b[10] = 1;
  return b;
}

// ex b5(baseMajor)->C(♭5), b5(m7())->Cm7(♭5)
function b5(base) {
  base[7] = 0;
  base[6] = 1;
  return base;
}

export const CHORDNAME = ['', 'm', 'M7', '7', 'm7', '(♭5)', 'm(♭5)', 'm7(♭5)'];

export const CHORDNOTES = (number) => {
  switch (number) {
    case 0:
      return baseMajor;
    case 1:
      return baseMinor;
    case 2:
      return M7;
    case 3:
      return _7;
    case 4:
      return m7;
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
