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

const roleCellColor = (role, attr, theme) => {
  switch (role) {
    case DROLES[0][0]: // tonic
    case DROLES[1][0]: // tonic m
      return theme.palette.primary[attr];
    case DROLES[0][1]: // dominant
    case DROLES[1][1]: // dominant m
      return theme.palette.error[attr];
    case DROLES[0][2]: // subdominant
    case DROLES[1][2]: // subdominant m
      return theme.palette.success[attr];
    default:
      return theme.palette.allwhite[attr];
  }
};

const StyledTableCell = styled(TableCell)(({ theme, role }) => ({
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
    backgroundImage: `linear-gradient(135deg, ${alpha(roleCellColor(role, 'main', theme), 0.3)} 0%, ${alpha(
      roleCellColor(role, 'main', theme),
      0.6
    )} 100%)`
  }));

const RoleDescribeBox = styled(Box)(({theme, role}) => ({
  fontSize: '100%',
  overflow: 'hidden',
  borderRadius: '10%',
  backgroundImage: `linear-gradient(135deg, ${alpha(roleCellColor(role, 'main', theme), 0.3)} 0%, ${alpha(
    roleCellColor(role, 'main', theme),
    0.6
  )} 100%)`
}));


function rolePair(chord, role) {
  return { chord, role };
}
// TODO: use redux stored value
const isminor = 0;
const diatonicNum = 0;
const chordnames = GetDiatonicChordNames(diatonicNum, 0);


const DROLES = [
  ['tonic','dominant','subdominant'], // major
  ['tonicm','dominantm','subdominantm'], // minor
  ['','',''], // harm
  ['',''] // melo
];

// isminor =0 major , >=0 minor
export default function DiatonicPanel() {
  function reordering() {
    // like [4,1,5,2,6,3,7]
    if (isminor === 0) {
      // major
      return [
        [
          rolePair(chordnames[3], DROLES[isminor][2]),
          rolePair(chordnames[0], DROLES[isminor][0]),
          rolePair(chordnames[4], DROLES[isminor][1])
        ],
        [
          rolePair(chordnames[1], DROLES[isminor][2]),
          rolePair(chordnames[5], DROLES[isminor][0]),
          rolePair(chordnames[2], DROLES[isminor][0])
        ],
        [
          rolePair('', ''),
          rolePair(chordnames[6], DROLES[isminor][1]),
          rolePair('', '')
        ]
      ];
    }
    // others = minor
    return [
      [
        rolePair(chordnames[5], DROLES[isminor][2]),
        rolePair(chordnames[2], DROLES[isminor][0]),
        rolePair(chordnames[6], DROLES[isminor][1])
      ],
      [
        rolePair(chordnames[3], DROLES[isminor][2]),
        rolePair(chordnames[0], DROLES[isminor][0]),
        rolePair(chordnames[4], DROLES[isminor][1])
      ],
      [
        rolePair('', ''),
        rolePair(chordnames[1],  DROLES[isminor][2]),
        rolePair('', '')
      ]
    ];
  }

  function roleDiscriber(){

  }

  return (
    <Card>
      <CardHeader title="Diatonic Table" />
      <Grid container>
        <Grid item xs={12} sm={8} md={8} >
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
        <Grid item xs={12} sm={4}>
          <Grid containe xs={12}r>
            <Box sx={{ p: 3 }}>
              {DROLES[diatonicNum].map((d) => (
                <Grid item xs={12} key={d}>
                  <RoleDescribeBox align="center" role={d} sx={{margin:"1%"}}>{d}</RoleDescribeBox>
                </Grid>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
