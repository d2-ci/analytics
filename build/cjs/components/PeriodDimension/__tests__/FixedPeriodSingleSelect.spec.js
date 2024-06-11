"use strict";

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _FixedPeriodSelect = _interopRequireDefault(require("../FixedPeriodSelect.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('The Fixed Period Single Select component', () => {
  let props;
  let shallowFixedPeriodSelect;

  const getWrapper = () => {
    if (!shallowFixedPeriodSelect) {
      shallowFixedPeriodSelect = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_FixedPeriodSelect.default, props));
    }

    return shallowFixedPeriodSelect;
  };

  beforeEach(() => {
    props = {
      value: '201405',
      onChange: () => {}
    };
    shallowFixedPeriodSelect = undefined;
  });
  it('matches the snapshot', () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });
});