"use strict";

var _react = require("@storybook/react");
var _react2 = _interopRequireDefault(require("react"));
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
(0, _react.storiesOf)('DimensionsPanel', module).add('fixed and dynamic dimensions', () => {
  return /*#__PURE__*/_react2.default.createElement(_DimensionsPanel.default, {
    dimensions: [...fixedDimensions, ...dynamicDimensions],
    onDimensionClick: onDimensionClick,
    selectedIds: []
  });
});
(0, _react.storiesOf)('DimensionsPanel', module).add('fixed dimensions only', () => {
  return /*#__PURE__*/_react2.default.createElement(_DimensionsPanel.default, {
    dimensions: fixedDimensions,
    onDimensionClick: onDimensionClick,
    selectedIds: []
  });
});
(0, _react.storiesOf)('DimensionsPanel', module).add('dynamic dimensions only', () => {
  return /*#__PURE__*/_react2.default.createElement(_DimensionsPanel.default, {
    dimensions: dynamicDimensions,
    onDimensionClick: onDimensionClick,
    selectedIds: []
  });
});
(0, _react.storiesOf)('DimensionsPanel', module).add('selected dimension', () => {
  return /*#__PURE__*/_react2.default.createElement(_DimensionsPanel.default, {
    dimensions: [...fixedDimensions, ...dynamicDimensions],
    onDimensionClick: onDimensionClick,
    selectedIds: [_predefinedDimensions.DIMENSION_ID_DATA]
  });
});
(0, _react.storiesOf)('DimensionsPanel', module).add('disabled dimension', () => {
  return /*#__PURE__*/_react2.default.createElement(_DimensionsPanel.default, {
    dimensions: [...fixedDimensions, ...dynamicDimensions],
    onDimensionClick: onDimensionClick,
    disabledDimension: dimension => dimension === _predefinedDimensions.DIMENSION_ID_DATA
  });
});
(0, _react.storiesOf)('DimensionsPanel', module).add('locked dimension', () => {
  return /*#__PURE__*/_react2.default.createElement(_DimensionsPanel.default, {
    dimensions: [...fixedDimensions, ...dynamicDimensions],
    onDimensionClick: onDimensionClick,
    selectedIds: [_predefinedDimensions.DIMENSION_ID_DATA],
    lockedDimension: dimension => dimension === _predefinedDimensions.DIMENSION_ID_DATA
  });
});
(0, _react.storiesOf)('DimensionsPanel', module).add('recommended dimension', () => {
  return /*#__PURE__*/_react2.default.createElement(_DimensionsPanel.default, {
    dimensions: [...fixedDimensions, ...dynamicDimensions],
    onDimensionClick: onDimensionClick,
    recommendedDimension: dimension => dimension === _predefinedDimensions.DIMENSION_ID_DATA
  });
});
(0, _react.storiesOf)('DimensionsPanel', module).add('with menu', () => {
  return /*#__PURE__*/_react2.default.createElement(_DimensionsPanel.default, {
    dimensions: [...fixedDimensions, ...dynamicDimensions],
    onDimensionClick: onDimensionClick,
    onDimensionOptionsClick: () => alert('options click')
  });
});