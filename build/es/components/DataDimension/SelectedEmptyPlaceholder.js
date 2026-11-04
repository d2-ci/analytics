import _JSXStyle from "styled-jsx/style";
import i18n from '@dhis2/d2-i18n';
import React from 'react';
import styles from './styles/EmptyPlaceholder.style.js';
export const SelectedEmptyPlaceholder = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
  className: `jsx-${styles.__hash}` + " " + "empty-list"
}, i18n.t('No items selected')), /*#__PURE__*/React.createElement(_JSXStyle, {
  id: styles.__hash
}, styles));