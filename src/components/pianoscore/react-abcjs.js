/* eslint-disable react/sort-comp */
/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import abcjsObj from 'abcjs';

// eslint-disable-next-line prettier/prettier
const ScoreNotes = ['C', '_D', 'D', '_E', 'E', 'F', '_G', 'G', '_A', 'A', '_B', 'B',
  // eslint-disable-next-line prettier/prettier
                    'c', '_d', 'd', '_e', 'e', 'f', '_g', 'g', '_a', 'a', '_b', 'b'];

// ex,) return "CEG'C"
export function getScoreNotes(notes) {
  console.log(notes);
  return notes
    .map((n, i) => {
      if (n === 1) {
        console.log("'".repeat(n / ScoreNotes.length));
        return "'".repeat(i / ScoreNotes.length) + ScoreNotes[i % ScoreNotes.length];
      }
      return '';
    })
    .join('');
}

class Abcjs extends PureComponent {
  uniqueNumber = Date.now() + Math.random();

  renderAbcNotation(abcNotation, parserParams, engraverParams, renderParams) {
    const res = abcjsObj.renderAbc(
      `abcjs-result-${this.uniqueNumber}`,
      abcNotation,
      parserParams,
      engraverParams,
      renderParams
    );
  }

  componentDidMount() {
    const { abcNotation, parserParams, engraverParams, renderParams } = this.props;
    this.renderAbcNotation(abcNotation, parserParams, engraverParams, renderParams);
  }

  componentDidUpdate() {
    const { abcNotation, parserParams, engraverParams, renderParams } = this.props;
    this.renderAbcNotation(abcNotation, parserParams, engraverParams, renderParams);
  }

  render() {
    return (
      <div style={{ width: '100%' }}>
        <div id={`abcjs-result-${this.uniqueNumber}`} style={{ width: '100%' }} />
      </div>
    );
  }
}

Abcjs.propTypes = {
  abcNotation: PropTypes.string,
  parserParams: PropTypes.object,
  engraverParams: PropTypes.object,
  renderParams: PropTypes.object
};

Abcjs.defaultProps = {
  abcNotation: '',
  parserParams: {},
  engraverParams: { responsive: 'resize' },
  renderParams: { viewportHorizontal: true }
};

export default Abcjs;
