"use strict";

var _AnalyticsBase = _interopRequireWildcard(require("../AnalyticsBase.js"));
var _AnalyticsRequest = _interopRequireDefault(require("../AnalyticsRequest.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
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
    tests.forEach(({
      input,
      output
    }) => {
      expect((0, _AnalyticsBase.generateDimensionStrings)(input)).toEqual(output);
    });
  });
  it('should return dimension strings correctly formatted and sorted', () => {
    tests.forEach(({
      input,
      outputSorted
    }) => {
      expect((0, _AnalyticsBase.generateDimensionStrings)(input, {
        sorted: true
      })).toEqual(outputSorted);
    });
  });
});
describe('abort signal', () => {
  let dataEngineMock;
  let req;
  beforeEach(() => {
    dataEngineMock = {
      query: jest.fn().mockResolvedValue({
        data: {
          rows: []
        },
        metaData: {
          metaData: {}
        }
      })
    };
    base = new _AnalyticsBase.default(dataEngineMock);
    req = new _AnalyticsRequest.default().withPath('events/query').addDimension('dim1', ['item2', 'item1']);
  });
  describe('.fetch()', () => {
    it('should pass the signal from options to the data engine', async () => {
      const {
        signal
      } = new AbortController();
      await base.fetch(req, {
        signal
      });
      expect(dataEngineMock.query.mock.calls[0][1].signal).toBe(signal);
    });
    it('should pass no signal when no options are given', async () => {
      await base.fetch(req);
      expect(dataEngineMock.query.mock.calls[0][1].signal).toBeUndefined();
    });
    it('should still sort dimensions when a signal is passed alongside', async () => {
      const {
        signal
      } = new AbortController();
      await base.fetch(req, {
        sorted: true,
        signal
      });
      const [, {
        variables,
        signal: passedSignal
      }] = dataEngineMock.query.mock.calls[0];
      expect(variables.dimensions).toEqual(['dim1:item1;item2']);
      expect(passedSignal).toBe(signal);
    });
  });
  describe('.get()', () => {
    it('should pass the signal from options to the data engine', async () => {
      const {
        signal
      } = new AbortController();
      await base.get(req, {
        signal
      });
      expect(dataEngineMock.query.mock.calls[0][1].signal).toBe(signal);
    });
    it('should pass no signal when no options are given', async () => {
      await base.get(req);
      expect(dataEngineMock.query.mock.calls[0][1].signal).toBeUndefined();
    });
  });
});