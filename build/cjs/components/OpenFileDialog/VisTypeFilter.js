"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.VisTypeFilter = void 0;
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _visTypes = require("../../modules/visTypes.js");
var _VisTypeIcon = require("../VisTypeIcon.js");
var _CustomSelectOption = require("./CustomSelectOption.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const VisTypeFilter = _ref => {
  let {
    visTypes,
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
    prefix: _d2I18n.default.t('Type'),
    dense: true,
    maxHeight: "400px"
  }, visTypes === null || visTypes === void 0 ? void 0 : visTypes.map(_ref3 => {
    let {
      type,
      disabled,
      insertDivider
    } = _ref3;
    return /*#__PURE__*/_react.default.createElement(_CustomSelectOption.CustomSelectOption, {
      key: type,
      disabled: disabled,
      label: (0, _visTypes.getDisplayNameByVisType)(type),
      insertDivider: insertDivider,
      value: type,
      icon: _visTypes.visTypeIcons[type] ? /*#__PURE__*/_react.default.createElement(_VisTypeIcon.VisTypeIcon, {
        type: type,
        useSmall: true,
        color: _ui.colors.grey600
      }) : undefined
    });
  }));
};
exports.VisTypeFilter = VisTypeFilter;
VisTypeFilter.propTypes = {
  selected: _propTypes.default.string,
  visTypes: _propTypes.default.arrayOf(_propTypes.default.shape({
    disabled: _propTypes.default.bool,
    insertDivider: _propTypes.default.bool,
    type: _propTypes.default.string
  })),
  onChange: _propTypes.default.func
};
var _default = VisTypeFilter;
exports.default = _default;