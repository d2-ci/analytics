"use strict";

var _react = require("@testing-library/react");
var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));
var _react2 = _interopRequireDefault(require("react"));
var _RenameDialog = require("../RenameDialog.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
describe('FileMenu - RenameDialog component', () => {
  const onClose = jest.fn();
  const onRename = jest.fn();
  const props = {
    type: 'visualization',
    object: {
      id: 'rename-test'
    },
    onClose,
    onRename
  };
  beforeEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });
  test('renders a Modal component with the correct heading', () => {
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_RenameDialog.RenameDialog, props));
    expect(_react.screen.getAllByTestId('file-menu-rename-modal')).toHaveLength(1);
    expect(_react.screen.getByRole('heading')).toHaveTextContent('Rename visualization');
  });
  test('renders a InputField for name', () => {
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_RenameDialog.RenameDialog, props));
    expect(_react.screen.getByTestId('file-menu-rename-modal-name')).toBeInTheDocument();
    expect(_react.screen.getByText('Name')).toBeInTheDocument();
    expect(_react.screen.getByText('Name')).toBeVisible();
  });
  test('renders a InputField for name with prefilled value if name is in object prop', () => {
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_RenameDialog.RenameDialog, _extends({}, props, {
      object: {
        ...props.object,
        name: 'Vis test'
      }
    })));
    const ancestorElement = _react.screen.getByTestId('file-menu-rename-modal-name');
    const inputElement = (0, _react.within)(ancestorElement).getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('Vis test');
  });
  test('renders a TextAreaField for description', () => {
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_RenameDialog.RenameDialog, props));

    // Locate the label by its text
    const labelElement = _react.screen.getByText('Description');

    // Find the textarea element within the same container as the label
    const descriptionField = labelElement.closest('div').querySelector('textarea');
    expect(descriptionField).toBeInTheDocument();
    expect(descriptionField).toBeVisible();
  });
  test('renders a TextAreaField for description with prefilled value if description is in object prop', () => {
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_RenameDialog.RenameDialog, _extends({}, props, {
      object: {
        ...props.object,
        description: 'Long explanation of the visualization'
      }
    })));

    // Locate the label by its text
    const labelElement = _react.screen.getByText('Description');

    // Find the textarea element within the same container as the label
    const descriptionField = labelElement.closest('div').querySelector('textarea');
    expect(descriptionField).toBeInTheDocument();
    expect(descriptionField).toHaveValue('Long explanation of the visualization');
  });
  test('calls the onClose callback when the Cancel button is clicked', async () => {
    const user = _userEvent.default.setup();
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_RenameDialog.RenameDialog, props));
    await user.click(_react.screen.getByRole('button', {
      name: 'Cancel'
    }));
    expect(onClose).toHaveBeenCalled();
    expect(onRename).not.toHaveBeenCalled();
  });
  test('calls the onRename callback when the Rename button is clicked', async () => {
    const user = _userEvent.default.setup();
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_RenameDialog.RenameDialog, props));
    await user.click(_react.screen.getByRole('button', {
      name: 'Rename'
    }));
    expect(onRename).toHaveBeenCalled();
    expect(onClose).toHaveBeenCalled();
  });
});