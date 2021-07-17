import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, Card } from '@material-ui/core';
import { ChordPanelSelector } from '../../components/_dashboard/diatonic/ChordPanelSelector';
import { mapDispatchToProps as mapDispatchChordsearch } from '../../modules/chordsearch';
import { GuitarChordBox } from '../../components/music/guitarchord';
import { PianoScoreBox } from '../../components/music/pianoscore';
import { PianoKeyboardBox } from '../../components/music/pianokeyboard';

function ChordSearchBox({ isSharp, searchInfo, changeSearchKey, changeSearchChord }) {
  return (
    <Grid container spacing={0.5}>
      <Grid item xs={12}>
        <Card>
          <Grid container>
            <Grid item xs={12}>
              <ChordPanelSelector
                panel={searchInfo}
                changeKey={(id, key) => changeSearchKey(id, key)}
                changeChord={(id, chord) => changeSearchChord(id, chord)}
                isSharp={isSharp}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <GuitarChordBox
                panel={{ key: searchInfo.pickupkey, chord: searchInfo.pickupchord }}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <PianoScoreBox panel={{ key: searchInfo.pickupkey, chord: searchInfo.pickupchord }} />
            </Grid>
            <Grid item xs={12} sx={{ pb: 3 }}>
              <Grid container>
                <Grid item xs={0} sm={3} />
                <Grid item xs={12} sm={6}>
                  <PianoKeyboardBox />
                </Grid>
                <Grid item xs={0} sm={3} />
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={12}>
        {/* {[0].map()} */}
        chord panels
      </Grid>
    </Grid>
  );
}

ChordSearchBox.propTypes = {
  isSharp: PropTypes.bool.isRequired,
  searchInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    key: PropTypes.number.isRequired,
    chord: PropTypes.number.isRequired,
    pickupkey: PropTypes.number.isRequired,
    pickupchord: PropTypes.number.isRequired,
    pickupchordNum: PropTypes.number.isRequired
  }).isRequired,
  changeSearchKey: PropTypes.func.isRequired,
  changeSearchChord: PropTypes.func.isRequired
};

export default connect(
  (state) => ({ isSharp: state.isSharp.isSharp, searchInfo: state.searchInfo }),
  mapDispatchChordsearch
)(ChordSearchBox);
