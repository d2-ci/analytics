import _JSXStyle from "styled-jsx/style";
import { IconAdd24, IconLaunch24, IconSave24, IconEdit24, IconTranslate24, IconShare24, IconLink24, IconDelete24, SharingDialog, colors, FlyoutMenu, Layer, MenuItem, MenuDivider, Popper } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { createRef, useState } from 'react';
import i18n from '../../locales/index.js';
import { OpenFileDialog } from '../OpenFileDialog/OpenFileDialog.js';
import { TranslationDialog } from '../TranslationDialog/index.js';
import { DeleteDialog } from './DeleteDialog.js';
import { fileMenuStyles } from './FileMenu.styles.js';
import { GetLinkDialog } from './GetLinkDialog.js';
import { RenameDialog } from './RenameDialog.js';
import { SaveAsDialog } from './SaveAsDialog.js';
import { supportedFileTypes } from './utils.js';
export const FileMenu = _ref => {
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
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [currentDialog, setCurrentDialog] = useState(null); // Escape key press closes the menu

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

  const buttonRef = /*#__PURE__*/createRef();

  const renderDialog = () => {
    switch (currentDialog) {
      case 'rename':
        return /*#__PURE__*/React.createElement(RenameDialog, {
          type: fileType,
          object: fileObject,
          onClose: onDialogClose,
          onRename: onRename,
          onError: onError
        });

      case 'translate':
        return /*#__PURE__*/React.createElement(TranslationDialog, {
          objectToTranslate: fileObject,
          fieldsToTranslate: ['name', 'description'],
          onClose: onDialogClose,
          onTranslationSaved: () => {
            onDialogClose();
            onTranslate();
          }
        });

      case 'sharing':
        return /*#__PURE__*/React.createElement(SharingDialog, {
          type: fileType,
          id: fileObject.id,
          onClose: onDialogClose,
          onSave: onShare
        });

      case 'getlink':
        return /*#__PURE__*/React.createElement(GetLinkDialog, {
          type: fileType,
          id: fileObject.id,
          onClose: onDialogClose
        });

      case 'delete':
        return /*#__PURE__*/React.createElement(DeleteDialog, {
          type: fileType,
          id: fileObject.id,
          onDelete: onDeleteConfirm,
          onError: onError,
          onClose: onDialogClose
        });

      case 'saveas':
        return /*#__PURE__*/React.createElement(SaveAsDialog, {
          type: fileType,
          object: fileObject,
          onSaveAs: onSaveAs || Function.prototype,
          onClose: onDialogClose
        });

      default:
        return null;
    }
  };

  const iconActiveColor = colors.grey700;
  const iconInactiveColor = colors.grey500;
  return /*#__PURE__*/React.createElement("div", {
    onKeyDown: onKeyDown,
    className: "jsx-".concat(fileMenuStyles.__hash)
  }, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: fileMenuStyles.__hash
  }, fileMenuStyles), /*#__PURE__*/React.createElement("div", {
    ref: buttonRef,
    className: "jsx-".concat(fileMenuStyles.__hash)
  }, /*#__PURE__*/React.createElement("button", {
    onClick: toggleMenu,
    "data-test": "file-menu-toggle",
    className: "jsx-".concat(fileMenuStyles.__hash) + " " + "menu-toggle"
  }, i18n.t('File'))), /*#__PURE__*/React.createElement(OpenFileDialog, {
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
  }), menuIsOpen && /*#__PURE__*/React.createElement(Layer, {
    onBackdropClick: toggleMenu,
    position: "fixed",
    level: 2000,
    dataTest: "file-menu-toggle-layer"
  }, /*#__PURE__*/React.createElement(Popper, {
    reference: buttonRef,
    placement: "bottom-start"
  }, /*#__PURE__*/React.createElement(FlyoutMenu, {
    dataTest: "file-menu-container"
  }, /*#__PURE__*/React.createElement(MenuItem, {
    label: i18n.t('New'),
    icon: /*#__PURE__*/React.createElement(IconAdd24, {
      color: iconActiveColor
    }),
    onClick: () => {
      toggleMenu();
      onNew();
    },
    dataTest: "file-menu-new"
  }), /*#__PURE__*/React.createElement(MenuDivider, null), /*#__PURE__*/React.createElement(MenuItem, {
    label: i18n.t('Open…'),
    icon: /*#__PURE__*/React.createElement(IconLaunch24, {
      color: iconActiveColor
    }),
    onClick: onMenuItemClick('open'),
    dataTest: "file-menu-open"
  }), /*#__PURE__*/React.createElement(MenuItem, {
    label: fileObject !== null && fileObject !== void 0 && fileObject.id ? i18n.t('Save') : i18n.t('Save…'),
    icon: /*#__PURE__*/React.createElement(IconSave24, {
      color: !onSave || !(!(fileObject !== null && fileObject !== void 0 && fileObject.id) || fileObject !== null && fileObject !== void 0 && (_fileObject$access = fileObject.access) !== null && _fileObject$access !== void 0 && _fileObject$access.update) ? iconInactiveColor : iconActiveColor
    }),
    disabled: !onSave || !(!(fileObject !== null && fileObject !== void 0 && fileObject.id) || fileObject !== null && fileObject !== void 0 && (_fileObject$access2 = fileObject.access) !== null && _fileObject$access2 !== void 0 && _fileObject$access2.update),
    onClick: fileObject !== null && fileObject !== void 0 && fileObject.id ? () => {
      toggleMenu();
      onSave();
    } : onMenuItemClick('saveas'),
    dataTest: "file-menu-save"
  }), /*#__PURE__*/React.createElement(MenuItem, {
    label: i18n.t('Save as…'),
    icon: /*#__PURE__*/React.createElement(IconSave24, {
      color: !(onSaveAs && fileObject !== null && fileObject !== void 0 && fileObject.id) ? iconInactiveColor : iconActiveColor
    }),
    disabled: !(onSaveAs && fileObject !== null && fileObject !== void 0 && fileObject.id),
    onClick: onMenuItemClick('saveas'),
    dataTest: "file-menu-saveas"
  }), /*#__PURE__*/React.createElement(MenuItem, {
    label: i18n.t('Rename…'),
    icon: /*#__PURE__*/React.createElement(IconEdit24, {
      color: fileObject !== null && fileObject !== void 0 && fileObject.id && fileObject !== null && fileObject !== void 0 && (_fileObject$access3 = fileObject.access) !== null && _fileObject$access3 !== void 0 && _fileObject$access3.update ? iconActiveColor : iconInactiveColor
    }),
    disabled: !(fileObject !== null && fileObject !== void 0 && fileObject.id && fileObject !== null && fileObject !== void 0 && (_fileObject$access4 = fileObject.access) !== null && _fileObject$access4 !== void 0 && _fileObject$access4.update),
    onClick: onMenuItemClick('rename'),
    dataTest: "file-menu-rename"
  }), /*#__PURE__*/React.createElement(MenuItem, {
    label: i18n.t('Translate…'),
    icon: /*#__PURE__*/React.createElement(IconTranslate24, {
      color: fileObject !== null && fileObject !== void 0 && fileObject.id && fileObject !== null && fileObject !== void 0 && (_fileObject$access5 = fileObject.access) !== null && _fileObject$access5 !== void 0 && _fileObject$access5.update ? iconActiveColor : iconInactiveColor
    }),
    disabled: !(fileObject !== null && fileObject !== void 0 && fileObject.id && fileObject !== null && fileObject !== void 0 && (_fileObject$access6 = fileObject.access) !== null && _fileObject$access6 !== void 0 && _fileObject$access6.update),
    onClick: onMenuItemClick('translate'),
    dataTest: "file-menu-translate"
  }), /*#__PURE__*/React.createElement(MenuDivider, null), /*#__PURE__*/React.createElement(MenuItem, {
    label: i18n.t('Share…'),
    icon: /*#__PURE__*/React.createElement(IconShare24, {
      color: fileObject !== null && fileObject !== void 0 && fileObject.id && fileObject !== null && fileObject !== void 0 && (_fileObject$access7 = fileObject.access) !== null && _fileObject$access7 !== void 0 && _fileObject$access7.manage ? iconActiveColor : iconInactiveColor
    }),
    disabled: !(fileObject !== null && fileObject !== void 0 && fileObject.id && fileObject !== null && fileObject !== void 0 && (_fileObject$access8 = fileObject.access) !== null && _fileObject$access8 !== void 0 && _fileObject$access8.manage),
    onClick: onMenuItemClick('sharing'),
    dataTest: "file-menu-sharing"
  }), /*#__PURE__*/React.createElement(MenuItem, {
    label: i18n.t('Get link…'),
    icon: /*#__PURE__*/React.createElement(IconLink24, {
      color: fileObject !== null && fileObject !== void 0 && fileObject.id ? iconActiveColor : iconInactiveColor
    }),
    disabled: !(fileObject !== null && fileObject !== void 0 && fileObject.id),
    onClick: onMenuItemClick('getlink'),
    dataTest: "file-menu-getlink"
  }), /*#__PURE__*/React.createElement(MenuDivider, null), /*#__PURE__*/React.createElement(MenuItem, {
    label: i18n.t('Delete'),
    destructive: true,
    icon: /*#__PURE__*/React.createElement(IconDelete24, {
      color: fileObject !== null && fileObject !== void 0 && fileObject.id && fileObject !== null && fileObject !== void 0 && (_fileObject$access9 = fileObject.access) !== null && _fileObject$access9 !== void 0 && _fileObject$access9.delete ? colors.red700 : iconInactiveColor
    }),
    disabled: !(fileObject !== null && fileObject !== void 0 && fileObject.id && fileObject !== null && fileObject !== void 0 && (_fileObject$access10 = fileObject.access) !== null && _fileObject$access10 !== void 0 && _fileObject$access10.delete),
    onClick: onMenuItemClick('delete'),
    dataTest: "file-menu-delete"
  })))), renderDialog());
};
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
  currentUser: PropTypes.object,
  defaultFilterVisType: PropTypes.string,
  fileObject: PropTypes.object,
  fileType: PropTypes.oneOf(supportedFileTypes),
  filterVisTypes: PropTypes.array,
  onDelete: PropTypes.func,
  onError: PropTypes.func,
  onNew: PropTypes.func,
  onOpen: PropTypes.func,
  onRename: PropTypes.func,
  onSave: PropTypes.func,
  onSaveAs: PropTypes.func,
  onShare: PropTypes.func,
  onTranslate: PropTypes.func
};
export default FileMenu;