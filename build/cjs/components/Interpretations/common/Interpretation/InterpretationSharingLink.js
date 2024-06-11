"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InterpretationSharingLink = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const InterpretationSharingLink = _ref => {
  let {
    type,
    id
  } = _ref;
  const [showSharingDialog, setShowSharingDialog] = (0, _react.useState)(false);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: _style.default.dynamic([["3990725326", [_ui.spacers.dp4, _ui.spacers.dp8, _ui.colors.grey800]]]) + " " + "container"
  }, /*#__PURE__*/_react.default.createElement("span", {
    onClick: () => setShowSharingDialog(true),
    className: _style.default.dynamic([["3990725326", [_ui.spacers.dp4, _ui.spacers.dp8, _ui.colors.grey800]]]) + " " + "link"
  }, _d2I18n.default.t('Manage sharing'))), showSharingDialog && /*#__PURE__*/_react.default.createElement(_ui.SharingDialog, {
    open: true,
    type: type,
    id: id,
    onClose: () => setShowSharingDialog(false)
  }), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "3990725326",
    dynamic: [_ui.spacers.dp4, _ui.spacers.dp8, _ui.colors.grey800]
  }, [`.container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;gap:${_ui.spacers.dp4};margin-top:${_ui.spacers.dp8};font-size:13px;color:${_ui.colors.grey800};cursor:pointer;}`, ".link.__jsx-style-dynamic-selector{-webkit-text-decoration:underline;text-decoration:underline;}"]));
};
exports.InterpretationSharingLink = InterpretationSharingLink;
InterpretationSharingLink.propTypes = {
  id: _propTypes.default.string,
  type: _propTypes.default.string
};