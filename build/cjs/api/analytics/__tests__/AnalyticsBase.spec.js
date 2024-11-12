"use strict";

var _AnalyticsBase = _interopRequireWildcard(require("../AnalyticsBase.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
    output: ['dim1:item1', 'dim2:item2;item1'],
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