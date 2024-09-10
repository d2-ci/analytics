import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import React from 'react';
import { HoverMenuBar, HoverMenuDropdown, HoverMenuList, HoverMenuListItem } from '../index.js';
describe('<HoverMenuBar/>', () => {
  it('renders children', () => {
    const childNode = 'text node';
    const wrapper = shallow( /*#__PURE__*/React.createElement(HoverMenuBar, null, childNode));
    expect(wrapper.containsMatchingElement(childNode)).toBe(true);
  });
  it('accepts a `dataTest` prop', () => {
    const dataTest = 'test';
    const wrapper = shallow( /*#__PURE__*/React.createElement(HoverMenuBar, {
      dataTest: dataTest
    }, "children"));
    expect(wrapper.find('div').prop('data-test')).toBe(dataTest);
  });
  describe('mouse interactions', () => {
    it('does not open on hover before a dropdown anchor is clicked', async () => {
      createFullMenuBarWrapper();
      fireEvent.mouseOver(screen.getByText('Menu A'));
      await expectMenuItemsInDocument([['Menu item A.1', false], ['Menu item A.2', false], ['Menu item A.3', false]]);
    });
    it('does not open when a disabled dropdown anchor is clicked', async () => {
      createFullMenuBarWrapper();
      fireEvent.click(screen.getByText('Menu C'));
      await expectMenuItemsInDocument([['Menu item A.1', false], ['Menu item A.2', false], ['Menu item A.3', false]]);
    });
    it('opens menu list when clicked', async () => {
      createFullMenuBarWrapper();
      fireEvent.click(screen.getByText('Menu A'));
      await expectMenuItemsInDocument([['Menu item A.1', true], ['Menu item B.1', false], ['Menu item C.1', false]]);
    });
    it('responds to hover once open', async () => {
      createFullMenuBarWrapper();
      fireEvent.click(screen.getByText('Menu A'));
      fireEvent.mouseOver(screen.getByText('Menu B'));
      await expectMenuItemsInDocument([['Menu item A.1', false], ['Menu item B.1', true], ['Menu item C.1', false]]);
    });
    it('does not open disabled dropdown on hover in hover mode', async () => {
      createFullMenuBarWrapper();
      fireEvent.click(screen.getByText('Menu B'));
      fireEvent.mouseOver(screen.getByText('Menu C'));
      await expectMenuItemsInDocument([['Menu item B.1', true], ['Menu item C.1', false]]);
    });
    it('opens submenus when in hover mode', async () => {
      createFullMenuBarWrapper();
      fireEvent.click(screen.getByText('Menu B'));
      fireEvent.mouseOver(screen.getByText('Menu item B.1'));
      await expectMenuItemsInDocument([['Menu item B.1.1', true], ['Menu item B.1.2', true], ['Menu item B.1.3', true], ['Menu item B.2.1', false], ['Menu item B.2.2', false], ['Menu item B.2.3', false]]);
      fireEvent.mouseOver(screen.getByText('Menu item B.2'));
      await expectMenuItemsInDocument([['Menu item B.1.1', false], ['Menu item B.1.2', false], ['Menu item B.1.3', false], ['Menu item B.2.1', true], ['Menu item B.2.2', true], ['Menu item B.2.3', true]]);
    });
    it('does not open disabled submenus when in hover mode', async () => {
      createFullMenuBarWrapper();
      fireEvent.click(screen.getByText('Menu B'));
      fireEvent.mouseOver(screen.getByText('Menu item B.2'));
      await expectMenuItemsInDocument([['Menu item B.2.1', true], ['Menu item B.2.2', true], ['Menu item B.2.3', true], ['Menu item B.3.1', false], ['Menu item B.3.2', false], ['Menu item B.3.3', false]]);
      fireEvent.mouseOver(screen.getByText('Menu item B.3'));
      await expectMenuItemsInDocument([['Menu item B.2.1', true], ['Menu item B.2.2', true], ['Menu item B.2.3', true], ['Menu item B.3.1', false], ['Menu item B.3.2', false], ['Menu item B.3.3', false]]);
    });
    it('closes when clicking on then document', async () => {
      createFullMenuBarWrapper();
      fireEvent.click(screen.getByText('Menu A'));
      await expectMenuItemsInDocument([['Menu item A.1', true]]);
      fireEvent.click(document);
      await expectMenuItemsInDocument([['Menu item A.1', false]]);
    });
    it('stays open when clicking a open submenu anchor', async () => {
      createFullMenuBarWrapper();
      fireEvent.click(screen.getByText('Menu B'));
      await expectMenuItemsInDocument([['Menu item B.1', true]]);
      fireEvent.mouseOver(screen.getByText('Menu item B.1'));
      await expectMenuItemsInDocument([['Menu item B.1', true], ['Menu item B.1.1', true], ['Menu item B.1.2', true], ['Menu item B.1.3', true]]);
      fireEvent.click(screen.getByText('Menu item B.1'));
      await expectMenuItemsInDocument([['Menu item B.1', true], ['Menu item B.1.1', true], ['Menu item B.1.2', true], ['Menu item B.1.3', true]]);
    });
    it('calls the onClick of the menu item and closes when clicking a menu item', async () => {
      const menuItemOnClickSpy = jest.fn();
      createFullMenuBarWrapper({
        menuItemOnClickSpy
      });
      fireEvent.click(screen.getByText('Menu A'));
      await expectMenuItemsInDocument([['Menu item A.1', true]]);
      fireEvent.click(screen.getByText('Menu item A.1'));
      expect(menuItemOnClickSpy).toHaveBeenCalledTimes(1);
      await expectMenuItemsInDocument([['Menu item A.1', false]]);
    });
    it('calls the onClick of the menu item and closes when clicking a submenu item', async () => {
      const subMenuItemOnClickSpy = jest.fn();
      createFullMenuBarWrapper({
        subMenuItemOnClickSpy
      });
      fireEvent.click(screen.getByText('Menu B'));
      await expectMenuItemsInDocument([['Menu item B.1', true]]);
      fireEvent.mouseOver(screen.getByText('Menu item B.1'));
      await expectMenuItemsInDocument([['Menu item B.1.1', true]]);
      fireEvent.click(screen.getByText('Menu item B.1.1'));
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
  return render( /*#__PURE__*/React.createElement(HoverMenuBar, null, /*#__PURE__*/React.createElement(HoverMenuDropdown, {
    label: "Menu A"
  }, /*#__PURE__*/React.createElement(HoverMenuList, null, /*#__PURE__*/React.createElement(HoverMenuListItem, {
    label: "Menu item A.1",
    onClick: menuItemOnClickSpy
  }), /*#__PURE__*/React.createElement(HoverMenuListItem, {
    label: "Menu item A.2"
  }), /*#__PURE__*/React.createElement(HoverMenuListItem, {
    label: "Menu item A.3"
  }))), /*#__PURE__*/React.createElement(HoverMenuDropdown, {
    label: "Menu B"
  }, /*#__PURE__*/React.createElement(HoverMenuList, null, /*#__PURE__*/React.createElement(HoverMenuListItem, {
    label: "Menu item B.1"
  }, /*#__PURE__*/React.createElement(HoverMenuListItem, {
    label: "Menu item B.1.1",
    onClick: subMenuItemOnClickSpy
  }), /*#__PURE__*/React.createElement(HoverMenuListItem, {
    label: "Menu item B.1.2"
  }), /*#__PURE__*/React.createElement(HoverMenuListItem, {
    label: "Menu item B.1.3"
  })), /*#__PURE__*/React.createElement(HoverMenuListItem, {
    label: "Menu item B.2"
  }, /*#__PURE__*/React.createElement(HoverMenuListItem, {
    label: "Menu item B.2.1"
  }), /*#__PURE__*/React.createElement(HoverMenuListItem, {
    label: "Menu item B.2.2"
  }), /*#__PURE__*/React.createElement(HoverMenuListItem, {
    label: "Menu item B.2.3"
  })), /*#__PURE__*/React.createElement(HoverMenuListItem, {
    label: "Menu item B.3",
    disabled: true
  }, /*#__PURE__*/React.createElement(HoverMenuListItem, {
    label: "Menu item B.3.1"
  }), /*#__PURE__*/React.createElement(HoverMenuListItem, {
    label: "Menu item B.3.2"
  }), /*#__PURE__*/React.createElement(HoverMenuListItem, {
    label: "Menu item B.3.3"
  })))), /*#__PURE__*/React.createElement(HoverMenuDropdown, {
    label: "Menu C",
    disabled: true
  }, /*#__PURE__*/React.createElement(HoverMenuList, null, /*#__PURE__*/React.createElement(HoverMenuListItem, {
    label: "Menu item C.1"
  }), /*#__PURE__*/React.createElement(HoverMenuListItem, {
    label: "Menu item C.2"
  }), /*#__PURE__*/React.createElement(HoverMenuListItem, {
    label: "Menu item C.3"
  })))));
}
async function expectMenuItemsInDocument(items) {
  for (const [text, inDocument] of items) {
    if (inDocument) {
      expect(await screen.findByText(text)).toBeInTheDocument();
    } else {
      expect(screen.queryByText(text)).not.toBeInTheDocument();
    }
  }
}