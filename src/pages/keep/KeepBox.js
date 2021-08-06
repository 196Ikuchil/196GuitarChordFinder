import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, Card } from '@material-ui/core';
import { GetChordNotes } from '../../utils/music';
import { GuitarChordBox } from '../../components/music/guitarchord';
import { PianoScoreBox } from '../../components/music/pianoscore';
import { PianoKeyboardBox } from '../../components/music/pianokeyboard';
import { GuitarChordPanel, EmptyMessagePanel } from '../../components/_dashboard/keep';
import { mapStateToProps, mapDispatchToProps } from '../../modules/keep';
import { ChordLabel } from '../../components/ChordLabel';

function KeepBox({ isSharp, chordkeeps, keepchordpickup, removeChordKeep, changeKeepPickupChord }) {
  return (
    <Grid container spacing={0.5}>
      <Grid item xs={12}>
        <Card>
          <Grid container>
            <Grid item xs={12} sm={3} display="block">
              <Grid display={{ marginTop: 40 }}>
                <ChordLabel
                  k={keepchordpickup.pickupkey}
                  chord={keepchordpickup.pickupchord}
                  isSharp={isSharp}
                  variant="h3"
                />
              </Grid>
            </Grid>
            <Grid item xs={6} sm={4}>
              <GuitarChordBox
                panel={{
                  key: keepchordpickup.pickupkey,
                  chord: keepchordpickup.pickupchord,
                  chordNum: keepchordpickup.pickupchordNum
                }}
              />
            </Grid>
            <Grid item xs={6} sm={5}>
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
      {!chordkeeps.length ? (
        <>
          <Grid item xs={1} sm={2} />
          <Grid item xs={12} sm={8}>
            <EmptyMessagePanel />
          </Grid>
          <Grid item xs={1} sm={2} />
        </>
      ) : (
        <Grid item xs={12}>
          <Grid container>
            {chordkeeps.map((chord, i) => (
              <Grid item key={i} xs={6} sm={3} md={2}>
                <GuitarChordPanel
                  info={chord}
                  changePickupChord={(k, c, n) => changeKeepPickupChord(k, c, n)}
                  removeChordKeep={() => removeChordKeep(i)}
                  isSharp={isSharp}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

KeepBox.propTypes = {
  isSharp: PropTypes.bool.isRequired,
  chordkeeps: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      chord: PropTypes.number.isRequired,
      chordNum: PropTypes.number.isRequired
    })
  ),
  keepchordpickup: PropTypes.shape({
    pickupkey: PropTypes.number.isRequired,
    pickupchord: PropTypes.number.isRequired,
    pickupchordNum: PropTypes.number.isRequired
  }).isRequired,
  removeChordKeep: PropTypes.func.isRequired,
  changeKeepPickupChord: PropTypes.func.isRequired
};

export default connect(
  (state) => ({
    isSharp: state.isSharp.isSharp,
    chordkeeps: state.chordkeeps,
    keepchordpickup: state.keepchordpickup
  }),
  mapDispatchToProps
)(KeepBox);
