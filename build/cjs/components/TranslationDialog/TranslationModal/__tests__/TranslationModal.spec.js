"use strict";

var _ui = require("@dhis2/ui");
var _enzyme = require("enzyme");
var _react = _interopRequireDefault(require("react"));
var _TranslationModal = require("../TranslationModal.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const mockUseTranslationResults = jest.fn(() => ({
  translationsData: undefined,
  fetching: false
}));
jest.mock('../useTranslationsResults.js', () => ({
  useTranslationsResults: args => mockUseTranslationResults(args)
}));
describe('The Translation Dialog component', () => {
  let shallowTranslationModal;
  let props;
  const onClose = jest.fn();
  const onTranslationSaved = jest.fn();
  const getTranslationModalComponent = props => {
    if (!shallowTranslationModal) {
      shallowTranslationModal = (0, _enzyme.shallow)(/*#__PURE__*/_react.default.createElement(_TranslationModal.TranslationModal, props));
    }
    return shallowTranslationModal;
  };
  beforeEach(() => {
    shallowTranslationModal = undefined;
    props = {
      fieldsToTranslate: ['name', 'description'],
      objectToTranslate: {
        name: 'Test object',
        href: 'https://dhis2.tld/path/api/visualization/object-id'
      },
      onClose,
      onTranslationSaved
    };
  });
  it('renders a Modal component', () => {
    expect(getTranslationModalComponent(props).find(_ui.Modal)).toHaveLength(1);
  });
  it("renders a ModalTitle containing the object's name", () => {
    expect(getTranslationModalComponent(props).find(_ui.ModalTitle).childAt(0).text()).toEqual(`Translate: ${props.objectToTranslate.name}`);
  });
  test.each(['https://dhis2.tld/path/api/visualization/object-id', 'https://dhis2.tld/path/api/42/visualization/object-id'])('uses the correct resource for the translation endpoint', href => {
    props.objectToTranslate.href = href;
    getTranslationModalComponent(props);
    expect(mockUseTranslationResults).toHaveBeenCalled();
    expect(mockUseTranslationResults).toHaveBeenCalledWith({
      resource: 'visualization/object-id'
    });
  });
});