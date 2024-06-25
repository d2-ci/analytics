"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _ui = require("@dhis2/ui");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../../locales/index.js"));

var _dataTypes = require("../../modules/dataTypes.js");

var _DataTypeSelectorStyle = _interopRequireDefault(require("./styles/DataTypeSelector.style.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DataTypeSelector = _ref => {
  var _dataTypes$currentDat;

  let {
    currentDataType,
    onChange,
    dataTest
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "jsx-".concat(_DataTypeSelectorStyle.default.__hash) + " " + "container"
  }, /*#__PURE__*/_react.default.createElement(_ui.SingleSelectField, {
    label: _index.default.t('Data Type'),
    dataTest: dataTest,
    selected: ((_dataTypes$currentDat = _dataTypes.dataTypeMap[currentDataType]) === null || _dataTypes$currentDat === void 0 ? void 0 : _dataTypes$currentDat.id) || _dataTypes.DIMENSION_TYPE_ALL,
    onChange: ref => onChange(ref.selected),
    dense: true
  }, /*#__PURE__*/_react.default.createElement(_ui.SingleSelectOption, {
    value: _dataTypes.DIMENSION_TYPE_ALL,
    key: _dataTypes.DIMENSION_TYPE_ALL,
    label: _index.default.t('All types'),
    dataTest: "".concat(dataTest, "-option-all")
  }), Object.values(_dataTypes.dataTypeMap).map(type => /*#__PURE__*/_react.default.createElement(_ui.SingleSelectOption, {
    value: type.id,
    key: type.id,
    label: type.getName(),
    dataTest: "".concat(dataTest, "-option-").concat(type.id)
  }))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _DataTypeSelectorStyle.default.__hash
  }, _DataTypeSelectorStyle.default));
};

DataTypeSelector.propTypes = {
  currentDataType: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  dataTest: _propTypes.default.string
};
var _default = DataTypeSelector;
exports.default = _default;