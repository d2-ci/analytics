import _JSXStyle from "styled-jsx/style";
import PropTypes from 'prop-types';
import React from 'react';
import i18n from '../../../../locales/index.js';
import styles from './styles/OptionsSelector.style.js';
export const SourceEmptyPlaceholder = _ref => {
  let {
    loading,
    searchTerm,
    options,
    dataTest
  } = _ref;
  return !loading && !options.length && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    "data-test": dataTest,
    className: `jsx-${styles.__hash}` + " " + "empty-list"
  }, searchTerm ? i18n.t('No options found for "{{- searchTerm}}"', {
    searchTerm
  }) : i18n.t('No options found')), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
SourceEmptyPlaceholder.propTypes = {
  dataTest: PropTypes.string,
  loading: PropTypes.bool,
  options: PropTypes.array,
  searchTerm: PropTypes.string
};