"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _index = require("../components/Toolbar/index.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function ToolbarWithState() {
  const [isHidden, setIsHidden] = (0, _react.useState)(false);
  const [isSidebarShowing, setIsSidebarShowing] = (0, _react.useState)(false);
  return /*#__PURE__*/_react.default.createElement(_index.Toolbar, null, /*#__PURE__*/_react.default.createElement(_index.ToolbarSidebar, {
    isHidden: isHidden
  }, /*#__PURE__*/_react.default.createElement("span", null, "Toolbar side bar"), /*#__PURE__*/_react.default.createElement("a", {
    style: {
      paddingLeft: 12,
      textDecoration: 'underline',
      cursor: 'pointer'
    },
    onClick: () => setIsHidden(true)
  }, "click to hide")), /*#__PURE__*/_react.default.createElement(_index.UpdateButton, {
    onClick: () => {}
  }), /*#__PURE__*/_react.default.createElement(_index.HoverMenuBar, null, /*#__PURE__*/_react.default.createElement(_index.HoverMenuDropdown, {
    label: "Menu A"
  }, /*#__PURE__*/_react.default.createElement(_index.HoverMenuList, null, /*#__PURE__*/_react.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item A.1"
  }), /*#__PURE__*/_react.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item A.2"
  }), /*#__PURE__*/_react.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item A.3"
  }))), /*#__PURE__*/_react.default.createElement(_index.HoverMenuDropdown, {
    label: "Menu B"
  }, /*#__PURE__*/_react.default.createElement(_index.HoverMenuList, null, /*#__PURE__*/_react.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item B.1"
  }, /*#__PURE__*/_react.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item B.1.1"
  }), /*#__PURE__*/_react.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item B.1.2"
  }), /*#__PURE__*/_react.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item B.1.3"
  })), /*#__PURE__*/_react.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item B.2"
  }, /*#__PURE__*/_react.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item B.2.1"
  }), /*#__PURE__*/_react.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item B.2.2"
  }), /*#__PURE__*/_react.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item B.2.3"
  })), /*#__PURE__*/_react.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item B.3",
    disabled: true
  }, /*#__PURE__*/_react.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item B.3.1"
  }), /*#__PURE__*/_react.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item B.3.2"
  }), /*#__PURE__*/_react.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item B.3.3"
  })))), /*#__PURE__*/_react.default.createElement(_index.HoverMenuDropdown, {
    label: "Menu C",
    disabled: true
  }, /*#__PURE__*/_react.default.createElement(_index.HoverMenuList, null, /*#__PURE__*/_react.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item C.1"
  }), /*#__PURE__*/_react.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item C.2"
  }), /*#__PURE__*/_react.default.createElement(_index.HoverMenuListItem, {
    label: "Menu item C.3"
  })))), /*#__PURE__*/_react.default.createElement(_index.InterpretationsAndDetailsToggler, {
    isShowing: isSidebarShowing,
    onClick: () => setIsSidebarShowing(current => !current)
  }));
}
var _default = exports.default = {
  title: 'Toolbar'
};
const Default = () => {
  return /*#__PURE__*/_react.default.createElement(ToolbarWithState, null);
};
exports.Default = Default;
Default.story = {
  name: 'default'
};