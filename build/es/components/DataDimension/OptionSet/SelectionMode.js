import _JSXStyle from "styled-jsx/style";
import i18n from '@dhis2/d2-i18n';
import PropTypes from 'prop-types';
import React from 'react';
import { SelectionAutomaticIcon } from '../../../assets/SelectionAutomaticIcon.js';
import { SelectionManualIcon } from '../../../assets/SelectionManualIcon.js';
import { RadioCard } from '../../RadioCard.js';
import styles from './styles/OptionSetModal.style.js';
export const SELECTION_MODE_AUTOMATIC = 'automatic';
export const SELECTION_MODE_MANUAL = 'manual';
export const SelectionMode = _ref => {
  let {
    selectionMode,
    setSelectionMode
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "group"
  }, /*#__PURE__*/React.createElement("p", {
    className: `jsx-${styles.__hash}` + " " + "group-header"
  }, i18n.t('Selection mode')), /*#__PURE__*/React.createElement(RadioCard, {
    id: SELECTION_MODE_AUTOMATIC,
    name: "selection",
    checked: selectionMode === SELECTION_MODE_AUTOMATIC,
    onChange: () => setSelectionMode(SELECTION_MODE_AUTOMATIC),
    icon: /*#__PURE__*/React.createElement(SelectionAutomaticIcon, null),
    title: i18n.t('Automatically include all options'),
    subtitle: i18n.t('Select all options. New options added in the future are included.')
  }), /*#__PURE__*/React.createElement(RadioCard, {
    id: SELECTION_MODE_MANUAL,
    name: "selection",
    checked: selectionMode === SELECTION_MODE_MANUAL,
    onChange: () => setSelectionMode(SELECTION_MODE_MANUAL),
    icon: /*#__PURE__*/React.createElement(SelectionManualIcon, null),
    title: i18n.t('Manually choose some options...'),
    subtitle: i18n.t('Only chosen options will be included.')
  })), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
SelectionMode.propTypes = {
  selectionMode: PropTypes.string,
  setSelectionMode: PropTypes.func
};