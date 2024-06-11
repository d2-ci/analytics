"use strict";

var _enzyme = require("enzyme");
var _react = _interopRequireDefault(require("react"));
var _DimensionsPanel = _interopRequireDefault(require("../DimensionsPanel.js"));
var _DimensionList = _interopRequireDefault(require("../List/DimensionList.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('The Dimensions component ', () => {
  let shallowDimensions;
  let props;
  const dimensionsComponent = () => {
    if (!shallowDimensions) {
      shallowDimensions = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_DimensionsPanel.default, props));
    }
    return shallowDimensions;
  };
  beforeEach(() => {
    shallowDimensions = undefined;
    props = {
      dimensions: []
    };
  });
  it('renders a div', () => {
    expect(dimensionsComponent().find('div').length).toEqual(1);
  });
  it('renders a div containing everything else', () => {
    const wrappingDiv = dimensionsComponent().find('div').first();
    expect(wrappingDiv.children()).toEqual(dimensionsComponent().children());
  });
  it('renders a DimensionList with the correct prop', () => {
    const dimensionsComp = dimensionsComponent();
    dimensionsComp.setState({
      filterText: 'filteredText'
    });
    const filteredList = dimensionsComp.find(_DimensionList.default).first();
    expect(filteredList.props().filterText).toEqual(dimensionsComp.state().filterText);
  });
});