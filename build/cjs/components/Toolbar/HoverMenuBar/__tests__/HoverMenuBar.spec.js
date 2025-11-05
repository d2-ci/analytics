"use strict";

var _react = require("@testing-library/react");
var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));
var _react2 = _interopRequireDefault(require("react"));
var _index = require("../index.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
describe('<HoverMenuBar/>', () => {
  test('renders children', () => {
    const childNode = 'text node';
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_index.HoverMenuBar, null, childNode));
    expect(_react.screen.getByText(childNode)).toBeInTheDocument();
  });
  test('accepts a `dataTest` prop', () => {
    const dataTest = 'test';
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_index.HoverMenuBar, {
      dataTest: dataTest
    }, "children"));
    expect(_react.screen.getByTestId(dataTest)).toBeInTheDocument();
  });
  describe('mouse interactions', () => {
    test('does not open on hover before a dropdown anchor is clicked', async () => {
      const user = _userEvent.default.setup();
      createFullMenuBarWrapper();
      await user.hover(_react.screen.getByText('Menu A'));
      await expectMenuItemsInDocument([['Menu item A.1', false], ['Menu item A.2', false], ['Menu item A.3', false]]);
    });
    test('does not open when a disabled dropdown anchor is clicked', async () => {
      const user = _userEvent.default.setup();
      createFullMenuBarWrapper();
      await user.click(_react.screen.getByText('Menu C'));
      await expectMenuItemsInDocument([['Menu item A.1', false], ['Menu item A.2', false], ['Menu item A.3', false]]);
    });
    test('opens menu list when clicked', async () => {
      const user = _userEvent.default.setup();
      createFullMenuBarWrapper();
      await user.click(_react.screen.getByText('Menu A'));
      await expectMenuItemsInDocument([['Menu item A.1', true], ['Menu item B.1', false], ['Menu item C.1', false]]);
    });
    test('responds to hover once open', async () => {
      const user = _userEvent.default.setup();
      createFullMenuBarWrapper();
      await user.click(_react.screen.getByText('Menu A'));
      await user.hover(_react.screen.getByText('Menu B'));
      await expectMenuItemsInDocument([['Menu item A.1', false], ['Menu item B.1', true], ['Menu item C.1', false]]);
    });
    test('does not open disabled dropdown on hover in hover mode', async () => {
      const user = _userEvent.default.setup();
      createFullMenuBarWrapper();
      await user.click(_react.screen.getByText('Menu B'));
      await user.hover(_react.screen.getByText('Menu C'));
      await expectMenuItemsInDocument([['Menu item B.1', true], ['Menu item C.1', false]]);
    });
    test('opens submenus when in hover mode', async () => {
      const user = _userEvent.default.setup();
      createFullMenuBarWrapper();
      await user.click(_react.screen.getByText('Menu B'));
      await user.hover(_react.screen.getByText('Menu item B.1'));
      await expectMenuItemsInDocument([['Menu item B.1.1', true], ['Menu item B.1.2', true], ['Menu item B.1.3', true], ['Menu item B.2.1', false], ['Menu item B.2.2', false], ['Menu item B.2.3', false]]);
      await user.hover(_react.screen.getByText('Menu item B.2'));
      await expectMenuItemsInDocument([['Menu item B.1.1', false], ['Menu item B.1.2', false], ['Menu item B.1.3', false], ['Menu item B.2.1', true], ['Menu item B.2.2', true], ['Menu item B.2.3', true]]);
    });
    test('does not open disabled submenus when in hover mode', async () => {
      const user = _userEvent.default.setup();
      createFullMenuBarWrapper();
      await user.click(_react.screen.getByText('Menu B'));
      await user.hover(_react.screen.getByText('Menu item B.2'));
      await expectMenuItemsInDocument([['Menu item B.2.1', true], ['Menu item B.2.2', true], ['Menu item B.2.3', true], ['Menu item B.3.1', false], ['Menu item B.3.2', false], ['Menu item B.3.3', false]]);
      await user.hover(_react.screen.getByText('Menu item B.3'));
      await expectMenuItemsInDocument([['Menu item B.2.1', true], ['Menu item B.2.2', true], ['Menu item B.2.3', true], ['Menu item B.3.1', false], ['Menu item B.3.2', false], ['Menu item B.3.3', false]]);
    });
    test('closes when clicking on then document', async () => {
      const user = _userEvent.default.setup();
      createFullMenuBarWrapper();
      await user.click(_react.screen.getByText('Menu A'));
      await expectMenuItemsInDocument([['Menu item A.1', true]]);
      await user.click(document.body);
      await expectMenuItemsInDocument([['Menu item A.1', false]]);
    });
    test('stays open when clicking a open submenu anchor', async () => {
      const user = _userEvent.default.setup();
      createFullMenuBarWrapper();
      await user.click(_react.screen.getByText('Menu B'));
      await expectMenuItemsInDocument([['Menu item B.1', true]]);
      await user.hover(_react.screen.getByText('Menu item B.1'));
      await expectMenuItemsInDocument([['Menu item B.1', true], ['Menu item B.1.1', true], ['Menu item B.1.2', true], ['Menu item B.1.3', true]]);
      await user.click(_react.screen.getByText('Menu item B.1'));
      await expectMenuItemsInDocument([['Menu item B.1', true], ['Menu item B.1.1', true], ['Menu item B.1.2', true], ['Menu item B.1.3', true]]);
    });
    test('calls the onClick of the menu item and closes when clicking a menu item', async () => {
      const user = _userEvent.default.setup();
      const menuItemOnClickSpy = jest.fn();
      createFullMenuBarWrapper({
        menuItemOnClickSpy
      });
      await user.click(_react.screen.getByText('Menu A'));
      await expectMenuItemsInDocument([['Menu item A.1', true]]);
      await user.click(_react.screen.getByText('Menu item A.1'));
      expect(menuItemOnClickSpy).toHaveBeenCalledTimes(1);
      await expectMenuItemsInDocument([['Menu item A.1', false]]);
    });
    test('calls the onClick of the menu item and closes when clicking a submenu item', async () => {
      const user = _userEvent.default.setup();
      const subMenuItemOnClickSpy = jest.fn();
      createFullMenuBarWrapper({
        subMenuItemOnClickSpy
      });
      await user.click(_react.screen.getByText('Menu B'));
      await expectMenuItemsInDocument([['Menu item B.1', true]]);
      await user.hover(_react.screen.getByText('Menu item B.1'));
      await expectMenuItemsInDocument([['Menu item B.1.1', true]]);
      await user.click(_react.screen.getByText('Menu item B.1.1'));
      expect(subMenuItemOnClickSpy).toHaveBeenCalledTimes(1);
      await expectMenuItemsInDocument([['Menu item B.1', false], ['Menu item B.1.1', false], ['Menu item B.1.1', false]]);
    });
  });
});
function createFullMenuBarWrapper({
  menuItemOnClickSpy,
  subMenuItemOnClickSpy
} = {}) {
  return (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_index.HoverMenuBar, null, /*#__PURE__*/_react2.default.createElement(_index.HoverMenuDropdown, {
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