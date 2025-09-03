"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteDialog = void 0;
var _appRuntime = require("@dhis2/app-runtime");
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _index = _interopRequireDefault(require("../../locales/index.js"));
var _utils = require("./utils.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const getMutation = type => ({
  resource: (0, _utils.endpointFromFileType)(type),
  id: ({
    id
  }) => id,
  type: 'delete'
});
const DeleteDialog = ({
  type,
  id,
  onClose,
  onDelete,
  onError
}) => {
  const mutation = (0, _react.useMemo)(() => getMutation(type), []);
  const [mutate] = (0, _appRuntime.useDataMutation)(mutation, {
    variables: {
      id
    },
    onError: error => {
      onError(error);
      onClose();
    },
    onComplete: () => {
      onDelete();
    }
  });
  return /*#__PURE__*/_react.default.createElement(_ui.Modal, {
    onClose: onClose,
    dataTest: "file-menu-delete-modal"
  }, /*#__PURE__*/_react.default.createElement(_ui.ModalTitle, null, _index.default.t('Delete {{fileType}}', {
    fileType: (0, _utils.labelForFileType)(type)
  })), /*#__PURE__*/_react.default.createElement(_ui.ModalContent, null, _index.default.t('This {{fileType}} and related interpretations will be deleted. Continue?', {
    fileType: (0, _utils.labelForFileType)(type)
  })), /*#__PURE__*/_react.default.createElement(_ui.ModalActions, null, /*#__PURE__*/_react.default.createElement(_ui.ButtonStrip, null, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    onClick: onClose,
    secondary: true,
    dataTest: "file-menu-delete-modal-cancel"
  }, _index.default.t('Cancel')), /*#__PURE__*/_react.default.createElement(_ui.Button, {
    onClick: mutate,
    destructive: true,
    dataTest: "file-menu-delete-modal-delete"
  }, _index.default.t('Delete')))));
};
exports.DeleteDialog = DeleteDialog;
DeleteDialog.propTypes = {
  id: _propTypes.default.string,
  type: _propTypes.default.oneOf(_utils.supportedFileTypes),
  onClose: _propTypes.default.func,
  onDelete: _propTypes.default.func,
  onError: _propTypes.default.func
};