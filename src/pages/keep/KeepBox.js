import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, Card } from '@material-ui/core';
import { GetChordNotes } from '../../utils/music';
import { GuitarChordBox } from '../../components/music/guitarchord';
import { PianoScoreBox } from '../../components/music/pianoscore';
import { PianoKeyboardBox } from '../../components/music/pianokeyboard';
import { GuitarChordPanels } from '../../components/_dashboard/chordsearch';
import { mapStateToProps, mapDispatchToProps } from '../../modules/keep';

function KeepBox({ isSharp, keeps, keepchordpickup, removeChordKeep, changeKeepPickupChord }) {
  return (
    <Grid container spacing={0.5}>
      <Grid item xs={12}>
        <Card>
          <Grid container>
            <Grid item xs={6} sm={6}>
              <GuitarChordBox
                panel={{
                  key: keepchordpickup.pickupkey,
                  chord: keepchordpickup.pickupchord,
                  chordNum: keepchordpickup.pickupchordNum
                }}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <PianoScoreBox
                panel={{
                  key: keepchordpickup.pickupkey,
                  chord: keepchordpickup.pickupchord
                }}
                isSharp={isSharp}
              />
            </Grid>
            <Grid item xs={12} sx={{ pb: 3 }}>
              <Grid container>
                <Grid item xs={1} sm={3} />
                <Grid item xs={12} sm={6}>
                  <PianoKeyboardBox
                    notes={GetChordNotes(keepchordpickup.pickupkey, keepchordpickup.pickupchord)}
                  />
                </Grid>
                <Grid item xs={1} sm={3} />
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      {/* searched items */}
      <Grid item xs={12}>
        {/* <GuitarChordPanels
          info={{ key: searchInfo.key, chord: searchInfo.chord }}
          changePickupChord={changePickupChord}
        /> */}
      </Grid>
    </Grid>
  );
}

export default connect(
  (state) => ({ isSharp: state.isSharp.isSharp, keepchordpickup: state.keepchordpickup }),
  mapDispatchToProps
)(KeepBox);
