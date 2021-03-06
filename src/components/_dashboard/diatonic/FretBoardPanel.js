import { connect } from 'react-redux';
import { Grid, Box, CardContent, Card } from '@material-ui/core';
import PropTypes from 'prop-types';
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { FretBoardBox } from '../../music/fretboard';
import { mapStateToProps as getIsSharp } from '../../../modules/Sharp';
import { mapDispatchToProps } from '../../../modules/diatonicPanel';
import {
  GetChordNotes,
  GetScaleNotes,
  NOTESLENGTH,
  FretboardPanelTypes
} from '../../../utils/music';
import { FretboardPanelSelector } from './FretboardPanelSelector';

const GridStyle = styled(Grid)(({ theme }) => ({
  minWidth: theme.fretboardminwidth.diatonic
}));

function FretBoardPanel({
  panel,
  index,
  changeFretboard,
  changeFretboardPanelType,
  changeFretboardTextType,
  isSharp
}) {
  function getDots(fpaneltype, key, chord, scale) {
    if (FretboardPanelTypes.chord === fpaneltype) {
      return GetChordNotes(key, chord)
        .map((x, i) => (x === 1 ? i : null))
        .filter(Number.isFinite); // remove null
    }
    if (FretboardPanelTypes.scale === fpaneltype) {
      return GetScaleNotes(key, scale)
        .map((x, i) => (x === 1 ? i : null))
        .filter(Number.isFinite); // remove null
    }
    return [0];
  }

  return (
    <div className="fretboard">
      <Grid style={{ overflowX: 'scroll' }}>
        <GridStyle container>
          <Grid item xs={12}>
            <FretboardPanelSelector
              panel={panel}
              index={index}
              changeFretboard={changeFretboard}
              changeFretboardPanelType={changeFretboardPanelType}
              changeFretboardTextType={changeFretboardTextType}
              isSharp={isSharp}
            />
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ p: 1, pb: 0, pt: 0 }}>
              <FretBoardBox
                degreeNums={getDots(panel.fretboardPanelType, panel.key, panel.chord, panel.scale)}
                isSharp={isSharp}
                texttype={panel.texttype}
              />
            </Box>
          </Grid>
        </GridStyle>
      </Grid>
    </div>
  );
}

FretBoardPanel.propTypes = {
  panel: PropTypes.shape({
    fretboardPanelType: PropTypes.number.isRequired,
    key: PropTypes.number.isRequired,
    chord: PropTypes.number,
    scale: PropTypes.string,
    texttype: PropTypes.number
  }).isRequired,
  index: PropTypes.number.isRequired,
  changeFretboard: PropTypes.func,
  changeFretboardPanelType: PropTypes.func,
  changeFretboardTextType: PropTypes.func,
  isSharp: PropTypes.bool
};

export default connect(getIsSharp, mapDispatchToProps)(FretBoardPanel);
