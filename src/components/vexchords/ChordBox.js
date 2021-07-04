import { Chord } from './react-vexchords';

export default function ChordBox() {
  const C = {
    chord: [
      [2, 1, '1'],
      [3, 2, '2'],
      [5, 3, '3'],
      [6, 'x']
    ]
  };

  const Fm = {
    // array of [string, fret, label (optional)]
    chord: [
      [4, 3, '4'],
      [5, 3, '3'],
      [1, 1, '']
      // [4, 3, "4"],
      // [5, 3, "3"]
    ],

    // optional: position marker
    // position: 5, // start render at fret 5

    // optional: barres for barre chords
    barres: [{ fromString: 6, toString: 1, fret: 1 }]

    // optional: tuning keys
    // tuning: ["E", "A", "D", "G", "B", "E"]
  };

  const Gm = {
    ...Fm,
    // optional: position marker
    position: 3, // start render at fret 3

    // optional: barres for barre chords
    barres: [{ fromString: 6, toString: 1, fret: 1 }]

    // optional: tuning keys
    // tuning: ["E", "A", "D", "G", "B", "E"]
  };

  return (
    <div className="App">
      <Chord {...C} />
    </div>
  );
}
