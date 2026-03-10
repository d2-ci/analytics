"use strict";

var _appRuntime = require("@dhis2/app-runtime");
var _react = require("@testing-library/react");
var _react2 = _interopRequireDefault(require("react"));
var _TranslationModal = require("../TranslationModal.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const mockUseTranslationResults = jest.fn(() => ({
  translationsData: undefined,
  fetching: false
}));
jest.mock('../useTranslationsResults.js', () => ({
  useTranslationsResults: args => mockUseTranslationResults(args)
}));
describe('TranslationDialog component', () => {
  let props;
  const onClose = jest.fn();
  const onTranslationSaved = jest.fn();
  const renderTranslationModalComponent = props => {
    return (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_appRuntime.CustomDataProvider, {
      data: {
        i18n: {
          name: 'Name',
          description: 'Description'
        },
        'locales/db': [{
          locale: 'en',
          name: 'English',
          displayName: 'English'
        }]
      }
    }, /*#__PURE__*/_react2.default.createElement(_TranslationModal.TranslationModal, props)));
  };
  beforeEach(() => {
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
  test('renders a Modal component', () => {
    renderTranslationModalComponent(props);
    expect(_react.screen.getByTestId('dhis2-analytics-translation-modal')).toBeInTheDocument();
  });
  test("renders a ModalTitle containing the object's name", () => {
    renderTranslationModalComponent(props);
    expect(_react.screen.getByText(`Translate: ${props.objectToTranslate.name}`)).toBeInTheDocument();
  });
  test.each(['https://dhis2.tld/path/api/visualization/object-id', 'https://dhis2.tld/path/api/42/visualization/object-id'])('uses the correct resource for the translation endpoint', href => {
    props.objectToTranslate.href = href;
    renderTranslationModalComponent(props);
    expect(mockUseTranslationResults).toHaveBeenCalled();
    expect(mockUseTranslationResults).toHaveBeenCalledWith({
      resource: 'visualization/object-id'
    });
  });
});