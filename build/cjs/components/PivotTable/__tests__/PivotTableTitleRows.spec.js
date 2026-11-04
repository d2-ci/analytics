"use strict";

var _react = require("@testing-library/react");
var _react2 = _interopRequireDefault(require("react"));
var _deepWithFiltersData = _interopRequireDefault(require("../../../__demo__/data/aggregate/deepWithFilters.data.json"));
var _deepWithFiltersVisualization = _interopRequireDefault(require("../../../__demo__/data/aggregate/deepWithFilters.visualization.json"));
var _PivotTable = _interopRequireDefault(require("../PivotTable.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The engine measures every cell against a canvas 2d context, which jsdom
 * does not implement. */
jest.mock('../../../modules/pivotTable/measureText.js', () => ({
  measureTextWithWrapping: () => ({
    width: 100,
    height: 20
  })
}));

/* The container renders nothing at all until it has a size, and jsdom reports
 * every element as 0 x 0. */
jest.mock('../../../modules/pivotTable/useParentSize.js', () => ({
  useParentSize: () => ({
    width: 800,
    height: 600
  })
}));

/* `deepWithFilters` filters on an org unit group set, which `getFilterText`
 * resolves through `metaData.dimensions` to this name. */
const DERIVED_FILTER_TEXT = 'Eastern Area';
const visualization = {
  ..._deepWithFiltersVisualization.default,
  title: 'Hello',
  subtitle: 'Goodbye'
};
const renderTable = props => (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_PivotTable.default, _extends({
  visualization: visualization,
  data: _deepWithFiltersData.default
}, props)));
const titleRowTexts = () => _react.screen.queryAllByTestId('visualization-title').map(element => element.textContent);
describe('PivotTable title rows', () => {
  it('derives the filter row from the layout when no text is supplied', () => {
    renderTable();
    expect(titleRowTexts()).toEqual(['Hello', 'Goodbye', DERIVED_FILTER_TEXT]);
  });
  it('renders no filter row when the layout has no filters', () => {
    renderTable({
      visualization: {
        ...visualization,
        filters: []
      }
    });
    expect(titleRowTexts()).toEqual(['Hello', 'Goodbye']);
  });
  it('renders the supplied text in place of the derived one', () => {
    renderTable({
      filterText: 'Age 5 - 10, Female'
    });
    expect(titleRowTexts()).toEqual(['Hello', 'Goodbye', 'Age 5 - 10, Female']);
  });

  /* Whether there is a row remains the layout's call - supplying the text
   * says what goes in the row, not whether there is one. */
  it('does not render a supplied text the layout has no row for', () => {
    renderTable({
      visualization: {
        ...visualization,
        filters: []
      },
      filterText: 'Age 5 - 10, Female'
    });
    expect(titleRowTexts()).toEqual(['Hello', 'Goodbye']);
  });

  /* An empty string is a caller with nothing to say, not a caller asking
   * for an empty row. */
  it('derives the filter row for an empty supplied text', () => {
    renderTable({
      filterText: ''
    });
    expect(titleRowTexts()).toEqual(['Hello', 'Goodbye', DERIVED_FILTER_TEXT]);
  });
  it('leaves the title and subtitle to the visualization', () => {
    renderTable({
      visualization: {
        ...visualization,
        hideSubtitle: true
      },
      filterText: 'Age 5 - 10'
    });
    expect(titleRowTexts()).toEqual(['Hello', 'Age 5 - 10']);
  });
});