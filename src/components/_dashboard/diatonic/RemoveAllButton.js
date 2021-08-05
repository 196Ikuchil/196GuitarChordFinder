import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../../modules/diatonicPanel';

const RemoveAllButton = ({ removeAllPanel }) => {
  const { t } = useTranslation();

  const handleClick = () => {
    removeAllPanel();
  };

  return (
    <Button size="large" variant="outlined" color="error" onClick={handleClick}>
      {t('scrapbook.remove_all')}
    </Button>
  );
};

RemoveAllButton.propTypes = {
  removeAllPanel: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(RemoveAllButton);
