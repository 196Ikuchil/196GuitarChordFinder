import { connect } from 'react-redux';
import { Grid, Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { FretBoardBox } from '../../music/fretboard';
import { mapStateToProps as getIsSharp } from '../../../modules/Sharp';
import { mapDispatchToProps } from '../../../modules/fretboard';
import {
  GetChordNotes,
  GetScaleNotes,
  FretboardPanelTypes,
  getNotesNumKeyChordScale
} from '../../../utils/music';
import { FretboardPanelSelector } from '../diatonic/FretboardPanelSelector';

const GridStyle = styled(Grid)(({ theme }) => ({
  minWidth: theme.fretboardminwidth.diatonic
}));

function FretBoardPanel({
  fboard,
  index,
  changeFretboard,
  changeFretboardPanelType,
  changeFretboardTextType,
  isSharp
}) {
  return (
    <div className="fretboard">
      <Grid style={{ overflowX: 'scroll' }}>
        <GridStyle container>
          <Grid item xs={12}>
            <FretboardPanelSelector
              panel={fboard}
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
                degreeNums={getNotesNumKeyChordScale(
                  fboard.fretboardPanelType,
                  fboard.key,
                  fboard.chord,
                  fboard.scale
                )}
                isSharp={isSharp}
                texttype={fboard.texttype}
              />
            </Box>
          </Grid>
        </GridStyle>
      </Grid>
    </div>
  );
}

FretBoardPanel.propTypes = {
  fboard: PropTypes.shape({
    fretboardPanelType: PropTypes.number.isRequired,
    key: PropTypes.number.isRequired,
    chord: PropTypes.number.isRequired,
    scale: PropTypes.string.isRequired,
    texttype: PropTypes.number.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,
  changeFretboard: PropTypes.func.isRequired,
  changeFretboardPanelType: PropTypes.func.isRequired,
  changeFretboardTextType: PropTypes.func.isRequired,
  isSharp: PropTypes.bool
};

export default connect(getIsSharp, mapDispatchToProps)(FretBoardPanel);
