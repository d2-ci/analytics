"use strict";

require("@testing-library/jest-dom");
var _react = require("@testing-library/react");
var _enzyme = require("enzyme");
var _react2 = _interopRequireDefault(require("react"));
var _index = require("../index.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('<HoverMenuBar/>', () => {
  it('renders children', () => {
    const childNode = 'text node';
    const wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react2.default.createElement(_index.HoverMenuBar, null, childNode));
    expect(wrapper.containsMatchingElement(childNode)).toBe(true);
  });
  it('accepts a `dataTest` prop', () => {
    const dataTest = 'test';
    const wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react2.default.createElement(_index.HoverMenuBar, {
      dataTest: dataTest
    }, "children"));
    expect(wrapper.find('div').prop('data-test')).toBe(dataTest);
  });
  describe('mouse interactions', () => {
    it('does not open on hover before a dropdown anchor is clicked', async () => {
      createFullMenuBarWrapper();
      _react.fireEvent.mouseOver(_react.screen.getByText('Menu A'));
      await expectMenuItemsInDocument([['Menu item A.1', false], ['Menu item A.2', false], ['Menu item A.3', false]]);
    });
    it('does not open when a disabled dropdown anchor is clicked', async () => {
      createFullMenuBarWrapper();
      _react.fireEvent.click(_react.screen.getByText('Menu C'));
      await expectMenuItemsInDocument([['Menu item A.1', false], ['Menu item A.2', false], ['Menu item A.3', false]]);
    });
    it('opens menu list when clicked', async () => {
      createFullMenuBarWrapper();
      _react.fireEvent.click(_react.screen.getByText('Menu A'));
      await expectMenuItemsInDocument([['Menu item A.1', true], ['Menu item B.1', false], ['Menu item C.1', false]]);
    });
    it('responds to hover once open', async () => {
      createFullMenuBarWrapper();
      _react.fireEvent.click(_react.screen.getByText('Menu A'));
      _react.fireEvent.mouseOver(_react.screen.getByText('Menu B'));
      await expectMenuItemsInDocument([['Menu item A.1', false], ['Menu item B.1', true], ['Menu item C.1', false]]);
    });
    it('does not open disabled dropdown on hover in hover mode', async () => {
      createFullMenuBarWrapper();
      _react.fireEvent.click(_react.screen.getByText('Menu B'));
      _react.fireEvent.mouseOver(_react.screen.getByText('Menu C'));
      await expectMenuItemsInDocument([['Menu item B.1', true], ['Menu item C.1', false]]);
    });
    it('opens submenus when in hover mode', async () => {
      createFullMenuBarWrapper();
      _react.fireEvent.click(_react.screen.getByText('Menu B'));
      _react.fireEvent.mouseOver(_react.screen.getByText('Menu item B.1'));
      await expectMenuItemsInDocument([['Menu item B.1.1', true], ['Menu item B.1.2', true], ['Menu item B.1.3', true], ['Menu item B.2.1', false], ['Menu item B.2.2', false], ['Menu item B.2.3', false]]);
      _react.fireEvent.mouseOver(_react.screen.getByText('Menu item B.2'));
      await expectMenuItemsInDocument([['Menu item B.1.1', false], ['Menu item B.1.2', false], ['Menu item B.1.3', false], ['Menu item B.2.1', true], ['Menu item B.2.2', true], ['Menu item B.2.3', true]]);
    });
    it('does not open disabled submenus when in hover mode', async () => {
      createFullMenuBarWrapper();
      _react.fireEvent.click(_react.screen.getByText('Menu B'));
      _react.fireEvent.mouseOver(_react.screen.getByText('Menu item B.2'));
      await expectMenuItemsInDocument([['Menu item B.2.1', true], ['Menu item B.2.2', true], ['Menu item B.2.3', true], ['Menu item B.3.1', false], ['Menu item B.3.2', false], ['Menu item B.3.3', false]]);
      _react.fireEvent.mouseOver(_react.screen.getByText('Menu item B.3'));
      await expectMenuItemsInDocument([['Menu item B.2.1', true], ['Menu item B.2.2', true], ['Menu item B.2.3', true], ['Menu item B.3.1', false], ['Menu item B.3.2', false], ['Menu item B.3.3', false]]);
    });
    it('closes when clicking on then document', async () => {
      createFullMenuBarWrapper();
      _react.fireEvent.click(_react.screen.getByText('Menu A'));
      await expectMenuItemsInDocument([['Menu item A.1', true]]);
      _react.fireEvent.click(document);
      await expectMenuItemsInDocument([['Menu item A.1', false]]);
    });
    it('stays open when clicking a open submenu anchor', async () => {
      createFullMenuBarWrapper();
      _react.fireEvent.click(_react.screen.getByText('Menu B'));
      await expectMenuItemsInDocument([['Menu item B.1', true]]);
      _react.fireEvent.mouseOver(_react.screen.getByText('Menu item B.1'));
      await expectMenuItemsInDocument([['Menu item B.1', true], ['Menu item B.1.1', true], ['Menu item B.1.2', true], ['Menu item B.1.3', true]]);
      _react.fireEvent.click(_react.screen.getByText('Menu item B.1'));
      await expectMenuItemsInDocument([['Menu item B.1', true], ['Menu item B.1.1', true], ['Menu item B.1.2', true], ['Menu item B.1.3', true]]);
    });
    it('calls the onClick of the menu item and closes when clicking a menu item', async () => {
      const menuItemOnClickSpy = jest.fn();
      createFullMenuBarWrapper({
        menuItemOnClickSpy
      });
      _react.fireEvent.click(_react.screen.getByText('Menu A'));
      await expectMenuItemsInDocument([['Menu item A.1', true]]);
      _react.fireEvent.click(_react.screen.getByText('Menu item A.1'));
      expect(menuItemOnClickSpy).toHaveBeenCalledTimes(1);
      await expectMenuItemsInDocument([['Menu item A.1', false]]);
    });
    it('calls the onClick of the menu item and closes when clicking a submenu item', async () => {
      const subMenuItemOnClickSpy = jest.fn();
      createFullMenuBarWrapper({
        subMenuItemOnClickSpy
      });
      _react.fireEvent.click(_react.screen.getByText('Menu B'));
      await expectMenuItemsInDocument([['Menu item B.1', true]]);
      _react.fireEvent.mouseOver(_react.screen.getByText('Menu item B.1'));
      await expectMenuItemsInDocument([['Menu item B.1.1', true]]);
      _react.fireEvent.click(_react.screen.getByText('Menu item B.1.1'));
      expect(subMenuItemOnClickSpy).toHaveBeenCalledTimes(1);
      await expectMenuItemsInDocument([['Menu item B.1', false], ['Menu item B.1.1', false], ['Menu item B.1.1', false]]);
    });
  });
});
function createFullMenuBarWrapper() {
  let {
    menuItemOnClickSpy,
    subMenuItemOnClickSpy
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_index.HoverMenuBar, null, /*#__PURE__*/_react2.default.createElement(_index.HoverMenuDropdown, {
    label: "Menu A"
  }, /*#__PURE__*/_react2.default.createElement(_index.HoverMenuList, null, /*#__PURE__*/_react2.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item A.1",
    onClick: menuItemOnClickSpy
  }), /*#__PURE__*/_react2.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item A.2"
  }), /*#__PURE__*/_react2.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item A.3"
  }))), /*#__PURE__*/_react2.default.createElement(_index.HoverMenuDropdown, {
    label: "Menu B"
  }, /*#__PURE__*/_react2.default.createElement(_index.HoverMenuList, null, /*#__PURE__*/_react2.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item B.1"
  }, /*#__PURE__*/_react2.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item B.1.1",
    onClick: subMenuItemOnClickSpy
  }), /*#__PURE__*/_react2.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item B.1.2"
  }), /*#__PURE__*/_react2.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item B.1.3"
  })), /*#__PURE__*/_react2.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item B.2"
  }, /*#__PURE__*/_react2.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item B.2.1"
  }), /*#__PURE__*/_react2.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item B.2.2"
  }), /*#__PURE__*/_react2.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item B.2.3"
  })), /*#__PURE__*/_react2.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item B.3",
    disabled: true
  }, /*#__PURE__*/_react2.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item B.3.1"
  }), /*#__PURE__*/_react2.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item B.3.2"
  }), /*#__PURE__*/_react2.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item B.3.3"
  })))), /*#__PURE__*/_react2.default.createElement(_index.HoverMenuDropdown, {
    label: "Menu C",
    disabled: true
  }, /*#__PURE__*/_react2.default.createElement(_index.HoverMenuList, null, /*#__PURE__*/_react2.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item C.1"
  }), /*#__PURE__*/_react2.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item C.2"
  }), /*#__PURE__*/_react2.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item C.3"
  })))));
}
async function expectMenuItemsInDocument(items) {
  for (const [text, inDocument] of items) {
    if (inDocument) {
      expect(await _react.screen.findByText(text)).toBeInTheDocument();
    } else {
      expect(_react.screen.queryByText(text)).not.toBeInTheDocument();
    }
  }
}