"use strict";

var _AnalyticsRequestBase = _interopRequireDefault(require("../AnalyticsRequestBase.js"));
var _utils = require("../utils.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
jest.mock('../utils', () => ({
  customEncodeURIComponent: jest.fn(x => `<${x}>`)
}));
const endPoint = 'foo';
const path = 'bar';
const program = 'census';
const format = 'json';
const basePath = `${endPoint}/${path}/${program}.${format}`;
const dimensions = [{
  dimension: 'ou',
  items: ['mars', 'earth']
}, {
  dimension: 'dx',
  items: ['population']
}, {
  dimension: 'question'
}, {
  dimension: 'answer',
  items: ['42']
}];
const buildRequest = overrides => {
  return new _AnalyticsRequestBase.default({
    endPoint,
    path,
    program,
    format,
    parameters: {
      foo: 'bar'
    },
    ...overrides
  });
};
describe('AnalyticsRequestBase', () => {
  beforeEach(() => {
    _utils.customEncodeURIComponent.mockClear();
  });
  it('Should build a URL of encoded dimension parameters', () => {
    const request = buildRequest({
      dimensions
    });
    const url = request.buildUrl();
    expect(_utils.customEncodeURIComponent).toHaveBeenCalledTimes(4);
    expect(url).toBe(`${basePath}?dimension=ou:<mars>;<earth>&dimension=dx:<population>&dimension=question&dimension=answer:<42>`);
  });
  it('Should build a URL with sorted dimension parameters when options.sorted=true', () => {
    const request = buildRequest({
      dimensions
    });
    const url = request.buildUrl({
      sorted: true
    });
    expect(_utils.customEncodeURIComponent).toHaveBeenCalledTimes(4);
    expect(url).toBe(`${basePath}?dimension=answer:<42>&dimension=dx:<population>&dimension=ou:<earth>;<mars>&dimension=question`);
  });
  it('Should not choke on a null or empty filter array', () => {
    const request = buildRequest();
    const query = request.buildQuery();
    expect(_utils.customEncodeURIComponent).toHaveBeenCalledTimes(0);
    expect(query).toMatchObject({
      foo: 'bar'
    });
    const request2 = buildRequest({
      filters: []
    });
    const query2 = request2.buildQuery();
    expect(_utils.customEncodeURIComponent).toHaveBeenCalledTimes(0);
    expect(query2).toMatchObject({
      foo: 'bar'
    });
  });
  it('Should build a query with encoded filter parameters', () => {
    const request = buildRequest({
      filters: dimensions
    });
    const query = request.buildQuery();
    expect(_utils.customEncodeURIComponent).toHaveBeenCalledTimes(4);
    expect(query).toMatchObject({
      foo: 'bar',
      filter: ['ou:<mars>;<earth>', 'dx:<population>', 'question', 'answer:<42>']
    });
  });
  it('Should build a query with sorted filter parameters when options.sorted=true', () => {
    const request = buildRequest({
      filters: dimensions
    });
    const query = request.buildQuery({
      sorted: true
    });
    expect(_utils.customEncodeURIComponent).toHaveBeenCalledTimes(4);
    expect(query).toMatchObject({
      foo: 'bar',
      filter: ['answer:<42>', 'dx:<population>', 'ou:<earth>;<mars>', 'question']
    });
  });
});