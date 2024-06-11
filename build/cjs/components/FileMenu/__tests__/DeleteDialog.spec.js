"use strict";

var _ui = require("@dhis2/ui");

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _DeleteDialog = require("../DeleteDialog.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('The FileMenu - DeleteDialog component', () => {
  let shallowDeleteDialog;
  let props;
  const onClose = jest.fn();

  const getDeleteDialogComponent = props => {
    if (!shallowDeleteDialog) {
      shallowDeleteDialog = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_DeleteDialog.DeleteDialog, props));
    }

    return shallowDeleteDialog;
  };

  beforeEach(() => {
    shallowDeleteDialog = undefined;
    props = {
      type: 'visualization',
      id: 'delete-test',
      onClose
    };
  });
  it('renders a Modal component', () => {
    expect(getDeleteDialogComponent(props).find(_ui.Modal)).toHaveLength(1);
  });
  it('renders a ModalTitle containing the type prop', () => {
    expect(getDeleteDialogComponent(props).find(_ui.ModalTitle).childAt(0).text()).toEqual("Delete ".concat(props.type));
  });
  it('calls the onClose callback when the Cancel button is clicked', () => {
    getDeleteDialogComponent(props).find(_ui.Button).first().simulate('click');
    expect(onClose).toHaveBeenCalled();
  });
});