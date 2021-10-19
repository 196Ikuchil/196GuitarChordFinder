/* eslint-disable no-extra-boolean-cast */
/* eslint-disable dot-notation */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useFretboard } from './react-fretboard';
import { GetDegreeDotData, GetRootNoteName } from '../../utils/music/fretboard';

const DEFAULT_FRET_LIMIT = 14;
const DEFAULT_OPTIONS = { dotText: ({ note }) => note, dotTextSize: 16, root: 'C' };
const DEFAULT_TUNING = ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'];

export function Fretboard({ props }) {
  const options = props.options ?? DEFAULT_OPTIONS;
  const tuning = props.tuning ?? DEFAULT_TUNING;
  const isSharp = props.isSharp ?? false;
  const figureRef = useRef(null);
  const fretboard = useFretboard(figureRef, tuning, options);

  useEffect(() => {
    fretboard
      .setDots(converToDotsData(props.degreeNums, DEFAULT_FRET_LIMIT, props.isSharp))
      .render();
    fretboard.style({
      // this gives us just the root notes
      filter: ({ note }) => note === GetRootNoteName(props.degreeNums[0], props.isSharp), // top is root degree
      // displays the note name
      // text: ({ note }) => 'aa',
      // sets the value of the fill attribute
      fill: 'yellow'
    });
  }, [fretboard, props]);

  return <figure ref={figureRef} />;
}

// c:0, c#:1....
function converToDotsData(degreeNums, fretlimit, isSharp) {
  return degreeNums.flatMap((degreeNum) => GetDegreeDotData(degreeNum, fretlimit, isSharp));
}

Fretboard.propTypes = {
  props: PropTypes.shape({
    options: PropTypes.object,
    tuning: PropTypes.array,
    degreeNums: PropTypes.arrayOf(PropTypes.number),
    isSharp: PropTypes.bool.isRequired
  }).isRequired
};
