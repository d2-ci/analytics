"use strict";

var _react = require("@storybook/react");
var _react2 = _interopRequireWildcard(require("react"));
var _index = require("../components/Toolbar/index.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ToolbarWithState() {
  const [isHidden, setIsHidden] = (0, _react2.useState)(false);
  const [isSidebarShowing, setIsSidebarShowing] = (0, _react2.useState)(false);
  return /*#__PURE__*/_react2.default.createElement(_index.Toolbar, null, /*#__PURE__*/_react2.default.createElement(_index.ToolbarSidebar, {
    isHidden: isHidden
  }, /*#__PURE__*/_react2.default.createElement("span", null, "Toolbar side bar"), /*#__PURE__*/_react2.default.createElement("a", {
    style: {
      paddingLeft: 12,
      textDecoration: 'underline',
      cursor: 'pointer'
    },
    onClick: () => setIsHidden(true)
  }, "click to hide")), /*#__PURE__*/_react2.default.createElement(_index.UpdateButton, {
    onClick: () => {}
  }), /*#__PURE__*/_react2.default.createElement(_index.HoverMenuBar, null, /*#__PURE__*/_react2.default.createElement(_index.HoverMenuDropdown, {
    label: "Menu A"
  }, /*#__PURE__*/_react2.default.createElement(_index.HoverMenuList, null, /*#__PURE__*/_react2.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item A.1"
  }), /*#__PURE__*/_react2.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item A.2"
  }), /*#__PURE__*/_react2.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item A.3"
  }))), /*#__PURE__*/_react2.default.createElement(_index.HoverMenuDropdown, {
    label: "Menu B"
  }, /*#__PURE__*/_react2.default.createElement(_index.HoverMenuList, null, /*#__PURE__*/_react2.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item B.1"
  }, /*#__PURE__*/_react2.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item B.1.1"
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
  })))), /*#__PURE__*/_react2.default.createElement(_index.InterpretationsAndDetailsToggler, {
    isShowing: isSidebarShowing,
    onClick: () => setIsSidebarShowing(current => !current)
  }));
}
(0, _react.storiesOf)('Toolbar', module).add('default', () => {
  return /*#__PURE__*/_react2.default.createElement(ToolbarWithState, null);
});