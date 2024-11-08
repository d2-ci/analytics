"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CreatedByFilter = exports.CREATED_BY_CURRENT_USER = exports.CREATED_BY_ALL_BUT_CURRENT_USER = exports.CREATED_BY_ALL = void 0;
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// TODO change the "Created by" prefix to "Creator" or something that does not require a context for the translators

const CREATED_BY_ALL = exports.CREATED_BY_ALL = 'all';
const CREATED_BY_ALL_BUT_CURRENT_USER = exports.CREATED_BY_ALL_BUT_CURRENT_USER = 'allButCurrentUser';
const CREATED_BY_CURRENT_USER = exports.CREATED_BY_CURRENT_USER = 'currentUser';
const CreatedByFilter = _ref => {
  let {
    selected,
    onChange
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_ui.SingleSelect, {
    selected: selected,
    onChange: _ref2 => {
      let {
        selected
      } = _ref2;
      return onChange(selected);
    },
    prefix: _d2I18n.default.t('Created by'),
    dense: true
  }, /*#__PURE__*/_react.default.createElement(_ui.SingleSelectOption, {
    label: _d2I18n.default.t('Anyone'),
    value: CREATED_BY_ALL
  }), /*#__PURE__*/_react.default.createElement(_ui.SingleSelectOption, {
    label: _d2I18n.default.t('Only you'),
    value: CREATED_BY_CURRENT_USER
  }), /*#__PURE__*/_react.default.createElement(_ui.SingleSelectOption, {
    label: _d2I18n.default.t('Others'),
    value: CREATED_BY_ALL_BUT_CURRENT_USER
  }));
};
exports.CreatedByFilter = CreatedByFilter;
CreatedByFilter.propTypes = {
  onChange: _propTypes.default.func.isRequired,
  selected: _propTypes.default.string
};
var _default = exports.default = CreatedByFilter;