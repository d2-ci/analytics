"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenameDialog = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _index = _interopRequireDefault(require("../../locales/index.js"));
var _FileMenuStyles = require("./FileMenu.styles.js");
var _utils = require("./utils.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// import { useDataMutation } from '@dhis2/app-runtime'

// const formatPayload = (name, description) => {
//     const payload = [{ op: 'add', path: '/name', value: name }]

//     if (description) {
//         payload.push({
//             op: 'add',
//             path: '/description',
//             value: description,
//         })
//     }

//     return payload
// }

// const getMutation = (type) => ({
//     resource: endpointFromFileType(type),
//     id: ({ id }) => id,
//     type: 'json-patch',
//     data: ({ name, description }) => formatPayload(name, description),
// })

const RenameDialog = _ref => {
  let {
    type,
    object,
    onClose,
    onRename
  } = _ref;
  const [name, setName] = (0, _react.useState)(object.name);
  const [description, setDescription] = (0, _react.useState)(object.description);

  // const mutation = useMemo(() => getMutation(type), [type])
  // const [mutate, { loading }] = useDataMutation(mutation, {
  //     onError: (error) => {
  //         onError(error)
  //         onClose()
  //     },
  //     onComplete: () => {
  //         onRename({ name, description })
  //         onClose()
  //     },
  // })

  const renameObject = () => {
    console.log('jj anly renameObject', name, description);
    onRename({
      name,
      description
    });
    // mutate({
    //     id: object.id,
    //     name,
    //     description,
    // })
  };
  return /*#__PURE__*/_react.default.createElement(_ui.Modal, {
    onClose: onClose,
    dataTest: "file-menu-rename-modal"
  }, /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _FileMenuStyles.modalStyles.__hash
  }, _FileMenuStyles.modalStyles), /*#__PURE__*/_react.default.createElement(_ui.ModalTitle, null, _index.default.t('Rename {{fileType}}', {
    fileType: (0, _utils.labelForFileType)(type)
  })), /*#__PURE__*/_react.default.createElement(_ui.ModalContent, null, /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_FileMenuStyles.modalStyles.__hash}` + " " + "modal-content"
  }, /*#__PURE__*/_react.default.createElement(_ui.InputField, {
    label: _index.default.t('Name')
    // disabled={loading}
    ,
    required: true,
    value: name,
    onChange: _ref2 => {
      let {
        value
      } = _ref2;
      return setName(value);
    },
    dataTest: "file-menu-rename-modal-name"
  }), /*#__PURE__*/_react.default.createElement(_ui.TextAreaField, {
    label: _index.default.t('Description')
    // disabled={loading}
    ,
    value: description,
    rows: 3,
    onChange: _ref3 => {
      let {
        value
      } = _ref3;
      return setDescription(value);
    },
    dataTest: "file-menu-rename-modal-description"
  }))), /*#__PURE__*/_react.default.createElement(_ui.ModalActions, null, /*#__PURE__*/_react.default.createElement(_ui.ButtonStrip, null, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    onClick: onClose
    // disabled={loading}
    ,
    secondary: true,
    dataTest: "file-menu-rename-modal-cancel"
  }, _index.default.t('Cancel')), /*#__PURE__*/_react.default.createElement(_ui.Button, {
    onClick: renameObject
    // disabled={loading}
    ,
    primary: true,
    dataTest: "file-menu-rename-modal-rename"
  }, _index.default.t('Rename')))));
};
exports.RenameDialog = RenameDialog;
RenameDialog.propTypes = {
  object: _propTypes.default.shape({
    id: _propTypes.default.string.isRequired,
    description: _propTypes.default.string,
    name: _propTypes.default.string
  }),
  type: _propTypes.default.oneOf(_utils.supportedFileTypes),
  onClose: _propTypes.default.func,
  onRename: _propTypes.default.func
};