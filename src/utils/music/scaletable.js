/* eslint-disable prettier/prettier */
import { FretboardPanelTypes, getNotesNumKeyChordScale, getBinArrayKeyChordScale } from './fretboard';
import { NOTESLENGTH, NOTENAME } from './notes';

export const scaletableTypes = FretboardPanelTypes;

const labels = [{
  '0': 'Root',
  '1': '',
  '2': 'sus2',
  '3': 'm3',
  '4': 'M3',
  '5': 'sus4',
  '6': 'dim\n(♭5)',
  '7': '5',
  '8': 'aug\n(#5)',
  '9': '6',
  '10': '7',
  '11': 'M7',
  base: true,
  label: true
},
{
  '0': '',
  '1': '♭9',
  '2': '9',
  '3': '#9',
  '4': '',
  '5': '11',
  '6': '#11',
  '7': '',
  '8': '♭13',
  '9': '13',
  '10': '',
  '11': '',
  tension: true,
  label: true
}];

function makeOctaveData(key, arr, isSharp) {

}

const tmp = {
  '0': '_',
  '1': ' ',
  '2': ' ',
  '3': ' ',
  '4': ' ',
  '5': ' ',
  '6': ' ',
  '7': ' ',
  '8': ' ',
  '9': ' ',
  '10': ' ',
  '11': ' ',
  note: true
};

export function maketableData(key, chord, scale, type, isSharp) {
  const numarray = getNotesNumKeyChordScale(type, key, chord, scale)
  const baesbinarray = getBinArrayKeyChordScale(type, 0, chord, scale) // for labels array
  const cell1 = {}
  const cell2 = {}
  Object.assign(cell1, tmp)
  Object.assign(cell2, tmp)
  cell1.base = true
  cell2.tension = true
  baesbinarray.slice(0, NOTESLENGTH).forEach((x, i) => (x === 1 ? cell1[i] = NOTENAME(numarray.shift(), isSharp) : null));
  baesbinarray.slice(NOTESLENGTH).forEach((x, i) => (x === 1 ? cell2[i] = NOTENAME(numarray.shift(), isSharp) : null));

  return labels.concat(cell1).concat(cell2);
}
