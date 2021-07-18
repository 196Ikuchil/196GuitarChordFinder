import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, Card } from '@material-ui/core';
import { ChordPanelSelector } from '../../components/_dashboard/diatonic/ChordPanelSelector';
import { mapDispatchToProps as mapDispatchChordsearch } from '../../modules/chordsearch';
import { GetChordNotes } from '../../utils/music';
import { GuitarChordBox } from '../../components/music/guitarchord';
import { PianoScoreBox } from '../../components/music/pianoscore';
import { PianoKeyboardBox } from '../../components/music/pianokeyboard';
import { GuitarChordPanels } from '../../components/_dashboard/chordsearch';

function ChordSearchBox({
  isSharp,
  searchInfo,
  changeSearchKey,
  changeSearchChord,
  changePickupChord
}) {
  return (
    <Grid container spacing={0.5}>
      <Grid item xs={12}>
        <Card>
          <Grid container>
            <Grid item xs={6} sm={6}>
              <GuitarChordBox
                panel={{
                  key: searchInfo.pickupkey,
                  chord: searchInfo.pickupchord,
                  chordNum: searchInfo.pickupchordNum
                }}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <PianoScoreBox
                panel={{
                  key: searchInfo.pickupkey,
                  chord: searchInfo.pickupchord
                }}
                isSharp={isSharp}
              />
            </Grid>
            <Grid item xs={12} sx={{ pb: 3 }}>
              <Grid container>
                <Grid item xs={1} sm={3} />
                <Grid item xs={12} sm={6}>
                  <PianoKeyboardBox
                    notes={GetChordNotes(searchInfo.pickupkey, searchInfo.pickupchord)}
                  />
                </Grid>
                <Grid item xs={1} sm={3} />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <ChordPanelSelector
                panel={searchInfo}
                changeKey={(id, key) => changeSearchKey(id, key)}
                changeChord={(id, chord) => changeSearchChord(id, chord)}
                isSharp={isSharp}
              />
            </Grid>
          </Grid>
        </Card>
      </Grid>
      {/* searched items */}
      <Grid item xs={12}>
        <GuitarChordPanels
          info={{ key: searchInfo.key, chord: searchInfo.chord }}
          changePickupChord={changePickupChord}
        />
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
  changeSearchChord: PropTypes.func.isRequired,
  changePickupChord: PropTypes.func.isRequired
};

export default connect(
  (state) => ({ isSharp: state.isSharp.isSharp, searchInfo: state.searchInfo }),
  mapDispatchChordsearch
)(ChordSearchBox);
