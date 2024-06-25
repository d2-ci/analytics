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

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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