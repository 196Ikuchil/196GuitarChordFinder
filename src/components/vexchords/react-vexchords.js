import React, { useRef, useEffect } from 'react';
import { ChordBox } from 'vexchords';
import PropTypes from 'prop-types';

// Reference how to write chords: https://jsfiddle.net/leocaseiro/2x805c93/3/

export function Chord({ chordBoxParams, ...props }) {
  const container = useRef(null);

  useEffect(() => {
    const chord = new ChordBox(container.current, chordBoxParams);
    chord.draw(props);
  }, []);

  return <div ref={container} />;
}
