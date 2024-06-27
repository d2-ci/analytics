"use strict";

var _AnalyticsBase = _interopRequireDefault(require("../AnalyticsBase.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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