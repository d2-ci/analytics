"use strict";

var _ui = require("@dhis2/ui");
var _enzyme = require("enzyme");
var _react = _interopRequireDefault(require("react"));
var _SaveAsDialog = require("../SaveAsDialog.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('The FileMenu - SaveAsDialog component', () => {
  let shallowSaveAsDialog;
  let props;
  const onClose = jest.fn();
  const onSaveAs = jest.fn();
  const getSaveAsDialogComponent = props => {
    if (!shallowSaveAsDialog) {
      shallowSaveAsDialog = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_SaveAsDialog.SaveAsDialog, props));
    }
    return shallowSaveAsDialog;
  };
  beforeEach(() => {
    shallowSaveAsDialog = undefined;
    props = {
      type: 'visualization',
      object: {
        name: 'Save as name test',
        description: 'Save as description test'
      },
      onClose,
      onSaveAs
    };
  });
  it('renders a Modal component', () => {
    expect(getSaveAsDialogComponent(props).find(_ui.Modal)).toHaveLength(1);
  });
  it('renders a ModalTitle containing the type prop', () => {
    expect(getSaveAsDialogComponent(props).find(_ui.ModalTitle).childAt(0).text()).toEqual(`Save ${props.type} as`);
  });
  it('renders a InputField for name with prefilled value from the object prop', () => {
    const nameInputField = getSaveAsDialogComponent(props).findWhere(n => n.prop('label') === 'Name');
    expect(nameInputField.prop('value')).toEqual('Save as name test (copy)');
  });
  it('renders a TextAreaField for description with prefilled value from the object prop', () => {
    const descriptionInputField = getSaveAsDialogComponent(props).findWhere(n => n.prop('label') === 'Description');
    expect(descriptionInputField.prop('value')).toEqual(props.object.description);
  });
  it('calls the onSaveAs callback when the Save button is clicked', () => {
    getSaveAsDialogComponent(props).find(_ui.Button).at(1).simulate('click');
    expect(onSaveAs).toHaveBeenCalledWith({
      name: 'Save as name test (copy)',
      description: props.object.description
    });
  });
  it('calls the onClose callback when the Cancel button is clicked', () => {
    getSaveAsDialogComponent(props).find(_ui.Button).first().simulate('click');
    expect(onClose).toHaveBeenCalled();
  });
});