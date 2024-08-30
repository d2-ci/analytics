"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FileMenu = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _ui = require("@dhis2/ui");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _index = _interopRequireDefault(require("../../locales/index.js"));

var _OpenFileDialog = require("../OpenFileDialog/OpenFileDialog.js");

var _index2 = require("../TranslationDialog/index.js");

var _DeleteDialog = require("./DeleteDialog.js");

var _FileMenuStyles = require("./FileMenu.styles.js");

var _GetLinkDialog = require("./GetLinkDialog.js");

var _RenameDialog = require("./RenameDialog.js");

var _SaveAsDialog = require("./SaveAsDialog.js");

var _utils = require("./utils.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  const [menuIsOpen, setMenuIsOpen] = (0, _react.useState)(false);
  const [currentDialog, setCurrentDialog] = (0, _react.useState)(null); // Escape key press closes the menu

  const onKeyDown = e => {
    if ((e === null || e === void 0 ? void 0 : e.keyCode) === 27) {
      setMenuIsOpen(false);
    }
  };

  const onMenuItemClick = dialogToOpen => () => {
    setMenuIsOpen(false);
    setCurrentDialog(dialogToOpen);
  };

  const onDialogClose = () => setCurrentDialog(null);

  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);

  const onDeleteConfirm = () => {
    // The dialog must be closed before calling the callback
    // otherwise the fileObject is changed to null before the
    // dialog is closed causing a crash in renderDialog() below
    // due to fileObject.id not being available
    onDialogClose();
    onDelete();
  };

  const buttonRef = /*#__PURE__*/(0, _react.createRef)();

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
        return /*#__PURE__*/_react.default.createElement(_index2.TranslationDialog, {
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
  return /*#__PURE__*/_react.default.createElement("div", {
    onKeyDown: onKeyDown,
    className: "jsx-".concat(_FileMenuStyles.fileMenuStyles.__hash)
  }, /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _FileMenuStyles.fileMenuStyles.__hash
  }, _FileMenuStyles.fileMenuStyles), /*#__PURE__*/_react.default.createElement("div", {
    ref: buttonRef,
    className: "jsx-".concat(_FileMenuStyles.fileMenuStyles.__hash)
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: toggleMenu,
    "data-test": "file-menu-toggle",
    className: "jsx-".concat(_FileMenuStyles.fileMenuStyles.__hash) + " " + "menu-toggle"
  }, _index.default.t('File'))), /*#__PURE__*/_react.default.createElement(_OpenFileDialog.OpenFileDialog, {
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
  }), menuIsOpen && /*#__PURE__*/_react.default.createElement(_ui.Layer, {
    onBackdropClick: toggleMenu,
    position: "fixed",
    level: 2000,
    dataTest: "file-menu-toggle-layer"
  }, /*#__PURE__*/_react.default.createElement(_ui.Popper, {
    reference: buttonRef,
    placement: "bottom-start"
  }, /*#__PURE__*/_react.default.createElement(_ui.FlyoutMenu, {
    dataTest: "file-menu-container"
  }, /*#__PURE__*/_react.default.createElement(_ui.MenuItem, {
    label: _index.default.t('New'),
    icon: /*#__PURE__*/_react.default.createElement(_ui.IconAdd24, {
      color: iconActiveColor
    }),
    onClick: () => {
      toggleMenu();
      onNew();
    },
    dataTest: "file-menu-new"
  }), /*#__PURE__*/_react.default.createElement(_ui.MenuDivider, null), /*#__PURE__*/_react.default.createElement(_ui.MenuItem, {
    label: _index.default.t('Open…'),
    icon: /*#__PURE__*/_react.default.createElement(_ui.IconLaunch24, {
      color: iconActiveColor
    }),
    onClick: onMenuItemClick('open'),
    dataTest: "file-menu-open"
  }), /*#__PURE__*/_react.default.createElement(_ui.MenuItem, {
    label: fileObject !== null && fileObject !== void 0 && fileObject.id ? _index.default.t('Save') : _index.default.t('Save…'),
    icon: /*#__PURE__*/_react.default.createElement(_ui.IconSave24, {
      color: !onSave || !(!(fileObject !== null && fileObject !== void 0 && fileObject.id) || fileObject !== null && fileObject !== void 0 && (_fileObject$access = fileObject.access) !== null && _fileObject$access !== void 0 && _fileObject$access.update) ? iconInactiveColor : iconActiveColor
    }),
    disabled: !onSave || !(!(fileObject !== null && fileObject !== void 0 && fileObject.id) || fileObject !== null && fileObject !== void 0 && (_fileObject$access2 = fileObject.access) !== null && _fileObject$access2 !== void 0 && _fileObject$access2.update),
    onClick: fileObject !== null && fileObject !== void 0 && fileObject.id ? () => {
      toggleMenu();
      onSave();
    } : onMenuItemClick('saveas'),
    dataTest: "file-menu-save"
  }), /*#__PURE__*/_react.default.createElement(_ui.MenuItem, {
    label: _index.default.t('Save as…'),
    icon: /*#__PURE__*/_react.default.createElement(_ui.IconSave24, {
      color: !(onSaveAs && fileObject !== null && fileObject !== void 0 && fileObject.id) ? iconInactiveColor : iconActiveColor
    }),
    disabled: !(onSaveAs && fileObject !== null && fileObject !== void 0 && fileObject.id),
    onClick: onMenuItemClick('saveas'),
    dataTest: "file-menu-saveas"
  }), /*#__PURE__*/_react.default.createElement(_ui.MenuItem, {
    label: _index.default.t('Rename…'),
    icon: /*#__PURE__*/_react.default.createElement(_ui.IconEdit24, {
      color: fileObject !== null && fileObject !== void 0 && fileObject.id && fileObject !== null && fileObject !== void 0 && (_fileObject$access3 = fileObject.access) !== null && _fileObject$access3 !== void 0 && _fileObject$access3.update ? iconActiveColor : iconInactiveColor
    }),
    disabled: !(fileObject !== null && fileObject !== void 0 && fileObject.id && fileObject !== null && fileObject !== void 0 && (_fileObject$access4 = fileObject.access) !== null && _fileObject$access4 !== void 0 && _fileObject$access4.update),
    onClick: onMenuItemClick('rename'),
    dataTest: "file-menu-rename"
  }), /*#__PURE__*/_react.default.createElement(_ui.MenuItem, {
    label: _index.default.t('Translate…'),
    icon: /*#__PURE__*/_react.default.createElement(_ui.IconTranslate24, {
      color: fileObject !== null && fileObject !== void 0 && fileObject.id && fileObject !== null && fileObject !== void 0 && (_fileObject$access5 = fileObject.access) !== null && _fileObject$access5 !== void 0 && _fileObject$access5.update ? iconActiveColor : iconInactiveColor
    }),
    disabled: !(fileObject !== null && fileObject !== void 0 && fileObject.id && fileObject !== null && fileObject !== void 0 && (_fileObject$access6 = fileObject.access) !== null && _fileObject$access6 !== void 0 && _fileObject$access6.update),
    onClick: onMenuItemClick('translate'),
    dataTest: "file-menu-translate"
  }), /*#__PURE__*/_react.default.createElement(_ui.MenuDivider, null), /*#__PURE__*/_react.default.createElement(_ui.MenuItem, {
    label: _index.default.t('Share…'),
    icon: /*#__PURE__*/_react.default.createElement(_ui.IconShare24, {
      color: fileObject !== null && fileObject !== void 0 && fileObject.id && fileObject !== null && fileObject !== void 0 && (_fileObject$access7 = fileObject.access) !== null && _fileObject$access7 !== void 0 && _fileObject$access7.manage ? iconActiveColor : iconInactiveColor
    }),
    disabled: !(fileObject !== null && fileObject !== void 0 && fileObject.id && fileObject !== null && fileObject !== void 0 && (_fileObject$access8 = fileObject.access) !== null && _fileObject$access8 !== void 0 && _fileObject$access8.manage),
    onClick: onMenuItemClick('sharing'),
    dataTest: "file-menu-sharing"
  }), /*#__PURE__*/_react.default.createElement(_ui.MenuItem, {
    label: _index.default.t('Get link…'),
    icon: /*#__PURE__*/_react.default.createElement(_ui.IconLink24, {
      color: fileObject !== null && fileObject !== void 0 && fileObject.id ? iconActiveColor : iconInactiveColor
    }),
    disabled: !(fileObject !== null && fileObject !== void 0 && fileObject.id),
    onClick: onMenuItemClick('getlink'),
    dataTest: "file-menu-getlink"
  }), /*#__PURE__*/_react.default.createElement(_ui.MenuDivider, null), /*#__PURE__*/_react.default.createElement(_ui.MenuItem, {
    label: _index.default.t('Delete'),
    destructive: true,
    icon: /*#__PURE__*/_react.default.createElement(_ui.IconDelete24, {
      color: fileObject !== null && fileObject !== void 0 && fileObject.id && fileObject !== null && fileObject !== void 0 && (_fileObject$access9 = fileObject.access) !== null && _fileObject$access9 !== void 0 && _fileObject$access9.delete ? _ui.colors.red700 : iconInactiveColor
    }),
    disabled: !(fileObject !== null && fileObject !== void 0 && fileObject.id && fileObject !== null && fileObject !== void 0 && (_fileObject$access10 = fileObject.access) !== null && _fileObject$access10 !== void 0 && _fileObject$access10.delete),
    onClick: onMenuItemClick('delete'),
    dataTest: "file-menu-delete"
  })))), renderDialog());
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
var _default = FileMenu;
exports.default = _default;