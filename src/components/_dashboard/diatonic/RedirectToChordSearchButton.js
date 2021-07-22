import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../../modules/chordsearch';

function RedirectToChordSearchButton({
  panel,
  changeSearchKey,
  changeSearchChord,
  changePickupChord
}) {
  const { t } = useTranslation();

  function handleClick() {
    changeSearchKey(0, panel.key);
    changeSearchChord(0, panel.chord);
    changePickupChord(panel.key, panel.chord, 0);
    // redirect to chord seach
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={() => handleClick()}>
        {t('scrapbook.button.tochordsearch')}
      </Button>
    </div>
  );
}

RedirectToChordSearchButton.propTypes = {
  panel: PropTypes.shape({
    key: PropTypes.number.isRequired,
    chord: PropTypes.number.isRequired
  }),
  changeSearchKey: PropTypes.func.isRequired,
  changeSearchChord: PropTypes.func.isRequired,
  changePickupChord: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(RedirectToChordSearchButton);
