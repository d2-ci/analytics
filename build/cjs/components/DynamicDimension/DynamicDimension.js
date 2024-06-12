"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DynamicDimension = exports.ALL_DYNAMIC_DIMENSION_ITEMS = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _appRuntime = require("@dhis2/app-runtime");

var _ui = require("@dhis2/ui");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _dimensions = require("../../api/dimensions.js");

var _index = _interopRequireDefault(require("../../locales/index.js"));

var _ItemSelector = _interopRequireDefault(require("./ItemSelector.js"));

var _DynamicDimensionStyle = _interopRequireDefault(require("./styles/DynamicDimension.style.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ALL_DYNAMIC_DIMENSION_ITEMS = 'ALL_ITEMS';
exports.ALL_DYNAMIC_DIMENSION_ITEMS = ALL_DYNAMIC_DIMENSION_ITEMS;

const DynamicDimension = _ref => {
  let {
    dimensionId,
    onSelect,
    selectedItems,
    rightFooter,
    dimensionTitle,
    displayNameProp
  } = _ref;
  const dataEngine = (0, _appRuntime.useDataEngine)();

  const fetchItems = (page, searchTerm) => (0, _dimensions.apiFetchItemsByDimension)({
    dataEngine,
    dimensionId,
    searchTerm,
    page,
    nameProp: displayNameProp
  });

  const onSelectItems = newSelectedItems => onSelect({
    dimensionId,
    items: newSelectedItems.map(item => ({
      id: item.value,
      name: item.label
    }))
  });

  const allIsSelected = selectedItems.some(item => item.id === ALL_DYNAMIC_DIMENSION_ITEMS);

  const selectAutomatic = () => onSelect({
    dimensionId,
    items: [{
      id: ALL_DYNAMIC_DIMENSION_ITEMS,
      name: _index.default.t('All items')
    }, ...selectedItems]
  });

  const selectManual = () => onSelect({
    dimensionId,
    items: [...selectedItems.filter(item => item.id !== ALL_DYNAMIC_DIMENSION_ITEMS)]
  });

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ui.Field, {
    name: "dynamic-dimension-selection-type-selector",
    dense: true
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "jsx-".concat(_DynamicDimensionStyle.default.__hash) + " " + "automatic"
  }, /*#__PURE__*/_react.default.createElement(_ui.Radio, {
    key: 'AUTOMATIC',
    label: _index.default.t('Automatically include all items'),
    dense: true,
    onChange: () => selectAutomatic(),
    checked: allIsSelected,
    dataTest: 'dynamic-dimension-selection-type-automatic'
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "jsx-".concat(_DynamicDimensionStyle.default.__hash) + " " + "help-text"
  }, _index.default.t('Select all {{- dimensionTitle}} items. With this option, new items added in the future will be automatically included.', {
    dimensionTitle
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "jsx-".concat(_DynamicDimensionStyle.default.__hash) + " " + "manual"
  }, /*#__PURE__*/_react.default.createElement(_ui.Radio, {
    key: 'MANUAL',
    label: _index.default.t('Manually select items...'),
    dense: true,
    onChange: () => selectManual(),
    checked: !allIsSelected,
    dataTest: 'dynamic-dimension-selection-type-manual'
  }))), !allIsSelected && /*#__PURE__*/_react.default.createElement(_ItemSelector.default, {
    initialSelected: selectedItems.map(item => ({
      value: item.id,
      label: item.name
    })),
    noItemsMessage: _index.default.t('Nothing found in {{- dimensionTitle}}', {
      dimensionTitle
    }),
    onFetch: fetchItems,
    onSelect: onSelectItems,
    rightFooter: rightFooter,
    dataTest: "".concat(dimensionTitle.replace(/\s+/g, '-').toLowerCase(), "-dimension")
  }), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _DynamicDimensionStyle.default.__hash
  }, _DynamicDimensionStyle.default));
};

exports.DynamicDimension = DynamicDimension;
DynamicDimension.propTypes = {
  dimensionId: _propTypes.default.string.isRequired,
  dimensionTitle: _propTypes.default.string.isRequired,
  displayNameProp: _propTypes.default.string.isRequired,
  selectedItems: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string,
    name: _propTypes.default.string
  })).isRequired,
  onSelect: _propTypes.default.func.isRequired,
  rightFooter: _propTypes.default.node
};
DynamicDimension.defaultProps = {
  selectedItems: [],
  onSelect: Function.prototype
};
var _default = DynamicDimension;
exports.default = _default;