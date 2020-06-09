"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Detail = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));

var _dataTypes = require("../../modules/dataTypes");

var _Details = require("./styles/Details.style");

var getOptions = function getOptions() {
  var _ref;

  return _ref = {}, (0, _defineProperty2.default)(_ref, _dataTypes.TOTALS, _d2I18n.default.t('Totals')), (0, _defineProperty2.default)(_ref, _dataTypes.DETAIL, _d2I18n.default.t('Details')), _ref;
};

var Detail = function Detail(_ref2) {
  var value = _ref2.value,
      onDetailChange = _ref2.onDetailChange;
  return _react.default.createElement("div", {
    style: _Details.styles.detailContainer
  }, _react.default.createElement(_InputLabel.default, {
    style: _Details.styles.titleText
  }, _d2I18n.default.t('Detail')), _react.default.createElement(_Select.default, {
    onChange: function onChange(event) {
      return onDetailChange(event.target.value);
    },
    value: value,
    disableUnderline: true,
    SelectDisplayProps: {
      style: _Details.styles.dropDown
    }
  }, Object.entries(getOptions()).map(function (_ref3) {
    var _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
        key = _ref4[0],
        name = _ref4[1];

    return _react.default.createElement(_MenuItem.default, {
      key: key,
      value: key
    }, name);
  })));
};

exports.Detail = Detail;
Detail.propTypes = {
  value: _propTypes.default.string.isRequired,
  onDetailChange: _propTypes.default.func.isRequired
};
var _default = Detail;
exports.default = _default;