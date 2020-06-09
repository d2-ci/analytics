"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));

var _InputLabel = _interopRequireDefault(require("./InputLabel"));

var PeriodTypeFilter = function PeriodTypeFilter(_ref) {
  var options = _ref.options,
      onChange = _ref.onChange,
      value = _ref.value;
  return /*#__PURE__*/_react.default.createElement(_FormControl.default, null, /*#__PURE__*/_react.default.createElement(_InputLabel.default, {
    label: _d2I18n.default.t('Period type')
  }), /*#__PURE__*/_react.default.createElement(_Select.default, {
    onChange: onChange,
    value: value,
    inputProps: {
      name: 'periodType',
      id: 'period-type'
    },
    disableUnderline: true
  }, Object.entries(options).map(function (_ref2) {
    var _ref3 = (0, _slicedToArray2.default)(_ref2, 2),
        key = _ref3[0],
        val = _ref3[1];

    return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
      value: key,
      key: key
    }, val.name());
  })));
};

PeriodTypeFilter.propTypes = {
  options: _propTypes.default.object.isRequired,
  value: _propTypes.default.string,
  onChange: _propTypes.default.func
};
var _default = PeriodTypeFilter;
exports.default = _default;