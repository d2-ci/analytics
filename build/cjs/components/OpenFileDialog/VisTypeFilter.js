"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatTypeFilter = exports.default = exports.VisTypeFilter = void 0;
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _visTypes = require("../../modules/visTypes.js");
var _VisTypeIcon = require("../VisTypeIcon.js");
var _CustomSelectOption = require("./CustomSelectOption.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const formatTypeFilter = (filterVisTypes, visType) => {
  const defaultFilterTypes = [];
  let defaultTypeFilter;
  if (Array.isArray(filterVisTypes)) {
    defaultFilterTypes.push(...filterVisTypes.filter(({
      type,
      disabled
    }) => !(disabled || [_visTypes.VIS_TYPE_GROUP_ALL, _visTypes.VIS_TYPE_GROUP_CHARTS].includes(type))).map(({
      type
    }) => type));
    if (defaultFilterTypes.length) {
      defaultTypeFilter = `type:in:[${defaultFilterTypes.join(',')}]`;
    }
  }
  switch (visType) {
    case _visTypes.VIS_TYPE_GROUP_ALL:
      {
        return defaultTypeFilter;
      }
    case _visTypes.VIS_TYPE_GROUP_CHARTS:
      {
        if (defaultFilterTypes.length) {
          return `type:in:[${defaultFilterTypes.filter(item => item !== _visTypes.VIS_TYPE_PIVOT_TABLE).join(',')}]`;
        } else {
          return `type:!eq:${_visTypes.VIS_TYPE_PIVOT_TABLE}`;
        }
      }
    default:
      {
        if (visType) {
          return `type:eq:${visType}`;
        } else if (defaultTypeFilter) {
          return defaultTypeFilter;
        }
      }
  }
};
exports.formatTypeFilter = formatTypeFilter;
const VisTypeFilter = ({
  visTypes,
  selected,
  onChange
}) => /*#__PURE__*/_react.default.createElement(_ui.SingleSelect, {
  selected: selected,
  onChange: ({
    selected
  }) => onChange(selected),
  prefix: _d2I18n.default.t('Type'),
  dense: true,
  maxHeight: "400px"
}, visTypes === null || visTypes === void 0 ? void 0 : visTypes.map(({
  type,
  disabled,
  insertDivider
}) => /*#__PURE__*/_react.default.createElement(_CustomSelectOption.CustomSelectOption, {
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
})));
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
var _default = exports.default = VisTypeFilter;