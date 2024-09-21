"use strict";

var _ui = require("@dhis2/ui");
var _enzyme = require("enzyme");
var _react = _interopRequireDefault(require("react"));
var _Filter = _interopRequireDefault(require("../Filter.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('The Filter component ', () => {
  let shallowFilter;
  let props;
  const filterComp = () => {
    if (!shallowFilter) {
      shallowFilter = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Filter.default, props));
    }
    return shallowFilter;
  };
  beforeEach(() => {
    props = {
      placeholder: 'testplaceholder',
      text: '',
      onChange: jest.fn(),
      onClear: jest.fn()
    };
    shallowFilter = undefined;
  });
  it('renders a InputField component', () => {
    expect(filterComp().find(_ui.InputField).length).toEqual(1);
  });
  it('should call prop onClear if onChange receives text string with length < 1 (Ctrl-A  + BackSpace)', () => {
    props.text = 'anotherTestString';
    const filter = filterComp().find(_ui.InputField);
    const mockEvent = {
      value: '',
      preventDefault: jest.fn()
    };
    filter.props().onChange(mockEvent);
    expect(props.onClear).toHaveBeenCalledTimes(1);
  });
});