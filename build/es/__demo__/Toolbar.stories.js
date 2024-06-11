import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { HoverMenuBar, HoverMenuDropdown, HoverMenuList, HoverMenuListItem, InterpretationsAndDetailsToggler, Toolbar, ToolbarSidebar, UpdateButton } from '../components/Toolbar/index.js';
function ToolbarWithState() {
  const [isHidden, setIsHidden] = useState(false);
  const [isSidebarShowing, setIsSidebarShowing] = useState(false);
  return /*#__PURE__*/React.createElement(Toolbar, null, /*#__PURE__*/React.createElement(ToolbarSidebar, {
    isHidden: isHidden
  }, /*#__PURE__*/React.createElement("span", null, "Toolbar side bar"), /*#__PURE__*/React.createElement("a", {
    style: {
      paddingLeft: 12,
      textDecoration: 'underline',
      cursor: 'pointer'
    },
    onClick: () => setIsHidden(true)
  }, "click to hide")), /*#__PURE__*/React.createElement(UpdateButton, {
    onClick: () => {}
  }), /*#__PURE__*/React.createElement(HoverMenuBar, null, /*#__PURE__*/React.createElement(HoverMenuDropdown, {
    label: "Menu A"
  }, /*#__PURE__*/React.createElement(HoverMenuList, null, /*#__PURE__*/React.createElement(HoverMenuListItem, {
    label: "Menu item A.1"
  }), /*#__PURE__*/React.createElement(HoverMenuListItem, {
    label: "Menu item A.2"
  }), /*#__PURE__*/React.createElement(HoverMenuListItem, {
    label: "Menu item A.3"
  }))), /*#__PURE__*/React.createElement(HoverMenuDropdown, {
    label: "Menu B"
  }, /*#__PURE__*/React.createElement(HoverMenuList, null, /*#__PURE__*/React.createElement(HoverMenuListItem, {
    label: "Menu item B.1"
  }, /*#__PURE__*/React.createElement(HoverMenuListItem, {
    label: "Menu item B.1.1"
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
  })))), /*#__PURE__*/React.createElement(InterpretationsAndDetailsToggler, {
    isShowing: isSidebarShowing,
    onClick: () => setIsSidebarShowing(current => !current)
  }));
}
storiesOf('Toolbar', module).add('default', () => {
  return /*#__PURE__*/React.createElement(ToolbarWithState, null);
});