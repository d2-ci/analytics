"use strict";

var _appRuntime = require("@dhis2/app-runtime");
var _react = require("@testing-library/react");
var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));
require("@testing-library/jest-dom");
var _react2 = _interopRequireDefault(require("react"));
var _index = require("../../Toolbar/index.js");
var _FileMenu = require("../FileMenu.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
jest.mock('../../TranslationDialog/TranslationModal/useTranslationsResults.js', () => ({
  /* This will keep the translation dialog in
   * a loading state, which prevents it from
   * throwing other errors */
  useTranslationsResults: () => ({
    translationsData: undefined,
    fetching: true
  })
}));
describe('FileMenu component ', () => {
  const onDelete = jest.fn();
  const onError = jest.fn();
  const onNew = jest.fn();
  const onOpen = jest.fn();
  const onRename = jest.fn();
  const onSave = jest.fn();
  const onSaveAs = jest.fn();
  const onShare = jest.fn();
  const onTranslate = jest.fn();
  const baseProps = {
    currentUser: {
      id: 'u1',
      displayName: 'Test user'
    },
    fileType: 'visualization',
    fileObject: undefined,
    onDelete,
    onError,
    onNew,
    onOpen,
    onRename,
    onSave,
    onSaveAs,
    onShare,
    onTranslate
  };
  const fullAccessProps = {
    fileObject: {
      id: 'test',
      access: {
        delete: true,
        manage: true,
        update: true
      },
      href: 'http://dhis2.org'
    }
  };
  const renderFileMenu = (customProps = {}) => {
    const props = {
      ...baseProps,
      ...customProps
    };
    const providerData = {
      translations: {
        translations: {}
      },
      sharing: {
        meta: {
          allowPublicAccess: true
        },
        object: {
          userAccesses: [],
          userGroupAccesses: []
        }
      },
      visualizations: {
        pager: {
          page: 1,
          pageSize: 50
        },
        visualizations: [{
          id: 'vis1',
          displayName: 'Visualization 1',
          type: 'VISUALIZATION',
          created: '2025-07-23T15:04:16.864',
          lastUpdated: '2025-07-23T15:04:16.864'
        }]
      }
    };
    return (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_appRuntime.CustomDataProvider, {
      data: providerData
    }, /*#__PURE__*/_react2.default.createElement(_index.HoverMenuBar, null, /*#__PURE__*/_react2.default.createElement(_FileMenu.FileMenu, props))));
  };
  const openDropdown = async () => {
    const user = _userEvent.default.setup();
    await user.click(_react.screen.getByTestId('dhis2-analytics-hovermenudropdown'));
    expect(await _react.screen.findByTestId('file-menu-container')).toBeVisible();
  };
  const MENU_ITEMS = {
    NEW: {
      testId: 'file-menu-new',
      text: 'New'
    },
    OPEN: {
      testId: 'file-menu-open',
      text: 'Open…'
    },
    SAVE: {
      testId: 'file-menu-save',
      text: 'Save'
    },
    SAVE_AS: {
      testId: 'file-menu-saveas',
      text: 'Save as…'
    },
    RENAME: {
      testId: 'file-menu-rename',
      text: 'Rename…'
    },
    TRANSLATE: {
      testId: 'file-menu-translate',
      text: 'Translate…'
    },
    SHARE: {
      testId: 'file-menu-sharing',
      text: 'Share…'
    },
    GET_LINK: {
      testId: 'file-menu-getlink',
      text: 'Get link…'
    },
    DELETE: {
      testId: 'file-menu-delete',
      text: 'Delete'
    }
  };
  const assertMenuItemsDisabledState = menuItems => {
    for (const menuTitem of menuItems) {
      const li = _react.screen.getByTestId(menuTitem.testId);
      expect((0, _react.getByText)(li, menuTitem.text)).toBeVisible();
      if (menuTitem.disabled) {
        expect(li).toHaveClass('disabled');
      } else {
        expect(li).not.toHaveClass('disabled');
      }
    }
  };
  test('renders a button', () => {
    renderFileMenu();
    expect(_react.screen.getAllByTestId('dhis2-analytics-hovermenudropdown')).toHaveLength(1);
    const button = _react.screen.getByTestId('dhis2-analytics-hovermenudropdown');
    expect(button).toBeVisible();
    expect(button).toHaveTextContent('File');
  });
  test('opens when clicking the button', async () => {
    renderFileMenu();
    expect(_react.screen.queryByTestId('file-menu-container')).not.toBeInTheDocument();
    await openDropdown();
    expect(await _react.screen.findByTestId('file-menu-container')).toBeVisible();
  });
  test('renders some enabled buttons regardless of the access settings', async () => {
    renderFileMenu();
    await openDropdown();
    assertMenuItemsDisabledState([{
      ...MENU_ITEMS.NEW,
      disabled: false
    }, {
      ...MENU_ITEMS.OPEN,
      disabled: false
    }]);
  });
  test('renders some disabled buttons when no fileObject is present', async () => {
    renderFileMenu();
    await openDropdown();
    assertMenuItemsDisabledState([{
      ...MENU_ITEMS.SAVE_AS,
      disabled: true
    }, {
      ...MENU_ITEMS.RENAME,
      disabled: true
    }, {
      ...MENU_ITEMS.TRANSLATE,
      disabled: true
    }, {
      ...MENU_ITEMS.SHARE,
      disabled: true
    }, {
      ...MENU_ITEMS.GET_LINK,
      disabled: true
    }, {
      ...MENU_ITEMS.DELETE,
      disabled: true
    }]);
  });
  test('renders some enabled buttons when update access is granted', async () => {
    const customProps = {
      fileObject: {
        id: 'test',
        access: {
          delete: false,
          manage: false,
          update: true
        }
      }
    };
    renderFileMenu(customProps);
    await openDropdown();
    assertMenuItemsDisabledState([{
      ...MENU_ITEMS.SAVE,
      disabled: false
    }, {
      ...MENU_ITEMS.RENAME,
      disabled: false
    }, {
      ...MENU_ITEMS.TRANSLATE,
      disabled: false
    }]);
  });
  test('renders enabled Delete button when delete access is granted', async () => {
    const customProps = {
      fileObject: {
        id: 'test',
        access: {
          delete: true,
          manage: false,
          update: false
        }
      }
    };
    renderFileMenu(customProps);
    await openDropdown();
    assertMenuItemsDisabledState([{
      ...MENU_ITEMS.DELETE,
      disabled: false
    }]);
  });
  test('renders enabled Share button when manage access is granted', async () => {
    const customProps = {
      fileObject: {
        id: 'test',
        access: {
          delete: false,
          manage: true,
          update: false
        }
      }
    };
    renderFileMenu(customProps);
    await openDropdown();
    assertMenuItemsDisabledState([{
      ...MENU_ITEMS.SHARE,
      disabled: false
    }]);
  });
  test('renders the OpenFileDialog component when the Open button is clicked', async () => {
    const user = _userEvent.default.setup();
    renderFileMenu();
    await openDropdown();
    await user.click(_react.screen.getByTestId(MENU_ITEMS.OPEN.testId));
    expect(await _react.screen.findByText('Open a visualization', {
      selector: 'h1'
    })).toBeVisible();
  });
  test('renders the RenameDialog when the Rename button is clicked', async () => {
    const user = _userEvent.default.setup();
    renderFileMenu(fullAccessProps);
    await openDropdown();
    await user.click(_react.screen.getByTestId(MENU_ITEMS.RENAME.testId));
    expect(await _react.screen.findByText('Rename visualization', {
      selector: 'h1'
    })).toBeVisible();
  });
  test('renders the TranslationDialog when the Translate button is clicked', async () => {
    const user = _userEvent.default.setup();
    renderFileMenu(fullAccessProps);
    await openDropdown();
    await user.click(_react.screen.getByTestId(MENU_ITEMS.TRANSLATE.testId));
    expect(await _react.screen.findByText('Translate', {
      exact: false,
      selector: 'h1'
    })).toBeVisible();
  });
  test('renders the SharingDialog when the Share button is clicked', async () => {
    const user = _userEvent.default.setup();
    renderFileMenu(fullAccessProps);
    await openDropdown();
    await user.click(_react.screen.getByTestId(MENU_ITEMS.SHARE.testId));
    expect(await _react.screen.findByText('Sharing and access', {
      selector: 'h1'
    })).toBeVisible();
  });
  test('renders the GetLinkDialog when the Get link button is clicked', async () => {
    const user = _userEvent.default.setup();
    const url = 'http://localhost/dhis-web-data-visualizer/#/test';
    renderFileMenu(fullAccessProps);
    await openDropdown();
    await user.click(_react.screen.getByTestId(MENU_ITEMS.GET_LINK.testId));
    expect(await _react.screen.findByTestId('dhis2-uicore-modal')).toBeVisible();
    expect(_react.screen.getByRole('link', {
      name: url
    })).toHaveAttribute('href', url);
  });
  test('renders the DeleteDialog when the Delete button is clicked', async () => {
    const user = _userEvent.default.setup();
    const customProps = {
      fileObject: {
        id: 'delete-test',
        access: {
          delete: true,
          manage: true,
          update: true
        }
      }
    };
    renderFileMenu(customProps);
    await openDropdown();
    await user.click(_react.screen.getByTestId(MENU_ITEMS.DELETE.testId));
    expect(await _react.screen.findByText('Delete visualization', {
      selector: 'h1'
    })).toBeVisible();
  });
  test('renders the SaveAsDialog when the Save as… button is clicked', async () => {
    const user = _userEvent.default.setup();
    renderFileMenu(fullAccessProps);
    await openDropdown();
    await user.click(_react.screen.getByTestId(MENU_ITEMS.SAVE_AS.testId));
    expect(await _react.screen.findByText('Save visualization as', {
      selector: 'h1'
    })).toBeVisible();
  });
  test('renders the SaveAsDialog when the Save… button is clicked but no fileObject is present', async () => {
    const user = _userEvent.default.setup();
    const customProps = {
      fileObject: {
        // NOTE: no `id` field
        access: {
          update: true
        }
      }
    };
    renderFileMenu(customProps);
    await openDropdown();
    await user.click(_react.screen.getByTestId(MENU_ITEMS.SAVE.testId));
    expect(await _react.screen.findByText('Save visualization as', {
      selector: 'h1'
    })).toBeVisible();
  });
  test('calls the onSave callback when the Save button is clicked and a fileObject is present', async () => {
    const user = _userEvent.default.setup();
    renderFileMenu(fullAccessProps);
    await openDropdown();
    await user.click(_react.screen.getByTestId(MENU_ITEMS.SAVE.testId));
    expect(_react.screen.queryByText('Open a visualization')).not.toBeVisible();
    expect(onSave).toHaveBeenCalledTimes(1);
  });
  test('calls the onNew callback when the New button is clicked', async () => {
    const user = _userEvent.default.setup();
    renderFileMenu();
    await openDropdown();
    await user.click(_react.screen.getByTestId(MENU_ITEMS.NEW.testId));
    expect(_react.screen.queryByText('Open a visualization')).not.toBeVisible();
    expect(onNew).toHaveBeenCalledTimes(1);
  });
});