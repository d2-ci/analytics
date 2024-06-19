"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ui = require("@dhis2/ui");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../../../locales/index.js"));

var _RecommendedIconStyle = require("./styles/RecommendedIcon.style.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RecommendedIcon = _ref => {
  let {
    isRecommended,
    dataTest
  } = _ref;
  return isRecommended ? /*#__PURE__*/_react.default.createElement(_ui.Tooltip, {
    content: _index.default.t('Dimension recommended with selected data'),
    placement: "bottom",
    maxWidth: 160
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: _RecommendedIconStyle.styles.recommendedIcon,
    "data-test": dataTest
  })) : null;
};

RecommendedIcon.propTypes = {
  isRecommended: _propTypes.default.bool.isRequired,
  dataTest: _propTypes.default.string
};
var _default = RecommendedIcon;
exports.default = _default;