import React, { useRef, useEffect } from 'react';
import { ChordBox, vexchords } from 'vexchords';
import PropTypes from 'prop-types';

// Reference how to write chords: https://jsfiddle.net/leocaseiro/2x805c93/3/

export function Chord({ chordBoxParams, ...props }) {
  const container = useRef(null);

  useEffect(() => {
    container.current.innerHTML = '';
    const chord = new ChordBox(container.current, chordBoxParams);
    chord.draw(props);
  }, [props]);

  return <div ref={container} />;
}
