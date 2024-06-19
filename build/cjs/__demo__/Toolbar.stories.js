"use strict";

var _react = require("@storybook/react");
var _react2 = _interopRequireWildcard(require("react"));
var _index = require("../components/Toolbar/index.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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