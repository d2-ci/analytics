"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _predefinedDimensions = require("../../modules/predefinedDimensions.js");

var _ItemSelector = _interopRequireDefault(require("./ItemSelector.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DataDimension = _ref => {
  let {
    onSelect,
    selectedDimensions,
    displayNameProp,
    infoBoxMessage
  } = _ref;

  const onSelectItems = selectedItem => onSelect({
    dimensionId: _predefinedDimensions.DIMENSION_ID_DATA,
    items: selectedItem.map(item => ({
      id: item.value,
      name: item.label,
      type: item.type
    }))
  });

  return /*#__PURE__*/_react.default.createElement(_ItemSelector.default, {
    selectedItems: selectedDimensions.map(item => ({
      value: item.id,
      label: item.name,
      isActive: item.isActive,
      type: item.type
    })),
    onSelect: onSelectItems,
    displayNameProp: displayNameProp,
    infoBoxMessage: infoBoxMessage,
    dataTest: 'data-dimension'
  });
};

DataDimension.propTypes = {
  displayNameProp: _propTypes.default.string.isRequired,
  selectedDimensions: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string,
    name: _propTypes.default.string
  })).isRequired,
  onSelect: _propTypes.default.func.isRequired,
  infoBoxMessage: _propTypes.default.string
};
DataDimension.defaultProps = {
  selectedDimensions: [],
  onSelect: Function.prototype
};
var _default = DataDimension;
exports.default = _default;