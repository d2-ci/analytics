"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WithMenu = exports.SelectedDimension = exports.RecommendedDimension = exports.LockedDimension = exports.FixedDimensionsOnly = exports.FixedAndDynamicDimensions = exports.DynamicDimensionsOnly = exports.DisabledDimension = void 0;
var _react = _interopRequireDefault(require("react"));
var _DimensionsPanel = _interopRequireDefault(require("../components/DimensionsPanel/DimensionsPanel.js"));
var _predefinedDimensions = require("../modules/predefinedDimensions.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const fixedDimensions = [{
  id: _predefinedDimensions.DIMENSION_ID_DATA,
  name: 'Data'
}, {
  id: _predefinedDimensions.DIMENSION_ID_PERIOD,
  name: 'Period'
}, {
  id: _predefinedDimensions.DIMENSION_ID_ORGUNIT,
  name: 'Organisation Unit'
}];
const dynamicDimensions = [{
  id: '0000001',
  name: 'One'
}, {
  id: '0000002',
  name: 'Two'
}, {
  id: '0000003',
  name: 'Three'
}];
const onDimensionClick = () => alert('click');
var _default = exports.default = {
  title: 'DimensionsPanel'
};
const FixedAndDynamicDimensions = () => {
  return /*#__PURE__*/_react.default.createElement(_DimensionsPanel.default, {
    dimensions: [...fixedDimensions, ...dynamicDimensions],
    onDimensionClick: onDimensionClick,
    selectedIds: []
  });
};
exports.FixedAndDynamicDimensions = FixedAndDynamicDimensions;
FixedAndDynamicDimensions.story = {
  name: 'fixed and dynamic dimensions'
};
const FixedDimensionsOnly = () => {
  return /*#__PURE__*/_react.default.createElement(_DimensionsPanel.default, {
    dimensions: fixedDimensions,
    onDimensionClick: onDimensionClick,
    selectedIds: []
  });
};
exports.FixedDimensionsOnly = FixedDimensionsOnly;
FixedDimensionsOnly.story = {
  name: 'fixed dimensions only'
};
const DynamicDimensionsOnly = () => {
  return /*#__PURE__*/_react.default.createElement(_DimensionsPanel.default, {
    dimensions: dynamicDimensions,
    onDimensionClick: onDimensionClick,
    selectedIds: []
  });
};
exports.DynamicDimensionsOnly = DynamicDimensionsOnly;
DynamicDimensionsOnly.story = {
  name: 'dynamic dimensions only'
};
const SelectedDimension = () => {
  return /*#__PURE__*/_react.default.createElement(_DimensionsPanel.default, {
    dimensions: [...fixedDimensions, ...dynamicDimensions],
    onDimensionClick: onDimensionClick,
    selectedIds: [_predefinedDimensions.DIMENSION_ID_DATA]
  });
};
exports.SelectedDimension = SelectedDimension;
SelectedDimension.story = {
  name: 'selected dimension'
};
const DisabledDimension = () => {
  return /*#__PURE__*/_react.default.createElement(_DimensionsPanel.default, {
    dimensions: [...fixedDimensions, ...dynamicDimensions],
    onDimensionClick: onDimensionClick,
    disabledDimension: dimension => dimension === _predefinedDimensions.DIMENSION_ID_DATA
  });
};
exports.DisabledDimension = DisabledDimension;
DisabledDimension.story = {
  name: 'disabled dimension'
};
const LockedDimension = () => {
  return /*#__PURE__*/_react.default.createElement(_DimensionsPanel.default, {
    dimensions: [...fixedDimensions, ...dynamicDimensions],
    onDimensionClick: onDimensionClick,
    selectedIds: [_predefinedDimensions.DIMENSION_ID_DATA],
    lockedDimension: dimension => dimension === _predefinedDimensions.DIMENSION_ID_DATA
  });
};
exports.LockedDimension = LockedDimension;
LockedDimension.story = {
  name: 'locked dimension'
};
const RecommendedDimension = () => {
  return /*#__PURE__*/_react.default.createElement(_DimensionsPanel.default, {
    dimensions: [...fixedDimensions, ...dynamicDimensions],
    onDimensionClick: onDimensionClick,
    recommendedDimension: dimension => dimension === _predefinedDimensions.DIMENSION_ID_DATA
  });
};
exports.RecommendedDimension = RecommendedDimension;
RecommendedDimension.story = {
  name: 'recommended dimension'
};
const WithMenu = () => {
  return /*#__PURE__*/_react.default.createElement(_DimensionsPanel.default, {
    dimensions: [...fixedDimensions, ...dynamicDimensions],
    onDimensionClick: onDimensionClick,
    onDimensionOptionsClick: () => alert('options click')
  });
};
exports.WithMenu = WithMenu;
WithMenu.story = {
  name: 'with menu'
};