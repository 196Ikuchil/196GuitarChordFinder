/* eslint-disable prettier/prettier */
// material
import { Card, CardHeader, Box, Grid } from '@material-ui/core';
import { alpha, styled } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { GetDiatonicChordNames } from '../../../utils/music';

// ----------------------------------------------------------------------

const StyledTable = styled(Table)({
  table: {
    minWidth: 200,
  },
  'tableLayout': 'fixed'
});

const StyledTableCell = styled(TableCell)(({ theme, role }) => {

  const roleCellColor = (role, attr,theme) => {
    switch (role) {
      case 'tonic':
        return theme.palette.primary[attr];
      case 'dominant':
        return theme.palette.error[attr];
      case 'subdominant':
        return theme.palette.success[attr];
      default:
        return theme.palette.allwhite[attr];
    }
  };

  return {
    lineHeight: '0.5em',
    fontSize: '100%',
    minWidth: '100',
    padding: '0',
    overflow: 'hidden',
    borderRadius: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    width: theme.spacing(8),
    height: theme.spacing(8),
    backgroundImage: `linear-gradient(135deg, ${alpha(roleCellColor(role, 'main',theme), 0.3)} 0%, ${alpha(
      roleCellColor(role, 'main',theme),
      0.6
    )} 100%)`
  }
});


function rolePair(chord, role) {
  return { chord, role };
}
// TODO: use redux stored value
const isminor = 0;
const chordnames = GetDiatonicChordNames(0, 0);

// isminor =0 major , >=0 minor
export default function DiatonicPanel() {
  function reordering() {
    // like [4,1,5,2,6,3,7]
    if (isminor === 0) {
      // major
      return [
        [
          rolePair(chordnames[3], 'subdominant'),
          rolePair(chordnames[0], 'tonic'),
          rolePair(chordnames[4], 'dominant')
        ],
        [
          rolePair(chordnames[1], 'subdominant'),
          rolePair(chordnames[5], 'tonic'),
          rolePair(chordnames[2], 'tonic')
        ],
        [
          rolePair('', ''),
          rolePair(chordnames[6], 'dominant'),
          rolePair('', '')
        ]
      ];
    }
    // others = minor
    return [
      [
        rolePair(chordnames[5], 'subdominantm'),
        rolePair(chordnames[2], 'tonicm'),
        rolePair(chordnames[6], 'dominantm')
      ],
      [
        rolePair(chordnames[3], 'subdominantm'),
        rolePair(chordnames[0], 'tonicm'),
        rolePair(chordnames[4], 'dominantm')
      ],
      [
        rolePair('', ''),
        rolePair(chordnames[1], 'subdominantm'),
        rolePair('', '')
      ]
    ];
  }

  return (
    <Card>
      <CardHeader title="Diatonic Table" />
      <Grid container>
        <Grid xs={12} sm={8} md={8} >
          <Box sx={{ p: 3, pb: 1 }}>
            <TableContainer component={Paper}>
              <StyledTable aria-label="diatonic table">
                <TableBody>
                  {reordering().map((row, i) => (
                    <TableRow key={row[1].chord + i}>
                      {row.map((c, j) => (
                        <StyledTableCell key={c.chord + j} align="center" role={ c.role } sx={{transform: 'scale(0.9)', margin:'0'}}>
                          <div>{c.chord}</div>
                        </StyledTableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </StyledTable>
            </TableContainer>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box>test</Box>
            </Grid>
            <Grid item xs={12}>
              <Box>test</Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
