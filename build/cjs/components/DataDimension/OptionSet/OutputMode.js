"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OutputMode = exports.OUTPUT_MODE_INDIVIDUAL = exports.OUTPUT_MODE_COMBINED = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _OptionSetModalStyle = _interopRequireDefault(require("./styles/OptionSetModal.style.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const OUTPUT_MODE_COMBINED = exports.OUTPUT_MODE_COMBINED = 'combined';
const OUTPUT_MODE_INDIVIDUAL = exports.OUTPUT_MODE_INDIVIDUAL = 'individual';
const OutputMode = _ref => {
  let {
    outputMode,
    setOutputMode
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_OptionSetModalStyle.default.__hash}` + " " + "group"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: `jsx-${_OptionSetModalStyle.default.__hash}` + " " + "group-header"
  }, _d2I18n.default.t('Output mode')), /*#__PURE__*/_react.default.createElement(_ui.Radio, {
    dense: true,
    name: "output",
    value: OUTPUT_MODE_COMBINED,
    checked: outputMode === OUTPUT_MODE_COMBINED,
    onChange: () => setOutputMode(OUTPUT_MODE_COMBINED),
    label: /*#__PURE__*/_react.default.createElement("div", {
      className: `jsx-${_OptionSetModalStyle.default.__hash}` + " " + ((0, _classnames.default)('radio-label', {
        checked: outputMode === OUTPUT_MODE_COMBINED
      }) || "")
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: `jsx-${_OptionSetModalStyle.default.__hash}` + " " + "icon"
    }, /*#__PURE__*/_react.default.createElement("svg", {
      width: "21",
      height: "17",
      viewBox: "0 0 21 17",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: `jsx-${_OptionSetModalStyle.default.__hash}`
    }, /*#__PURE__*/_react.default.createElement("rect", {
      x: "3",
      width: "15",
      height: "4",
      className: `jsx-${_OptionSetModalStyle.default.__hash}`
    }), /*#__PURE__*/_react.default.createElement("rect", {
      x: "3",
      y: "7",
      width: "15",
      height: "2",
      fillOpacity: "0.25",
      className: `jsx-${_OptionSetModalStyle.default.__hash}`
    }), /*#__PURE__*/_react.default.createElement("rect", {
      x: "3",
      y: "11",
      width: "15",
      height: "2",
      fillOpacity: "0.25",
      className: `jsx-${_OptionSetModalStyle.default.__hash}`
    }), /*#__PURE__*/_react.default.createElement("rect", {
      x: "3",
      y: "15",
      width: "15",
      height: "2",
      fillOpacity: "0.25",
      className: `jsx-${_OptionSetModalStyle.default.__hash}`
    }))), /*#__PURE__*/_react.default.createElement("strong", {
      className: `jsx-${_OptionSetModalStyle.default.__hash}`
    }, _d2I18n.default.t('Combined:', {
      nsSeparator: '^^'
    })), _d2I18n.default.t('option values are aggregated and shown as a single data item.'))
  }), /*#__PURE__*/_react.default.createElement(_ui.Radio, {
    dense: true,
    name: "output",
    value: OUTPUT_MODE_INDIVIDUAL,
    checked: outputMode === OUTPUT_MODE_INDIVIDUAL,
    onChange: () => setOutputMode(OUTPUT_MODE_INDIVIDUAL),
    label: /*#__PURE__*/_react.default.createElement("div", {
      className: `jsx-${_OptionSetModalStyle.default.__hash}` + " " + ((0, _classnames.default)('radio-label', {
        checked: outputMode === OUTPUT_MODE_INDIVIDUAL
      }) || "")
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: `jsx-${_OptionSetModalStyle.default.__hash}` + " " + "icon"
    }, /*#__PURE__*/_react.default.createElement("svg", {
      width: "21",
      height: "17",
      viewBox: "0 0 21 17",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: `jsx-${_OptionSetModalStyle.default.__hash}`
    }, /*#__PURE__*/_react.default.createElement("g", {
      className: `jsx-${_OptionSetModalStyle.default.__hash}`
    }, /*#__PURE__*/_react.default.createElement("rect", {
      width: "5",
      height: "4",
      className: `jsx-${_OptionSetModalStyle.default.__hash}`
    }), /*#__PURE__*/_react.default.createElement("rect", {
      opacity: "0.4",
      y: "7",
      width: "5",
      height: "2",
      fillOpacity: "0.25",
      className: `jsx-${_OptionSetModalStyle.default.__hash}`
    }), /*#__PURE__*/_react.default.createElement("rect", {
      opacity: "0.4",
      y: "11",
      width: "5",
      height: "2",
      fillOpacity: "0.25",
      className: `jsx-${_OptionSetModalStyle.default.__hash}`
    }), /*#__PURE__*/_react.default.createElement("rect", {
      opacity: "0.4",
      y: "15",
      width: "5",
      height: "2",
      fillOpacity: "0.25",
      className: `jsx-${_OptionSetModalStyle.default.__hash}`
    }), /*#__PURE__*/_react.default.createElement("rect", {
      x: "8",
      width: "5",
      height: "4",
      className: `jsx-${_OptionSetModalStyle.default.__hash}`
    }), /*#__PURE__*/_react.default.createElement("rect", {
      opacity: "0.4",
      x: "8",
      y: "7",
      width: "5",
      height: "2",
      fillOpacity: "0.25",
      className: `jsx-${_OptionSetModalStyle.default.__hash}`
    }), /*#__PURE__*/_react.default.createElement("rect", {
      opacity: "0.4",
      x: "8",
      y: "11",
      width: "5",
      height: "2",
      fillOpacity: "0.25",
      className: `jsx-${_OptionSetModalStyle.default.__hash}`
    }), /*#__PURE__*/_react.default.createElement("rect", {
      opacity: "0.4",
      x: "8",
      y: "15",
      width: "5",
      height: "2",
      fillOpacity: "0.25",
      className: `jsx-${_OptionSetModalStyle.default.__hash}`
    }), /*#__PURE__*/_react.default.createElement("rect", {
      x: "16",
      width: "5",
      height: "4",
      className: `jsx-${_OptionSetModalStyle.default.__hash}`
    }), /*#__PURE__*/_react.default.createElement("rect", {
      opacity: "0.4",
      x: "16",
      y: "7",
      width: "5",
      height: "2",
      fillOpacity: "0.25",
      className: `jsx-${_OptionSetModalStyle.default.__hash}`
    }), /*#__PURE__*/_react.default.createElement("rect", {
      opacity: "0.4",
      x: "16",
      y: "11",
      width: "5",
      height: "2",
      fillOpacity: "0.25",
      className: `jsx-${_OptionSetModalStyle.default.__hash}`
    }), /*#__PURE__*/_react.default.createElement("rect", {
      opacity: "0.4",
      x: "16",
      y: "15",
      width: "5",
      height: "2",
      fillOpacity: "0.25",
      className: `jsx-${_OptionSetModalStyle.default.__hash}`
    })))), /*#__PURE__*/_react.default.createElement("strong", {
      className: `jsx-${_OptionSetModalStyle.default.__hash}`
    }, _d2I18n.default.t('Individual:', {
      nsSeparator: '^^'
    })), _d2I18n.default.t('each option and its values are shown as a data item.'))
  })), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _OptionSetModalStyle.default.__hash
  }, _OptionSetModalStyle.default));
};
exports.OutputMode = OutputMode;
OutputMode.propTypes = {
  outputMode: _propTypes.default.string,
  setOutputMode: _propTypes.default.func
};