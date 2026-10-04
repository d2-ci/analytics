"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SaveAsDialog = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _index = _interopRequireDefault(require("../../locales/index.js"));
var _FileMenuStyles = require("./FileMenu.styles.js");
var _utils = require("./utils.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const NAME_MAXLENGTH = 230;
const SaveAsDialog = ({
  type,
  object,
  onClose,
  onSaveAs
}) => {
  const [name, setName] = (0, _react.useState)(object !== null && object !== void 0 && object.displayName || object !== null && object !== void 0 && object.name ? _index.default.t('{{- objectName}} (copy)', {
    objectName: object.name
  }) : '');
  const [description, setDescription] = (0, _react.useState)(object === null || object === void 0 ? void 0 : object.description);

  // the actual API request is done in the app
  const saveObjectAs = () => {
    onSaveAs({
      name,
      description
    });
    onClose();
  };
  return /*#__PURE__*/_react.default.createElement(_ui.Modal, {
    onClose: onClose,
    dataTest: "file-menu-saveas-modal"
  }, /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _FileMenuStyles.modalStyles.__hash
  }, _FileMenuStyles.modalStyles), /*#__PURE__*/_react.default.createElement(_ui.ModalTitle, null, _index.default.t('Save {{fileType}} as', {
    fileType: (0, _utils.labelForFileType)(type)
  })), /*#__PURE__*/_react.default.createElement(_ui.ModalContent, null, /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_FileMenuStyles.modalStyles.__hash}` + " " + "modal-content"
  }, /*#__PURE__*/_react.default.createElement(_ui.InputField, {
    label: _index.default.t('Name'),
    value: name,
    onChange: ({
      value
    }) => setName(value.substring(0, NAME_MAXLENGTH)),
    dataTest: "file-menu-saveas-modal-name"
  }), /*#__PURE__*/_react.default.createElement(_ui.TextAreaField, {
    label: _index.default.t('Description'),
    value: description,
    rows: 3,
    onChange: ({
      value
    }) => setDescription(value),
    dataTest: "file-menu-saveas-modal-description"
  }))), /*#__PURE__*/_react.default.createElement(_ui.ModalActions, null, /*#__PURE__*/_react.default.createElement(_ui.ButtonStrip, null, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    onClick: onClose,
    secondary: true,
    dataTest: "file-menu-saveas-modal-cancel"
  }, _index.default.t('Cancel')), /*#__PURE__*/_react.default.createElement(_ui.Button, {
    onClick: saveObjectAs,
    primary: true,
    dataTest: "file-menu-saveas-modal-save"
  }, _index.default.t('Save')))));
};
exports.SaveAsDialog = SaveAsDialog;
SaveAsDialog.propTypes = {
  object: _propTypes.default.shape({
    description: _propTypes.default.string,
    displayName: _propTypes.default.string,
    name: _propTypes.default.string
  }),
  type: _propTypes.default.oneOf(_utils.supportedFileTypes),
  onClose: _propTypes.default.func,
  onSaveAs: _propTypes.default.func
};