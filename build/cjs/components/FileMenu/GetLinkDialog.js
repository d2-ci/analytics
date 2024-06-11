"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetLinkDialog = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _appRuntime = require("@dhis2/app-runtime");

var _ui = require("@dhis2/ui");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../../locales/index.js"));

var _GetLinkDialogStyles = require("./GetLinkDialog.styles.js");

var _utils = require("./utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GetLinkDialog = _ref => {
  let {
    type,
    id,
    onClose
  } = _ref;
  const {
    baseUrl
  } = (0, _appRuntime.useConfig)(); // TODO simply use href from the visualization object?

  const appBaseUrl = new URL(baseUrl, self.location.href);
  const appUrl = new URL((0, _utils.appPathFor)(type, id), appBaseUrl);
  return /*#__PURE__*/_react.default.createElement(_ui.Modal, {
    onClose: onClose
  }, /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _GetLinkDialogStyles.styles.__hash
  }, _GetLinkDialogStyles.styles), /*#__PURE__*/_react.default.createElement(_ui.ModalContent, null, /*#__PURE__*/_react.default.createElement("p", {
    className: "jsx-".concat(_GetLinkDialogStyles.styles.__hash)
  }, _index.default.t('Open in this app')), /*#__PURE__*/_react.default.createElement("div", {
    className: "jsx-".concat(_GetLinkDialogStyles.styles.__hash) + " " + "link-container"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: appUrl.href,
    className: "jsx-".concat(_GetLinkDialogStyles.styles.__hash)
  }, appUrl.href), /*#__PURE__*/_react.default.createElement(_ui.Button, {
    icon: /*#__PURE__*/_react.default.createElement(_ui.IconCopy24, null),
    small: true,
    onClick: () => navigator.clipboard.writeText(appUrl.href)
  }))), /*#__PURE__*/_react.default.createElement(_ui.ModalActions, null, /*#__PURE__*/_react.default.createElement(_ui.ButtonStrip, null, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    onClick: onClose,
    secondary: true
  }, _index.default.t('Close')))));
};

exports.GetLinkDialog = GetLinkDialog;
GetLinkDialog.propTypes = {
  id: _propTypes.default.string,
  type: _propTypes.default.oneOf(_utils.supportedFileTypes),
  onClose: _propTypes.default.func
};