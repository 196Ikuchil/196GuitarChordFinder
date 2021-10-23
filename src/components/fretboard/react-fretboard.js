// https://github.com/jaredjj3/stringsync/blob/c3ad98ed61fd80161420645c8e7cf0c43b313e96/web/src/components/Fretboard/useFretboard.ts
import { Fretboard } from '@moonwave99/fretboard.js';
import { useEffect, useState } from 'react';

export const useFretboard = (figureRef, turing, opts) => {
  const [fretboard, setFretboard] = useState(() => new Fretboard());

  useEffect(() => {
    const figure = figureRef.current;
    if (!figure) {
      return;
    }
    const fretboard = new Fretboard({
      el: figure,
      ...opts
    });
    setFretboard(fretboard);
    fretboard.render();
    // eslint-disable-next-line consistent-return
    return () => {
      fretboard.removeEventListeners();
      fretboard.clear();
      return figure && Array.from(figure.children).forEach((child) => child.remove());
    };
  }, [figureRef, opts]);

  return fretboard;
};
