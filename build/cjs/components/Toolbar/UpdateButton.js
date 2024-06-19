"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateButton = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _loader = require("@dhis2-ui/loader");
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _uiConstants = require("@dhis2/ui-constants");
var _uiIcons = require("@dhis2/ui-icons");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _MenuButtonStyles = _interopRequireDefault(require("./MenuButton.styles.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const UpdateButton = _ref => {
  let {
    onClick,
    disabled,
    loading,
    dataTest
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClick,
    disabled: disabled,
    "data-test": dataTest,
    className: `jsx-${_MenuButtonStyles.default.__hash}` + " " + _style.default.dynamic([["2364287882", [_uiConstants.colors.blue700, _uiConstants.colors.blue100, _uiConstants.colors.blue200]]])
  }, loading ? /*#__PURE__*/_react.default.createElement(_loader.CircularLoader, {
    extrasmall: true
  }) : /*#__PURE__*/_react.default.createElement(_uiIcons.IconSync16, null), _d2I18n.default.t('Update'), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _MenuButtonStyles.default.__hash
  }, _MenuButtonStyles.default), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "2364287882",
    dynamic: [_uiConstants.colors.blue700, _uiConstants.colors.blue100, _uiConstants.colors.blue200]
  }, [`button.__jsx-style-dynamic-selector{gap:8px;color:${_uiConstants.colors.blue700};font-weight:500;}`, `button.__jsx-style-dynamic-selector:hover.__jsx-style-dynamic-selector:enabled{background:${_uiConstants.colors.blue100};}`, `button.__jsx-style-dynamic-selector:active{background:${_uiConstants.colors.blue200};}`]));
};
exports.UpdateButton = UpdateButton;
UpdateButton.defaultProps = {
  dataTest: 'dhis2-analytics-updatebutton'
};
UpdateButton.propTypes = {
  onClick: _propTypes.default.func.isRequired,
  dataTest: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  loading: _propTypes.default.bool
};