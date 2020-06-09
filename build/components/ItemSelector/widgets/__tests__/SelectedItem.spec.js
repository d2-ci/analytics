"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SelectedItem = _interopRequireDefault(require("../SelectedItem"));

describe('Selected item component', function () {
  var props;
  var shallowItem;

  var item = function item() {
    if (!shallowItem) {
      shallowItem = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_SelectedItem.default, props));
    }

    return shallowItem;
  };

  beforeEach(function () {
    props = {
      id: 'selected-item-test-id',
      name: 'I am a selected item',
      index: 0,
      highlighted: false,
      ghost: false,
      onClick: jest.fn(),
      onRemove: jest.fn()
    };
    shallowItem = undefined;
  });
  it('renders an unhighlighted item', function () {
    var wrapper = item();
    expect(wrapper).toMatchSnapshot();
  });
  it('renders a highlighted item', function () {
    props.highlighted = true;
    var wrapper = item();
    expect(wrapper).toMatchSnapshot();
  });
  it('renders a ghost item', function () {
    props.ghost = true;
    var wrapper = item();
    expect(wrapper).toMatchSnapshot();
  });
  describe('onClick', function () {
    it('fires onClick property', function () {
      item().props().onClick({
        preventDefault: function preventDefault() {
          return undefined;
        }
      });
      expect(props.onClick).toBeCalledTimes(1);
    });
    it('fires onClick with correct arguments when metaKey pressed', function () {
      item().props().onClick({
        preventDefault: function preventDefault() {
          return undefined;
        },
        metaKey: true,
        ctrlKey: false,
        shiftKey: false
      });
      expect(props.onClick).toBeCalledTimes(1);
      expect(props.onClick).toBeCalledWith({
        isCtrlPressed: true,
        isShiftPressed: false,
        index: 0,
        id: props.id
      });
    });
    it('fires onClick with correct arguments when ctrlKey pressed', function () {
      item().props().onClick({
        preventDefault: function preventDefault() {
          return undefined;
        },
        metaKey: false,
        ctrlKey: true,
        shiftKey: false
      });
      expect(props.onClick).toBeCalledTimes(1);
      expect(props.onClick).toBeCalledWith({
        isCtrlPressed: true,
        isShiftPressed: false,
        index: 0,
        id: props.id
      });
    });
    it('fires onClick with correct arguments when shiftKey pressed', function () {
      item().props().onClick({
        preventDefault: function preventDefault() {
          return undefined;
        },
        metaKey: false,
        ctrlKey: false,
        shiftKey: true
      });
      expect(props.onClick).toBeCalledTimes(1);
      expect(props.onClick).toBeCalledWith({
        isCtrlPressed: false,
        isShiftPressed: true,
        index: 0,
        id: props.id
      });
    });
  });
});