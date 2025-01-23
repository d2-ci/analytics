import _JSXStyle from "styled-jsx/style";
import React from 'react';
import i18n from '../../../../locales/index.js';
import styles from './styles/OptionsSelector.style.js';
export const EmptySelection = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
  className: `jsx-${styles.__hash}` + " " + "empty-list"
}, i18n.t('No options selected')), /*#__PURE__*/React.createElement(_JSXStyle, {
  id: styles.__hash
}, styles));