"use strict";

var _enzyme = require("enzyme");
var _react = _interopRequireDefault(require("react"));
var _PeriodTransfer = _interopRequireDefault(require("../PeriodTransfer.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('The Period Selector component', () => {
  let props;
  let shallowPeriodTransfer;
  const getWrapper = () => {
    if (!shallowPeriodTransfer) {
      shallowPeriodTransfer = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_PeriodTransfer.default, props));
    }
    return shallowPeriodTransfer;
  };
  beforeEach(() => {
    props = {
      initialSelectedPeriods: [],
      onSelect: jest.fn(),
      rightFooter: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null),
      dataTest: 'period-dimension'
    };
    shallowPeriodTransfer = undefined;
  });
  it('matches the snapshot', () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });
});