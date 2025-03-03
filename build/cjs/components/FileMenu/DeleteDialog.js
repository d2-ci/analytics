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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const getMutation = type => ({
  resource: (0, _utils.endpointFromFileType)(type),
  id: _ref => {
    let {
      id
    } = _ref;
    return id;
  },
  type: 'delete'
});
const DeleteDialog = _ref2 => {
  let {
    type,
    id,
    onClose,
    onDelete,
    onError
  } = _ref2;
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