/* eslint-disable no-extra-boolean-cast */
/* eslint-disable dot-notation */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useFretboard } from './react-fretboard';
import {
  GetToneDotData,
  DEFAULT_OPTIONS,
  DEFAULT_TUNING,
  DEFAULT_FRET_LIMIT,
  GetNoteText
} from '../../utils/music/fretboard';

export function Fretboard({ props }) {
  const options = props.options ?? DEFAULT_OPTIONS;
  const tuning = props.tuning ?? DEFAULT_TUNING;
  const figureRef = useRef(null);
  const fretboard = useFretboard(figureRef, tuning, options);

  useEffect(() => {
    fretboard
      .setDots(
        converToDotsData(props.texttype, props.degreeNums, DEFAULT_FRET_LIMIT, props.isSharp)
      )
      .render();
    fretboard.style({
      // this gives us just the root notes
      filter: ({ note }) =>
        note ===
        GetNoteText(props.degreeNums[0], props.degreeNums[0], props.isSharp, props.texttype), // top is root degree
      // texttypes the note name
      // text: ({ note }) => 'aa',
      // sets the value of the fill attribute
      fill: 'yellow'
    });
  }, [fretboard, props]);

  return <figure ref={figureRef} />;
}

// c:0, c#:1....
function converToDotsData(texttype, degreeNums, fretlimit, isSharp) {
  return degreeNums.flatMap((degreeNum) =>
    GetToneDotData(texttype, degreeNums[0], degreeNum, fretlimit, isSharp)
  );
}

Fretboard.propTypes = {
  props: PropTypes.shape({
    options: PropTypes.object,
    tuning: PropTypes.array,
    degreeNums: PropTypes.arrayOf(PropTypes.number),
    texttype: PropTypes.number.isRequired,
    isSharp: PropTypes.bool.isRequired
  }).isRequired
};
