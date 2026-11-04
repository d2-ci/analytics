"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WithMenu = exports.TextWrapping = exports.SelectedDimension = exports.RecommendedDimension = exports.LockedDimension = exports.FixedDimensionsOnly = exports.FixedAndDynamicDimensions = exports.DynamicDimensionsOnly = exports.DisabledDimension = void 0;
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
  name: 'Dietary diversity score based on variety of consumed food groups over a weekly period'
}, {
  id: '0000002',
  name: 'Healthcare services access and utilization frequency including preventive check-ups and specialist care'
}, {
  id: '0000003',
  name: 'Sleep quality index incorporating duration, time to sleep, frequency of awakenings, and restfulness'
}, {
  id: '0000004',
  name: 'Malaria incidence rate'
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
const TextWrapping = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '260px',
      height: '400px',
      borderInlineEnd: '1px dotted #CCC',
      resize: 'both',
      overflow: 'auto'
    }
  }, /*#__PURE__*/_react.default.createElement(_DimensionsPanel.default, {
    dimensions: [...fixedDimensions, ...dynamicDimensions],
    onDimensionClick: onDimensionClick,
    onDimensionOptionsClick: () => alert('options click'),
    recommendedDimension: dimension => dimension === '0000002',
    lockedDimension: dimension => dimension === '0000003',
    selectedIds: ['0000003', '0000002']
  }));
};
exports.TextWrapping = TextWrapping;
TextWrapping.story = {
  name: 'text wrapping'
};