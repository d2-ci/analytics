"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _DimensionItem = require("../DimensionItem");

var _enzyme = require("enzyme");

describe('DimensionItem', function () {
  var props;
  var shallowItem;

  var dimensionItem = function dimensionItem() {
    if (!shallowItem) {
      shallowItem = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_DimensionItem.DimensionItem, props));
    }

    return shallowItem;
  };

  beforeEach(function () {
    props = {
      id: 'pe',
      name: 'Period',
      isDeactivated: false,
      isSelected: false,
      isRecommended: false,
      isLocked: false
    };
    shallowItem = undefined;
  });
  it('matches the snapshot', function () {
    expect(dimensionItem()).toMatchSnapshot();
  });
  it('matches the snapshot with recommended', function () {
    props.isRecommended = true;
    expect(dimensionItem()).toMatchSnapshot();
  });
  it('matches the snapshot with selected', function () {
    props.isSelected = true;
    expect(dimensionItem()).toMatchSnapshot();
  });
  it('matches the snapshot with locked', function () {
    props.isLocked = true;
    expect(dimensionItem()).toMatchSnapshot();
  });
  it('matches the snapshot with onOptionsClick', function () {
    props.onOptionsClick = jest.fn();
    expect(dimensionItem()).toMatchSnapshot();
  });
});