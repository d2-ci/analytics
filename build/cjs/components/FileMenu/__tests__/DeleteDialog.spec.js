"use strict";

var _react = require("@testing-library/react");
var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));
var _react2 = _interopRequireDefault(require("react"));
var _DeleteDialog = require("../DeleteDialog.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
describe('FileMenu - DeleteDialog component', () => {
  const props = {
    type: 'visualization',
    id: 'delete-test',
    onClose: jest.fn()
  };
  test('renders a Modal component', () => {
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_DeleteDialog.DeleteDialog, props));
    const modalComponent = _react.screen.getByTestId('file-menu-delete-modal');
    expect(modalComponent).toBeInTheDocument();
  });
  test('renders a ModalTitle containing the type prop', () => {
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_DeleteDialog.DeleteDialog, props));
    const modalTitleComponent = _react.screen.getByText(`Delete ${props.type}`);
    expect(modalTitleComponent).toBeInTheDocument();
  });
  test('calls the onClose callback when the Cancel button is clicked', async () => {
    const user = _userEvent.default.setup();
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_DeleteDialog.DeleteDialog, props));
    const cancelButton = _react.screen.getByRole('button', {
      name: 'Cancel'
    });
    await user.click(cancelButton);
    expect(props.onClose).toHaveBeenCalledTimes(1);
  });
});