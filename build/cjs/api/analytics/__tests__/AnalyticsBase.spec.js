"use strict";

var _AnalyticsBase = _interopRequireWildcard(require("../AnalyticsBase.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
let base;
describe('constructor', () => {
  beforeEach(() => {
    base = new _AnalyticsBase.default();
  });
  it('should not be allowed to be called without new', () => {
    expect(() => (0, _AnalyticsBase.default)()).toThrowErrorMatchingSnapshot();
  });
  it('should use the dataEngine mock object when it is passed', () => {
    const dataEngineMock = {};
    base = new _AnalyticsBase.default(dataEngineMock);
    expect(base.dataEngine).toBe(dataEngineMock);
  });
});
describe('generateDimensionString', () => {
  const tests = [{
    input: [{
      dimension: 'dim2',
      items: ['item2', 'item1']
    }, {
      dimension: 'dim1',
      items: ['item1']
    }],
    output: ['dim2:item2;item1', 'dim1:item1'],
    outputSorted: ['dim1:item1', 'dim2:item1;item2']
  }];
  it('should return dimension strings correctly formatted', () => {
    tests.forEach(_ref => {
      let {
        input,
        output
      } = _ref;
      expect((0, _AnalyticsBase.generateDimensionStrings)(input)).toEqual(output);
    });
  });
  it('should return dimension strings correctly formatted and sorted', () => {
    tests.forEach(_ref2 => {
      let {
        input,
        outputSorted
      } = _ref2;
      expect((0, _AnalyticsBase.generateDimensionStrings)(input, {
        sorted: true
      })).toEqual(outputSorted);
    });
  });
});