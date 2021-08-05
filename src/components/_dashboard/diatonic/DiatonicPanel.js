/* eslint-disable prettier/prettier */
// material
import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { alpha, styled } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import ToggleButton from '@material-ui/lab/ToggleButton';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import KeySelector from './KeySelector';
import DiatonicPanelTypography from './DiatonicPanelTypography';

import { GetDiatonicChordNames, GetDiatonicNotes, GetDiatonicNumName } from '../../../utils/music';
import { mapStateToProps as getIsSharp } from '../../../modules/Sharp';
import { mapDispatchToProps } from '../../../modules/diatonicPanel';
// eslint-disable-next-line import/named

// ----------------------------------------------------------------------

const StyledTable = styled(Table)({
  table: {
    minWidth: 200,
  },
  'tableLayout': 'fixed'
});

const roleCellColor = (role, attr, theme) => {
  switch (role) {
    case DROLES[0][0]: // tonic
    case DROLES[1][0]: // tonic m
    case DROLES[2][0]: // harmonic
    case DROLES[3][0]: // melo
      return theme.palette.primary[attr];
    case DROLES[0][1]: // dominant
    case DROLES[1][1]: // dominant m
    case DROLES[2][1]: // harmonic
    case DROLES[3][1]: // melo
      return theme.palette.error[attr];
    case DROLES[0][2]: // subdominant
    case DROLES[1][2]: // subdominant m
    case DROLES[2][2]: // harmonic
    case DROLES[3][2]: // melo
      return theme.palette.success[attr];
    default:
      return theme.palette.allwhite[attr];
  }
};

const getRoleColorName = (role) => {
  switch (role) {
    case DROLES[0][0]: // tonic
    case DROLES[1][0]: // tonic m
    case DROLES[2][0]: // harmonic
    case DROLES[3][0]: // melo
      return "primary"
    case DROLES[0][1]: // dominant
    case DROLES[1][1]: // dominant m
    case DROLES[2][1]: // harmonic
    case DROLES[3][1]: // melo
      return "error"
    case DROLES[0][2]: // subdominant
    case DROLES[1][2]: // subdominant m
    case DROLES[2][2]: // harmonic
    case DROLES[3][2]: // melo
      return "success"
    default:
      return "grey"
  }
};

const StyledTableCell = styled(TableCell)(({ theme, role }) => ({
    lineHeight: '0.5em',
    fontSize: '100%',
    minWidth: '100',
    padding: '0',
    overflow: 'hidden',
    borderRadius: '1vh',
    alignItems: 'center',
    justifyContent: 'center',
    width: theme.spacing(8),
    height: theme.spacing(8),
    zIndex: 1,
    backgroundImage: `linear-gradient(135deg, ${alpha(roleCellColor(role, 'main', theme), 0.3)} 0%, ${alpha(
      roleCellColor(role, 'main', theme),
      0.6
    )} 100%)`,
    '&:hover': {
      backgroundImage: `linear-gradient(135deg, ${alpha(roleCellColor(role, 'main', theme), 0.3)} 0%, ${alpha(
        roleCellColor(role, 'main', theme),
        0.8
      )} 100%)`,
      verflow: 'hidden',
      borderRadius: '1vh'
    }
  }));

const RoleDescribeBox = styled(Box)(({theme, role}) => ({
  fontSize: '100%',
  overflow: 'hidden',
  borderRadius: '1vh',
  backgroundImage: `linear-gradient(135deg, ${alpha(roleCellColor(role, 'main', theme), 0.3)} 0%, ${alpha(
    roleCellColor(role, 'main', theme),
    0.6
  )} 100%)`
}));

const BorderBox = styled(Box)(({theme})=>({
  border: `solid 3px ${theme.palette.primary.light}`,
  borderRadius: "10px"
}))

function chordInfo(chord, role, noteNum, chordNum, dNumName) {
  return { chord, role, noteNum, chordNum, dNumName };
}

const DROLES = [
  ['tonic','dominant','subdominant'], // major
  ['tonicm','dominantm','subdominantm'], // minor
  ['tonicm','dominant','subdominantm'], // harm
  ['tonicm','dominant', 'subdominant'] // melo
];

// panel.dChord =0 major , >=0 minor
function DiatonicPanel({ panel, index, onRemoveClick, onChangeDiatonic, onChangeKey, isSharp, addChordPanelById }) {
  const chordnames = GetDiatonicChordNames(panel.dChord, panel.key, isSharp);
  const chordnotes = GetDiatonicNotes(panel.dChord, panel.key)
  const diatonicNumName = GetDiatonicNumName(panel.dChord)
  const { t } = useTranslation();

  const [open, setOpen] = React.useState(false);

  function reordering() {
    // like [4,1,5,2,6,3,7]
    switch (panel.dChord) {
      case 0:
        // major
        return ([
          [
            chordInfo(chordnames[3], DROLES[panel.dChord][2], chordnotes[3][0], chordnotes[3][1], diatonicNumName[3]),
            chordInfo(chordnames[0], DROLES[panel.dChord][0], chordnotes[0][0], chordnotes[0][1], diatonicNumName[0]),
            chordInfo(chordnames[4], DROLES[panel.dChord][1], chordnotes[4][0], chordnotes[4][1], diatonicNumName[4])
          ],
          [
            chordInfo(chordnames[1], DROLES[panel.dChord][2], chordnotes[1][0], chordnotes[1][1], diatonicNumName[1]),
            chordInfo(chordnames[5], DROLES[panel.dChord][0], chordnotes[5][0], chordnotes[5][1], diatonicNumName[5]),
            chordInfo(chordnames[2], DROLES[panel.dChord][0], chordnotes[2][0], chordnotes[2][1], diatonicNumName[2])
          ],
          [
            chordInfo('', '', '', '', ''),
            chordInfo(chordnames[6], DROLES[panel.dChord][1], chordnotes[6][0], chordnotes[6][1], diatonicNumName[6]),
            chordInfo('', '', '', '', '')
          ]
        ]);
      case 1:        // minor
      case 2:        // harm
        return ([
          [
            chordInfo(chordnames[5], DROLES[panel.dChord][2], chordnotes[5][0], chordnotes[5][1], diatonicNumName[5]),
            chordInfo(chordnames[2], DROLES[panel.dChord][0], chordnotes[0][0], chordnotes[0][1], diatonicNumName[2]),
            chordInfo(chordnames[6], DROLES[panel.dChord][1], chordnotes[6][0], chordnotes[6][1], diatonicNumName[6])
          ],
          [
            chordInfo(chordnames[3], DROLES[panel.dChord][2], chordnotes[3][0], chordnotes[3][1], diatonicNumName[3]),
            chordInfo(chordnames[0], DROLES[panel.dChord][0], chordnotes[0][0], chordnotes[0][1], diatonicNumName[0]),
            chordInfo(chordnames[4], DROLES[panel.dChord][1], chordnotes[4][0], chordnotes[4][1], diatonicNumName[4])
          ],
          [
            chordInfo('', '', '', '', ''),
            chordInfo(chordnames[1],  DROLES[panel.dChord][2], chordnotes[1][0], chordnotes[1][1], diatonicNumName[1]),
            chordInfo('', '', '', '', '')
          ]
        ]);
      case 3:        // melo
        return ([
          [
            chordInfo(chordnames[5], DROLES[panel.dChord][2], chordnotes[5][0], chordnotes[5][1], diatonicNumName[5]),
            chordInfo(chordnames[2], DROLES[panel.dChord][0], chordnotes[0][0], chordnotes[0][1], diatonicNumName[2]),
            chordInfo(chordnames[6], DROLES[panel.dChord][1], chordnotes[6][0], chordnotes[6][1], diatonicNumName[6])
          ],
          [
            chordInfo(chordnames[3], DROLES[panel.dChord][1], chordnotes[3][0], chordnotes[3][1], diatonicNumName[3]),
            chordInfo(chordnames[0], DROLES[panel.dChord][0], chordnotes[0][0], chordnotes[0][1], diatonicNumName[0]),
            chordInfo(chordnames[4], DROLES[panel.dChord][1], chordnotes[4][0], chordnotes[4][1], diatonicNumName[4])
          ],
          [
            chordInfo('', '', '', '', ''),
            chordInfo(chordnames[1],  DROLES[panel.dChord][2], chordnotes[1][0], chordnotes[1][1], diatonicNumName[1]),
            chordInfo('', '', '', '', '')
          ]
        ]);
      default:
        return [];
    }
  }

  function addNewChordPanel(key, chord, index, color) {
    if(key !== '') {
      addChordPanelById(key, chord, index, color);
    }
  }

  //  onClick={}
  return (
    <div>
      <KeySelector panel={panel} changeDiatonic={onChangeDiatonic} changeKey={onChangeKey} isSharp={isSharp}/>
      <Grid container>
        <Grid item xs={12} sm={8} md={8} >
          <BorderBox sx={{ pb: 1, m: { xs: 0, sm: "1em 0"} }}>
            <TableContainer component={Paper}>
              <StyledTable aria-label="diatonic table">
                <TableBody>
                  {reordering().map((row, i) => (
                    <TableRow key={row[1].chord + i}>
                      {row.map((c, j) => (
                        // eslint-disable-next-line react/no-this-in-sfc
                        <StyledTableCell key={c.chord + j} align="center" onClick={()=> addNewChordPanel(c.noteNum, c.chordNum, index, getRoleColorName(c.role))} role={ c.role } sx={{transform: 'scale(0.9)', margin:'0'}}>
                          <DiatonicPanelTypography chordname={c.chord} popovername={c.dNumName} isOpen={open}/>
                        </StyledTableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </StyledTable>
            </TableContainer>
          </BorderBox>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid container alignItems="center" justify="center">
            <Grid item xs={8} sm={12}>
              <Box sx={{ p: 1, pt: {xs: 0, sm: "1em"} }}>
                {DROLES[panel.dChord].map((d) => (
                  <Grid item xs={12} key={d}>
                    <RoleDescribeBox align="center" role={d} sx={{margin:"1%"}}>{t(`scrapbook.rolls.${d}`)}</RoleDescribeBox>
                  </Grid>
                ))}
              </Box>
            </Grid>
            <Grid item xs={4} sm={12} align="center" sx={{ p: 1, pt: {xs: 0, sm: "2em"} }}>
              <ToggleButton
                size="large"
                value="check"
                selected={open}
                onChange={() => {
                  setOpen(!open)
                }}
              >
                <MusicNoteIcon />
              </ToggleButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

DiatonicPanel.propTypes = {
  panel: PropTypes.shape({
    dChord: PropTypes.number.isRequired,
    key: PropTypes.number.isRequired,
    sharp: PropTypes.bool
  }).isRequired,
  index: PropTypes.number.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  onChangeDiatonic: PropTypes.func.isRequired,
  onChangeKey: PropTypes.func.isRequired,
  isSharp: PropTypes.bool.isRequired,
  addChordPanelById: PropTypes.func.isRequired
};

export default connect(getIsSharp, mapDispatchToProps)(DiatonicPanel);
