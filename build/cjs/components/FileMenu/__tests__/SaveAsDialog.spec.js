"use strict";

var _react = require("@testing-library/react");
var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));
var _react2 = _interopRequireDefault(require("react"));
var _SaveAsDialog = require("../SaveAsDialog.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
describe('FileMenu - SaveAsDialog component', () => {
  const onClose = jest.fn();
  const onSaveAs = jest.fn();
  const props = {
    type: 'visualization',
    object: {
      name: 'Save as name test',
      description: 'Save as description test'
    },
    onClose,
    onSaveAs
  };
  test('renders a Modal component', () => {
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_SaveAsDialog.SaveAsDialog, props));
    expect(_react.screen.getByTestId('file-menu-saveas-modal')).toBeInTheDocument();
  });
  test('renders a ModalTitle containing the type prop', () => {
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_SaveAsDialog.SaveAsDialog, props));
    expect(_react.screen.getByRole('heading')).toHaveTextContent(`Save ${props.type} as`);
  });
  test('renders a InputField for name with prefilled value from the object prop', () => {
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_SaveAsDialog.SaveAsDialog, props));
    expect(_react.screen.getByTestId('file-menu-saveas-modal-name')).toBeInTheDocument();
    expect(_react.screen.getByText('Name')).toBeInTheDocument();
    expect(_react.screen.getByText('Name')).toBeVisible();
    expect(_react.screen.getByDisplayValue('Save as name test (copy)')).toBeInTheDocument();
  });
  test('renders a TextAreaField for description with prefilled value from the object prop', () => {
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_SaveAsDialog.SaveAsDialog, props));
    expect(_react.screen.getByTestId('file-menu-saveas-modal-description')).toBeInTheDocument();
    expect(_react.screen.getByText('Description')).toBeInTheDocument();
    expect(_react.screen.getByText('Description')).toBeVisible();
    expect(_react.screen.getByDisplayValue(props.object.description)).toBeInTheDocument();
  });
  test('calls the onSaveAs callback when the Save button is clicked', async () => {
    const user = _userEvent.default.setup();
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_SaveAsDialog.SaveAsDialog, props));
    const saveButton = _react.screen.getByRole('button', {
      name: 'Save'
    });
    await user.click(saveButton);
    expect(onSaveAs).toHaveBeenCalledWith({
      name: 'Save as name test (copy)',
      description: props.object.description
    });
  });
  test('calls the onClose callback when the Cancel button is clicked', async () => {
    const user = _userEvent.default.setup();
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_SaveAsDialog.SaveAsDialog, props));
    const cancelButton = _react.screen.getByRole('button', {
      name: 'Cancel'
    });
    await user.click(cancelButton);
    expect(onClose).toHaveBeenCalled();
  });
});