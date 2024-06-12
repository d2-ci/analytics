"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenameDialog = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _appRuntime = require("@dhis2/app-runtime");

var _ui = require("@dhis2/ui");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _index = _interopRequireDefault(require("../../locales/index.js"));

var _FileMenuStyles = require("./FileMenu.styles.js");

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
  type: 'update',
  partial: true,
  data: _ref2 => {
    let {
      name,
      description
    } = _ref2;
    return {
      name,
      description
    };
  }
});

const RenameDialog = _ref3 => {
  let {
    type,
    object,
    onClose,
    onRename,
    onError
  } = _ref3;
  const [name, setName] = (0, _react.useState)(object.name);
  const [description, setDescription] = (0, _react.useState)(object.description);
  const mutation = (0, _react.useMemo)(() => getMutation(type), [type]);
  const [mutate, {
    loading
  }] = (0, _appRuntime.useDataMutation)(mutation, {
    onError: error => {
      onError(error);
      onClose();
    },
    onComplete: () => {
      onRename({
        name,
        description
      });
      onClose();
    }
  });

  const renameObject = () => {
    mutate({
      id: object.id,
      name,
      description
    });
  };

  return /*#__PURE__*/_react.default.createElement(_ui.Modal, {
    onClose: onClose
  }, /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _FileMenuStyles.modalStyles.__hash
  }, _FileMenuStyles.modalStyles), /*#__PURE__*/_react.default.createElement(_ui.ModalTitle, null, _index.default.t('Rename {{fileType}}', {
    fileType: (0, _utils.labelForFileType)(type)
  })), /*#__PURE__*/_react.default.createElement(_ui.ModalContent, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "jsx-".concat(_FileMenuStyles.modalStyles.__hash) + " " + "modal-content"
  }, /*#__PURE__*/_react.default.createElement(_ui.InputField, {
    label: _index.default.t('Name'),
    disabled: loading,
    required: true,
    value: name,
    onChange: _ref4 => {
      let {
        value
      } = _ref4;
      return setName(value);
    }
  }), /*#__PURE__*/_react.default.createElement(_ui.TextAreaField, {
    label: _index.default.t('Description'),
    disabled: loading,
    value: description,
    rows: 3,
    onChange: _ref5 => {
      let {
        value
      } = _ref5;
      return setDescription(value);
    }
  }))), /*#__PURE__*/_react.default.createElement(_ui.ModalActions, null, /*#__PURE__*/_react.default.createElement(_ui.ButtonStrip, null, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    onClick: onClose,
    disabled: loading,
    secondary: true
  }, _index.default.t('Cancel')), /*#__PURE__*/_react.default.createElement(_ui.Button, {
    onClick: renameObject,
    disabled: loading,
    primary: true
  }, _index.default.t('Rename')))));
};

exports.RenameDialog = RenameDialog;
RenameDialog.propTypes = {
  id: _propTypes.default.string,
  object: _propTypes.default.shape({
    id: _propTypes.default.string.isRequired,
    description: _propTypes.default.string,
    name: _propTypes.default.string
  }),
  type: _propTypes.default.oneOf(_utils.supportedFileTypes),
  onClose: _propTypes.default.func,
  onError: _propTypes.default.func,
  onRename: _propTypes.default.func
};