"use strict";

var _enzyme = require("enzyme");
var _react = _interopRequireDefault(require("react"));
var _DimensionItem = _interopRequireDefault(require("../DimensionItem.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
describe('DimensionItem', () => {
  let props;
  let shallowItem;
  const dimensionItem = () => {
    if (!shallowItem) {
      shallowItem = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_DimensionItem.default, props));
    }
    return shallowItem;
  };
  beforeEach(() => {
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
  it('matches the snapshot', () => {
    expect(dimensionItem()).toMatchSnapshot();
  });
  it('matches the snapshot with recommended', () => {
    props.isRecommended = true;
    expect(dimensionItem()).toMatchSnapshot();
  });
  it('matches the snapshot with selected', () => {
    props.isSelected = true;
    expect(dimensionItem()).toMatchSnapshot();
  });
  it('matches the snapshot with locked', () => {
    props.isLocked = true;
    expect(dimensionItem()).toMatchSnapshot();
  });
  it('matches the snapshot with onOptionsClick', () => {
    props.onOptionsClick = jest.fn();
    expect(dimensionItem()).toMatchSnapshot();
  });
});