/* eslint-disable no-extra-boolean-cast */
/* eslint-disable dot-notation */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useFretboard } from './react-fretboard';
import { GetDegreeDotData } from '../../utils/music/fretboard';

const DEFAULT_FRET_LIMIT = 14;
const DEFAULT_OPTIONS = { dotText: ({ note }) => note, dotTextSize: 16 };
const DEFAULT_TUNING = ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'];

export function Fretboard({ props }) {
  const options = props.options ?? DEFAULT_OPTIONS;
  const tuning = props.tuning ?? DEFAULT_TUNING;

  const figureRef = useRef(null);
  const fretboard = useFretboard(figureRef, tuning, options);
  useEffect(() => {
    fretboard.setDots(converToDotsData(0, DEFAULT_FRET_LIMIT, false)).style({
      // sets the value of the fill attribute
      fill: 'red'
    });

    fretboard.render();
  }, [fretboard]);

  return <figure ref={figureRef} />;
}

// c:0, c#:1....
function converToDotsData(degreeNum, fretlimit, isSharp) {
  return GetDegreeDotData(degreeNum, fretlimit, isSharp);
}

Fretboard.propTypes = {
  props: PropTypes.shape({
    options: PropTypes.object,
    tuning: PropTypes.array,
    dots: PropTypes.array
  }).isRequired
};
