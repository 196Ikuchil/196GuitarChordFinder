// material
import { Card, CardHeader, Box } from '@material-ui/core';

import { styled } from '@material-ui/core/styles';
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
    minWidth: 200
  }
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.common.white
}));

function createData(left, center, right) {
  return { left, center, right };
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
        createData(chordnames[3], chordnames[0], chordnames[4]),
        createData(chordnames[1], chordnames[5], chordnames[2]),
        createData('', chordnames[6], '')
      ];
    }
    // others = minor
    return [
      createData(chordnames[5], chordnames[2], chordnames[6]),
      createData(chordnames[3], chordnames[0], chordnames[4]),
      createData('', chordnames[1], '')
    ];
  }

  return (
    <Card>
      <CardHeader title="Diatonic Table" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <TableContainer component={Paper}>
          <StyledTable aria-label="diatonic table">
            <TableBody>
              {reordering().map((row, i) => (
                <TableRow key={row.center + i}>
                  <StyledTableCell align="center">{row.left}</StyledTableCell>
                  <StyledTableCell align="center">{row.center}</StyledTableCell>
                  <StyledTableCell align="center">{row.right}</StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </StyledTable>
        </TableContainer>
      </Box>
    </Card>
  );
}
