import _JSXStyle from "styled-jsx/style";
import i18n from '@dhis2/d2-i18n';
import { Radio } from '@dhis2/ui';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles/OptionSetModal.style.js';
export const OUTPUT_MODE_COMBINED = 'combined';
export const OUTPUT_MODE_INDIVIDUAL = 'individual';
export const OutputMode = _ref => {
  let {
    outputMode,
    setOutputMode
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "group"
  }, /*#__PURE__*/React.createElement("p", {
    className: `jsx-${styles.__hash}` + " " + "group-header"
  }, i18n.t('Output mode')), /*#__PURE__*/React.createElement(Radio, {
    dense: true,
    name: "output",
    value: OUTPUT_MODE_COMBINED,
    checked: outputMode === OUTPUT_MODE_COMBINED,
    onChange: () => setOutputMode(OUTPUT_MODE_COMBINED),
    label: /*#__PURE__*/React.createElement("div", {
      className: `jsx-${styles.__hash}` + " " + (cx('radio-label', {
        checked: outputMode === OUTPUT_MODE_COMBINED
      }) || "")
    }, /*#__PURE__*/React.createElement("span", {
      className: `jsx-${styles.__hash}` + " " + "icon"
    }, /*#__PURE__*/React.createElement("svg", {
      width: "21",
      height: "17",
      viewBox: "0 0 21 17",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: `jsx-${styles.__hash}`
    }, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      width: "15",
      height: "4",
      className: `jsx-${styles.__hash}`
    }), /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "7",
      width: "15",
      height: "2",
      fillOpacity: "0.25",
      className: `jsx-${styles.__hash}`
    }), /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "11",
      width: "15",
      height: "2",
      fillOpacity: "0.25",
      className: `jsx-${styles.__hash}`
    }), /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "15",
      width: "15",
      height: "2",
      fillOpacity: "0.25",
      className: `jsx-${styles.__hash}`
    }))), /*#__PURE__*/React.createElement("strong", {
      className: `jsx-${styles.__hash}`
    }, i18n.t('Combined:', {
      nsSeparator: '^^'
    })), i18n.t('option values are aggregated and shown as a single data item.'))
  }), /*#__PURE__*/React.createElement(Radio, {
    dense: true,
    name: "output",
    value: OUTPUT_MODE_INDIVIDUAL,
    checked: outputMode === OUTPUT_MODE_INDIVIDUAL,
    onChange: () => setOutputMode(OUTPUT_MODE_INDIVIDUAL),
    label: /*#__PURE__*/React.createElement("div", {
      className: `jsx-${styles.__hash}` + " " + (cx('radio-label', {
        checked: outputMode === OUTPUT_MODE_INDIVIDUAL
      }) || "")
    }, /*#__PURE__*/React.createElement("span", {
      className: `jsx-${styles.__hash}` + " " + "icon"
    }, /*#__PURE__*/React.createElement("svg", {
      width: "21",
      height: "17",
      viewBox: "0 0 21 17",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: `jsx-${styles.__hash}`
    }, /*#__PURE__*/React.createElement("g", {
      className: `jsx-${styles.__hash}`
    }, /*#__PURE__*/React.createElement("rect", {
      width: "5",
      height: "4",
      className: `jsx-${styles.__hash}`
    }), /*#__PURE__*/React.createElement("rect", {
      opacity: "0.4",
      y: "7",
      width: "5",
      height: "2",
      fillOpacity: "0.25",
      className: `jsx-${styles.__hash}`
    }), /*#__PURE__*/React.createElement("rect", {
      opacity: "0.4",
      y: "11",
      width: "5",
      height: "2",
      fillOpacity: "0.25",
      className: `jsx-${styles.__hash}`
    }), /*#__PURE__*/React.createElement("rect", {
      opacity: "0.4",
      y: "15",
      width: "5",
      height: "2",
      fillOpacity: "0.25",
      className: `jsx-${styles.__hash}`
    }), /*#__PURE__*/React.createElement("rect", {
      x: "8",
      width: "5",
      height: "4",
      className: `jsx-${styles.__hash}`
    }), /*#__PURE__*/React.createElement("rect", {
      opacity: "0.4",
      x: "8",
      y: "7",
      width: "5",
      height: "2",
      fillOpacity: "0.25",
      className: `jsx-${styles.__hash}`
    }), /*#__PURE__*/React.createElement("rect", {
      opacity: "0.4",
      x: "8",
      y: "11",
      width: "5",
      height: "2",
      fillOpacity: "0.25",
      className: `jsx-${styles.__hash}`
    }), /*#__PURE__*/React.createElement("rect", {
      opacity: "0.4",
      x: "8",
      y: "15",
      width: "5",
      height: "2",
      fillOpacity: "0.25",
      className: `jsx-${styles.__hash}`
    }), /*#__PURE__*/React.createElement("rect", {
      x: "16",
      width: "5",
      height: "4",
      className: `jsx-${styles.__hash}`
    }), /*#__PURE__*/React.createElement("rect", {
      opacity: "0.4",
      x: "16",
      y: "7",
      width: "5",
      height: "2",
      fillOpacity: "0.25",
      className: `jsx-${styles.__hash}`
    }), /*#__PURE__*/React.createElement("rect", {
      opacity: "0.4",
      x: "16",
      y: "11",
      width: "5",
      height: "2",
      fillOpacity: "0.25",
      className: `jsx-${styles.__hash}`
    }), /*#__PURE__*/React.createElement("rect", {
      opacity: "0.4",
      x: "16",
      y: "15",
      width: "5",
      height: "2",
      fillOpacity: "0.25",
      className: `jsx-${styles.__hash}`
    })))), /*#__PURE__*/React.createElement("strong", {
      className: `jsx-${styles.__hash}`
    }, i18n.t('Individual:', {
      nsSeparator: '^^'
    })), i18n.t('each option and its values are shown as a data item.'))
  })), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
OutputMode.propTypes = {
  outputMode: PropTypes.string,
  setOutputMode: PropTypes.func
};