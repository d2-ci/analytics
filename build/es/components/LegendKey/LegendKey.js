import _JSXStyle from "styled-jsx/style";
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles/LegendKey.style.js';

const LegendKey = _ref => {
  let {
    legendSets
  } = _ref;
  return legendSets.length ? /*#__PURE__*/React.createElement("div", {
    "data-test": 'legend-key-container',
    className: "jsx-".concat(styles.__hash) + " " + "container"
  }, legendSets.map((legendSet, index) => /*#__PURE__*/React.createElement("div", {
    key: legendSet.id,
    "data-test": "legend-key-item-".concat(legendSet.id),
    className: "jsx-".concat(styles.__hash) + " " + (cx('legendSet', {
      divider: index > 0
    }) || "")
  }, /*#__PURE__*/React.createElement("span", {
    className: "jsx-".concat(styles.__hash) + " " + "legendSetName"
  }, legendSet.name), legendSet.legends.sort((a, b) => a.startValue - b.startValue).map(legend => /*#__PURE__*/React.createElement("div", {
    key: legend.startValue,
    style: {
      borderLeft: "6px ".concat(legend.color, " solid")
    },
    className: "jsx-".concat(styles.__hash) + " " + "legend"
  }, /*#__PURE__*/React.createElement("span", {
    className: "jsx-".concat(styles.__hash)
  }, legend.name), /*#__PURE__*/React.createElement("span", {
    className: "jsx-".concat(styles.__hash) + " " + "values"
  }, "".concat(legend.startValue, "-<").concat(legend.endValue)))))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles)) : null;
};

LegendKey.propTypes = {
  legendSets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    legends: PropTypes.arrayOf(PropTypes.shape({
      color: PropTypes.string.isRequired,
      endValue: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      startValue: PropTypes.number.isRequired
    })).isRequired
  })).isRequired
};
export default LegendKey;