"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FileMenu = void 0;
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _index = _interopRequireDefault(require("../../locales/index.js"));
var _OpenFileDialog = require("../OpenFileDialog/OpenFileDialog.js");
var _index2 = require("../Toolbar/index.js");
var _index3 = require("../TranslationDialog/index.js");
var _DeleteDialog = require("./DeleteDialog.js");
var _GetLinkDialog = require("./GetLinkDialog.js");
var _RenameDialog = require("./RenameDialog.js");
var _SaveAsDialog = require("./SaveAsDialog.js");
var _utils = require("./utils.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const FileMenu = _ref => {
  var _fileObject$access, _fileObject$access2, _fileObject$access3, _fileObject$access4, _fileObject$access5, _fileObject$access6, _fileObject$access7, _fileObject$access8, _fileObject$access9, _fileObject$access10;
  let {
    currentUser,
    defaultFilterVisType,
    fileType,
    fileObject,
    filterVisTypes,
    onNew,
    onOpen,
    onSave,
    onSaveAs,
    onRename,
    onShare,
    onDelete,
    onError,
    onTranslate
  } = _ref;
  const [currentDialog, setCurrentDialog] = (0, _react.useState)(null);
  const onMenuItemClick = dialogToOpen => () => {
    setCurrentDialog(dialogToOpen);
  };
  const onDialogClose = () => setCurrentDialog(null);
  const onDeleteConfirm = () => {
    // The dialog must be closed before calling the callback
    // otherwise the fileObject is changed to null before the
    // dialog is closed causing a crash in renderDialog() below
    // due to fileObject.id not being available
    onDialogClose();
    onDelete();
  };
  const renderDialog = () => {
    switch (currentDialog) {
      case 'rename':
        return /*#__PURE__*/_react.default.createElement(_RenameDialog.RenameDialog, {
          type: fileType,
          object: fileObject,
          onClose: onDialogClose,
          onRename: onRename,
          onError: onError
        });
      case 'translate':
        return /*#__PURE__*/_react.default.createElement(_index3.TranslationDialog, {
          objectToTranslate: fileObject,
          fieldsToTranslate: ['name', 'description'],
          onClose: onDialogClose,
          onTranslationSaved: () => {
            onDialogClose();
            onTranslate();
          }
        });
      case 'sharing':
        return /*#__PURE__*/_react.default.createElement(_ui.SharingDialog, {
          type: fileType,
          id: fileObject.id,
          onClose: onDialogClose,
          onSave: onShare
        });
      case 'getlink':
        return /*#__PURE__*/_react.default.createElement(_GetLinkDialog.GetLinkDialog, {
          type: fileType,
          id: fileObject.id,
          onClose: onDialogClose
        });
      case 'delete':
        return /*#__PURE__*/_react.default.createElement(_DeleteDialog.DeleteDialog, {
          type: fileType,
          id: fileObject.id,
          onDelete: onDeleteConfirm,
          onError: onError,
          onClose: onDialogClose
        });
      case 'saveas':
        return /*#__PURE__*/_react.default.createElement(_SaveAsDialog.SaveAsDialog, {
          type: fileType,
          object: fileObject,
          onSaveAs: onSaveAs || Function.prototype,
          onClose: onDialogClose
        });
      default:
        return null;
    }
  };
  const iconActiveColor = _ui.colors.grey700;
  const iconInactiveColor = _ui.colors.grey500;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_OpenFileDialog.OpenFileDialog, {
    open: currentDialog === 'open',
    type: fileType,
    filterVisTypes: filterVisTypes,
    defaultFilterVisType: defaultFilterVisType,
    onClose: onDialogClose,
    onFileSelect: id => {
      onOpen(id);
      onDialogClose();
    },
    onNew: onNew,
    currentUser: currentUser
  }), /*#__PURE__*/_react.default.createElement(_index2.HoverMenuDropdown, {
    label: _index.default.t('File')
  }, /*#__PURE__*/_react.default.createElement(_index2.HoverMenuList, {
    dataTest: "file-menu-container"
  }, /*#__PURE__*/_react.default.createElement(_index2.HoverMenuListItem, {
    label: _index.default.t('New'),
    icon: /*#__PURE__*/_react.default.createElement(_ui.IconAdd24, {
      color: iconActiveColor
    }),
    onClick: onNew,
    dataTest: "file-menu-new"
  }), /*#__PURE__*/_react.default.createElement(_ui.MenuDivider, {
    dense: true
  }), /*#__PURE__*/_react.default.createElement(_index2.HoverMenuListItem, {
    label: _index.default.t('Open…'),
    icon: /*#__PURE__*/_react.default.createElement(_ui.IconLaunch24, {
      color: iconActiveColor
    }),
    onClick: onMenuItemClick('open'),
    dataTest: "file-menu-open"
  }), /*#__PURE__*/_react.default.createElement(_index2.HoverMenuListItem, {
    label: fileObject !== null && fileObject !== void 0 && fileObject.id ? _index.default.t('Save') : _index.default.t('Save…'),
    icon: /*#__PURE__*/_react.default.createElement(_ui.IconSave24, {
      color: !onSave || !(!(fileObject !== null && fileObject !== void 0 && fileObject.id) || fileObject !== null && fileObject !== void 0 && (_fileObject$access = fileObject.access) !== null && _fileObject$access !== void 0 && _fileObject$access.update) ? iconInactiveColor : iconActiveColor
    }),
    disabled: !onSave || !(!(fileObject !== null && fileObject !== void 0 && fileObject.id) || fileObject !== null && fileObject !== void 0 && (_fileObject$access2 = fileObject.access) !== null && _fileObject$access2 !== void 0 && _fileObject$access2.update),
    onClick: fileObject !== null && fileObject !== void 0 && fileObject.id ? onSave : onMenuItemClick('saveas'),
    dataTest: "file-menu-save"
  }), /*#__PURE__*/_react.default.createElement(_index2.HoverMenuListItem, {
    label: _index.default.t('Save as…'),
    icon: /*#__PURE__*/_react.default.createElement(_ui.IconSave24, {
      color: !(onSaveAs && fileObject !== null && fileObject !== void 0 && fileObject.id) ? iconInactiveColor : iconActiveColor
    }),
    disabled: !(onSaveAs && fileObject !== null && fileObject !== void 0 && fileObject.id),
    onClick: onMenuItemClick('saveas'),
    dataTest: "file-menu-saveas"
  }), /*#__PURE__*/_react.default.createElement(_index2.HoverMenuListItem, {
    label: _index.default.t('Rename…'),
    icon: /*#__PURE__*/_react.default.createElement(_ui.IconEdit24, {
      color: fileObject !== null && fileObject !== void 0 && fileObject.id && fileObject !== null && fileObject !== void 0 && (_fileObject$access3 = fileObject.access) !== null && _fileObject$access3 !== void 0 && _fileObject$access3.update ? iconActiveColor : iconInactiveColor
    }),
    disabled: !(fileObject !== null && fileObject !== void 0 && fileObject.id && fileObject !== null && fileObject !== void 0 && (_fileObject$access4 = fileObject.access) !== null && _fileObject$access4 !== void 0 && _fileObject$access4.update),
    onClick: onMenuItemClick('rename'),
    dataTest: "file-menu-rename"
  }), /*#__PURE__*/_react.default.createElement(_index2.HoverMenuListItem, {
    label: _index.default.t('Translate…'),
    icon: /*#__PURE__*/_react.default.createElement(_ui.IconTranslate24, {
      color: fileObject !== null && fileObject !== void 0 && fileObject.id && fileObject !== null && fileObject !== void 0 && (_fileObject$access5 = fileObject.access) !== null && _fileObject$access5 !== void 0 && _fileObject$access5.update ? iconActiveColor : iconInactiveColor
    }),
    disabled: !(fileObject !== null && fileObject !== void 0 && fileObject.id && fileObject !== null && fileObject !== void 0 && (_fileObject$access6 = fileObject.access) !== null && _fileObject$access6 !== void 0 && _fileObject$access6.update),
    onClick: onMenuItemClick('translate'),
    dataTest: "file-menu-translate"
  }), /*#__PURE__*/_react.default.createElement(_ui.MenuDivider, {
    dense: true
  }), /*#__PURE__*/_react.default.createElement(_index2.HoverMenuListItem, {
    label: _index.default.t('Share…'),
    icon: /*#__PURE__*/_react.default.createElement(_ui.IconShare24, {
      color: fileObject !== null && fileObject !== void 0 && fileObject.id && fileObject !== null && fileObject !== void 0 && (_fileObject$access7 = fileObject.access) !== null && _fileObject$access7 !== void 0 && _fileObject$access7.manage ? iconActiveColor : iconInactiveColor
    }),
    disabled: !(fileObject !== null && fileObject !== void 0 && fileObject.id && fileObject !== null && fileObject !== void 0 && (_fileObject$access8 = fileObject.access) !== null && _fileObject$access8 !== void 0 && _fileObject$access8.manage),
    onClick: onMenuItemClick('sharing'),
    dataTest: "file-menu-sharing"
  }), /*#__PURE__*/_react.default.createElement(_index2.HoverMenuListItem, {
    label: _index.default.t('Get link…'),
    icon: /*#__PURE__*/_react.default.createElement(_ui.IconLink24, {
      color: fileObject !== null && fileObject !== void 0 && fileObject.id ? iconActiveColor : iconInactiveColor
    }),
    disabled: !(fileObject !== null && fileObject !== void 0 && fileObject.id),
    onClick: onMenuItemClick('getlink'),
    dataTest: "file-menu-getlink"
  }), /*#__PURE__*/_react.default.createElement(_ui.MenuDivider, {
    dense: true
  }), /*#__PURE__*/_react.default.createElement(_index2.HoverMenuListItem, {
    label: _index.default.t('Delete'),
    destructive: true,
    icon: /*#__PURE__*/_react.default.createElement(_ui.IconDelete24, {
      color: fileObject !== null && fileObject !== void 0 && fileObject.id && fileObject !== null && fileObject !== void 0 && (_fileObject$access9 = fileObject.access) !== null && _fileObject$access9 !== void 0 && _fileObject$access9.delete ? _ui.colors.red700 : iconInactiveColor
    }),
    disabled: !(fileObject !== null && fileObject !== void 0 && fileObject.id && fileObject !== null && fileObject !== void 0 && (_fileObject$access10 = fileObject.access) !== null && _fileObject$access10 !== void 0 && _fileObject$access10.delete),
    onClick: onMenuItemClick('delete'),
    dataTest: "file-menu-delete"
  }))), renderDialog());
};
exports.FileMenu = FileMenu;
FileMenu.defaultProps = {
  onDelete: Function.prototype,
  onError: Function.prototype,
  onNew: Function.prototype,
  onOpen: Function.prototype,
  onRename: Function.prototype,
  onShare: Function.prototype,
  onTranslate: Function.prototype
};
FileMenu.propTypes = {
  currentUser: _propTypes.default.object,
  defaultFilterVisType: _propTypes.default.string,
  fileObject: _propTypes.default.object,
  fileType: _propTypes.default.oneOf(_utils.supportedFileTypes),
  filterVisTypes: _propTypes.default.array,
  onDelete: _propTypes.default.func,
  onError: _propTypes.default.func,
  onNew: _propTypes.default.func,
  onOpen: _propTypes.default.func,
  onRename: _propTypes.default.func,
  onSave: _propTypes.default.func,
  onSaveAs: _propTypes.default.func,
  onShare: _propTypes.default.func,
  onTranslate: _propTypes.default.func
};
var _default = exports.default = FileMenu;